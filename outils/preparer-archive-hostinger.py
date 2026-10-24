#!/usr/bin/env python3
"""Prépare l'archive ZIP du site UB Academy pour un hébergement classique (Hostinger).

Usage :
    python3 outils/preparer-archive-hostinger.py --sortie ub-academy-site-hostinger.zip
    python3 outils/preparer-archive-hostinger.py --domaine https://www.exemple.ma --sortie ub-academy-site-hostinger.zip

Sans --domaine, l'archive garde le repère « https://domaine-a-renseigner.invalid » :
le site fonctionne, mais l'adresse officielle des pages, l'image d'aperçu des liens
(WhatsApp, Facebook) et le plan du site pour Google ne seront justes qu'une fois
ce repère remplacé par le domaine final.

L'archive contient uniquement les fichiers du site, rangés à la racine du ZIP
(à extraire directement dans public_html). Aucun fichier de travail.
"""
import argparse
import datetime
import os
import re
import sys
import zipfile

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REPERE = "https://domaine-a-renseigner.invalid"
PAGES = ["index.html", "en/index.html", "confidentialite.html", "en/privacy.html"]
AUTRES = ["robots.txt", "sitemap.xml", ".htaccess"]
TEXTES = (".html", ".xml", ".txt", ".css", ".js", ".htaccess")


def fichiers_du_site():
    liste = PAGES + AUTRES
    for dossier, _, noms in os.walk(os.path.join(RACINE, "assets")):
        for nom in noms:
            liste.append(os.path.relpath(os.path.join(dossier, nom), RACINE).replace(os.sep, "/"))
    return sorted(set(liste))


def references_locales(chemin_page, html):
    """Tous les fichiers appelés par une page (src, href, poster, srcset)."""
    refs = re.findall(r'(?:src|href|poster)="([^"]+)"', html)
    for valeur in re.findall(r'(?:srcset|imagesrcset)="([^"]+)"', html):
        refs += [morceau.strip().split(" ")[0] for morceau in valeur.split(",")]
    locales = []
    for r in refs:
        if r.startswith(("http:", "https:", "mailto:", "tel:", "#", "data:")):
            continue
        r = r.split("#")[0].split("?")[0]
        if not r:
            continue
        cible = os.path.join(os.path.dirname(chemin_page), r)
        if r.endswith("/"):  # lien vers un dossier : le serveur sert son index.html
            cible = os.path.join(cible, "index.html")
        locales.append((r, os.path.normpath(cible).replace(os.sep, "/")))
    return locales


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--domaine", help="adresse finale, ex. https://www.exemple.ma (sans / final)")
    p.add_argument("--sortie", default="ub-academy-site-hostinger.zip")
    a = p.parse_args()

    if a.domaine:
        a.domaine = a.domaine.strip().rstrip("/")
        if not re.fullmatch(r"https://[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}", a.domaine):
            sys.exit("Domaine invalide : écrire par exemple https://www.exemple.ma (https, minuscules, sans / final)")

    fichiers = fichiers_du_site()
    contenus, erreurs = {}, []
    for f in fichiers:
        chemin = os.path.join(RACINE, f)
        if not os.path.isfile(chemin):
            erreurs.append(f"fichier absent : {f}")
            continue
        with open(chemin, "rb") as h:
            data = h.read()
        if f.endswith(TEXTES):
            texte = data.decode("utf-8")
            if a.domaine:
                texte = texte.replace(REPERE, a.domaine)
            if f == "sitemap.xml":
                texte = re.sub(r"<lastmod>[^<]*</lastmod>", f"<lastmod>{datetime.date.today().isoformat()}</lastmod>", texte)
            for interdit in ("github.io", "ulysse80"):
                if interdit in texte:
                    erreurs.append(f"adresse GitHub restante dans {f}")
            data = texte.encode("utf-8")
        contenus[f] = data

    # Chaque fichier appelé par une page doit exister dans l'archive, à la casse près
    for page in PAGES:
        for brut, cible in references_locales(page, contenus[page].decode("utf-8")):
            if brut.startswith("/"):
                erreurs.append(f"{page} : chemin absolu « {brut} » (doit être relatif)")
            elif cible not in contenus:
                erreurs.append(f"{page} : « {brut} » introuvable dans l'archive ({cible})")

    if erreurs:
        print("ARCHIVE NON CRÉÉE :")
        print("\n".join("  - " + e for e in erreurs))
        sys.exit(1)

    maintenant = datetime.datetime.now().timetuple()[:6]
    with zipfile.ZipFile(a.sortie, "w", zipfile.ZIP_DEFLATED) as z:
        for f in sorted(contenus):
            info = zipfile.ZipInfo(f, date_time=maintenant)  # date réelle : les caches voient les mises à jour
            info.external_attr = 0o644 << 16
            info.compress_type = zipfile.ZIP_DEFLATED
            z.writestr(info, contenus[f])

    reste = sum(c.count(REPERE.encode()) for c in contenus.values())
    print(f"Archive : {a.sortie} ({os.path.getsize(a.sortie) / 1e6:.1f} Mo, {len(contenus)} fichiers)")
    print("Chemins vérifiés : toutes les pages, images, vidéos, styles et scripts sont présents.")
    if a.domaine:
        print(f"Domaine appliqué : {a.domaine}")
    else:
        print(f"Domaine NON renseigné : {reste} repère(s) « {REPERE} » à remplacer (voir GUIDE-HOSTINGER.md).")


if __name__ == "__main__":
    main()
