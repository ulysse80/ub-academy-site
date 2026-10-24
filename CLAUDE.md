# UB Academy — brief permanent pour Claude Code

Ce dépôt contient le nouveau site vitrine d'UB Academy. Lis ce fichier et TOUT le dossier `contenu/` avant de coder.

## Qui / quoi
- UB Academy : académie de langues **100 % en ligne**, fondée par **Ulysse Bordereau**, qui est le visage de la marque et le formateur.
- Langues : français, anglais, chinois mandarin. Cours individuels ou en groupe.
- 3 raisons de venir : apprendre une langue · préparer un examen international · améliorer sa communication professionnelle (entretiens, présentations, prise de parole).
- UB Academy est une marque distincte d'Elite Zone (centre physique à Laâyoune) : ne jamais mentionner Elite Zone ni de présentiel.

## Décisions validées par Ulysse (prioritaires sur tous les fichiers)
1. **Textes de base = `contenu/02-textes-fr.md` et `contenu/03-textes-en.md`** (ton personnel en « je », un bloc par langue, tout converge vers WhatsApp). Structure = `contenu/01-structure.md`.
2. **100 % en ligne.** Supprime toute mention de « présentiel », « à Laayoune » ou « Laayoune et en ligne » présente dans les textes réécrits. Remplace par « en ligne, où que vous soyez ».
3. **Site bilingue FR / EN**, sélecteur de langue visible en haut. Français par défaut.
4. **Examens à afficher (texte seulement, aucun logo officiel)** : TCF, TEF, DELF, DALF (français) · IELTS, TOEFL, Cambridge (anglais) · HSK (chinois).
5. **Expérience : 7 ans d'expérience personnelle d'Ulysse** (pas l'âge de l'entreprise). Corrige toute mention « cinq années ».
6. **« 300+ personnes accompagnées » est confirmé** et peut être affiché.
7. **FAQ** : reprends les 12 questions de `contenu/ancien-site-contenu-et-faq.md`, réécrites au « je » et sans prix.
8. Aucun prix affiché. Pas de calendrier de réservation.
9. **Formule linguistique validée par Ulysse** : « Français et chinois natifs, anglais bilingue » (EN : « Native French and Chinese, bilingual English »). Ne jamais écrire « anglais courant ».
10. **Promesses autorisées : uniquement** « réponse sous 24 h » et « premier échange gratuit de 15 min ». Ne pas mentionner de cours d'essai / premier cours sans engagement, de taille de groupe (« jusqu'à 10 ») ni de moyen de paiement (« carte bancaire »).

## Contact
- WhatsApp : +212 602431299 → liens `https://wa.me/212602431299?text=...` avec messages pré-remplis (modèles dans `contenu/04-whatsapp-et-photos.md`, remplace 212XXXXXXXXX).
- Email : ubacademyofficial@gmail.com
- Horaires : lundi–samedi, 10:00–12:00 et 14:00–20:00 (heure du Maroc).
- Bouton WhatsApp flottant (rond vert, bas à droite) sur toutes les pages.
- Formulaire : nom, téléphone, email, sujet (cours de langue / examen / communication pro / autre), message. Envoi vers ubacademyofficial@gmail.com via un service gratuit sans serveur (Formspree ou Web3Forms) ; laisse la clé d'API en variable clairement marquée à remplir.

## Identité visuelle
- Ambiance : premium, moderne, humaine, internationale, rassurante.
- Couleurs : bleu marine, blanc, une touche d'orange chaud. Le logo (`medias/logo/logo-ub-academy.png`) est brun/bronze (#6C3D0F) : vérifie qu'il reste lisible et harmonieux ; propose une adaptation si besoin.
- Photos : `medias/photos-ancien-site/` contient les images de l'ancien site. **Les portraits d'Ulysse sont de vraies photos, réutilisation autorisée.** N'utilise aucune photo d'une autre personne présentée comme Ulysse ou comme élève.
- Vidéos (format 9:16, jamais déformées ni coupées sur mobile) : l'animation `medias/video/ub-academy-20s-vertical.mp4` (section « 20 secondes », lecture auto sans son) et la présentation d'Ulysse face caméra `assets/video/ulysse-presentation.mp4` (section « Qui suis-je ? », lecture avec le son au clic).
- Photo de salle de classe (élèves autour d'une table, logo UB au mur) : écartée, car elle montre un lieu physique et des personnes présentées comme élèves. Ne pas l'ajouter sans nouvelle décision explicite d'Ulysse.

## Interdits
- Aucun témoignage inventé. Les 3 témoignages de l'ancien site (Yasmine K., Lina B., Amine R.) ont été **confirmés par Ulysse comme réels, avec l'accord des élèves** : ils sont publiés tels quels (EN = traduction signalée). Ne pas utiliser les portraits qui les accompagnaient sur l'ancien site (ce ne sont pas les élèves) : initiales uniquement. Pas d'étoiles ni de dates relatives (« il y a 10 mois »).
- Aucun taux de réussite, garantie, certification, prix ou chiffre inventé.
- Pas de superlatifs sans preuve (« le meilleur », « révolutionnaire »).
- **Aucun grand tiret (— ou –) dans les textes visibles du site** : Ulysse trouve que ça « fait IA ». Utiliser une virgule, deux-points ou un point. Horaires écrits « de 10 h à 12 h ».
- Blocs de cours : drapeau + nom de la langue (pas de slogan du type « Je parle. »).
- Ne rien publier (GitHub Pages, Hostinger ou autre) avant qu'Ulysse ait vu le site et donné son accord explicite.
- **Hébergement décidé : Hostinger, géré par un ami d'Ulysse.** Pas de GitHub Pages. Ne pas fusionner la PR #1 sans accord, n'activer aucun hébergement, ne toucher ni au domaine ni au DNS.

## Technique
- Site **statique** (HTML/CSS/JS, sans framework lourd), une page par langue (`index.html` = FR, `en/index.html` = EN), hébergé tel quel sur **Hostinger** (fichiers dans `public_html`, sans étape de build). Tous les chemins internes restent **relatifs**. Les adresses complètes (canonical, hreflang, Open Graph, sitemap, robots) utilisent le repère `https://domaine-a-renseigner.invalid` tant que le domaine n'est pas connu. L'archive se fabrique avec `outils/preparer-archive-hostinger.py --domaine https://…` ; guide de l'hébergeur : `GUIDE-HOSTINGER.md`.
- Mobile d'abord, rapide (images WebP compressées, chargement différé), accessible (contrastes, textes alternatifs).
- SEO : titre, description, Open Graph, balises `hreflang` FR/EN, `sitemap.xml`, `robots.txt`.
- Ajoute un fichier `MODIFIER-LE-SITE.md` expliquant en français simple, sans jargon, comment Ulysse change un texte, une photo, la vidéo ou un numéro directement depuis github.com.
- Ne publie rien, n'achète rien, ne change aucun domaine sans l'accord explicite d'Ulysse.
- **Prototype 3D** (`prototype-3d/`, Blender) : animation « Trois langues, une direction », hors du site. Ne pas l'intégrer ni remplacer une vidéo existante sans accord explicite d'Ulysse. Proposition prête dans `prototype-3d/integration/`.
- **Animation réseaux sociaux** (`animation-reseaux/`, Three.js) : vidéo 10 s 1080 × 1920, FR et EN, hors du site. Ne rien publier sur un réseau sans accord explicite d'Ulysse.
