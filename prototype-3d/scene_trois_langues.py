"""Prototype 3D UB Academy : « Trois langues, une direction ».

Reconstruit entièrement la scène Blender (géométrie, matériaux, lumières, caméra,
animation), l'enregistre en .blend, et peut lancer le rendu.

Testé avec Blender 5.2.3 LTS (module officiel « bpy » et application Blender).

Sur Mac (application Blender) :
    /Applications/Blender.app/Contents/MacOS/Blender -b -P scene_trois_langues.py -- --rendu video

Dans un environnement Python avec le module officiel bpy 5.2.3 :
    python scene_trois_langues.py --rendu sequence

Options (après « -- » quand on passe par l'application Blender) :
    --rendu aucun|images-cles|sequence|video   (défaut : aucun, enregistre seulement le .blend)
    --moteur cycles|eevee                     (défaut : cycles)
    --echantillons 48                          (qualité Cycles)
    --pourcentage 100                          (taille du rendu en % de 720 × 1280)
    --images 1,40,72,110,140,160,176,200,232   (images rendues avec --rendu images-cles)
    --sortie DOSSIER                           (défaut : rendu/ à côté du script)
"""
import argparse
import math
import os
import sys

import bpy
from mathutils import Vector

ICI = os.path.dirname(os.path.abspath(__file__))
RES = os.path.join(ICI, "ressources")
POLICE_LATIN = os.path.join(RES, "polices", "inter-extrabold.ttf")
POLICE_CHINOIS = os.path.join(RES, "polices", "noto-sans-sc-extrabold-zhongwen.ttf")
LOGO = os.path.join(RES, "logo-ub-academy-recadre.png")

# Couleurs exactes du site (assets/css/style.css) et du halo de l'animation actuelle
MARINE, HALO, CREME, ORANGE = "#04142e", "#112e67", "#f6f0e6", "#ff8114"

IPS, DEBUT, FIN = 30, 1, 240  # 8 secondes

# Mise en page finale (unités Blender). La colonne est centrée sur la caméra.
TUILE_L, TUILE_E, TUILE_H = 2.8, 0.36, 1.1     # largeur, épaisseur, hauteur
PLAQUE_L, PLAQUE_H = 3.6, 2.45                 # tuile du logo
Z_FINAL = {"FR": 0.0, "EN": -1.38, "ZH": -2.76}
Z_PLAQUE = 2.275
X_TEXTE_DROITE = 0.38                          # les mots sont alignés à droite…
X_POINT = 0.58                                 # … et finissent par le point orange
Z_POINT = -0.15                                # point posé sur la ligne de base
R_POINT = 0.12
Y_FACE = -TUILE_E / 2                          # face avant des tuiles (vers la caméra)
Z_FIL_BAS, Z_FIL_HAUT = -5.6, Z_PLAQUE - PLAQUE_H / 2 + 0.02


# ---------------------------------------------------------------- outils
def arguments():
    argv = sys.argv
    if "--" in argv:
        argv = argv[argv.index("--") + 1:]
    elif os.path.basename(argv[0]).lower().startswith("blender"):
        argv = []
    else:
        argv = argv[1:]
    p = argparse.ArgumentParser(description="Prototype 3D UB Academy")
    p.add_argument("--rendu", choices=["aucun", "images-cles", "sequence", "video"], default="aucun")
    p.add_argument("--moteur", choices=["cycles", "eevee"], default="cycles")
    p.add_argument("--echantillons", type=int, default=48)
    p.add_argument("--pourcentage", type=int, default=100)
    p.add_argument("--images", default="1,40,72,110,140,160,176,200,232")
    p.add_argument("--sortie", default=os.path.join(ICI, "rendu"))
    p.add_argument("--blend", default=os.path.join(ICI, "ub-academy-trois-langues.blend"))
    return p.parse_args(argv)


def lin(hexa):
    """Couleur hexadécimale sRGB → RGBA linéaire (ce qu'attend Blender)."""
    h = hexa.lstrip("#")
    out = []
    for i in (0, 2, 4):
        c = int(h[i:i + 2], 16) / 255
        out.append(c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4)
    return (*out, 1.0)


def adoucir(t):
    """Accélération puis freinage doux (0 → 1)."""
    t = min(max(t, 0.0), 1.0)
    return t * t * t * (t * (6 * t - 15) + 10)


def materiau(nom):
    m = bpy.data.materials.new(nom)
    if not m.node_tree:  # versions antérieures à Blender 5
        m.use_nodes = True
    return m, m.node_tree, next(n for n in m.node_tree.nodes if n.type == "BSDF_PRINCIPLED")


def mat_principled(nom, couleur, rugosite=0.4, coat=0.0, coat_rug=0.1, emission=None, force=0.0):
    m, nt, p = materiau(nom)
    p.inputs["Base Color"].default_value = lin(couleur)
    p.inputs["Roughness"].default_value = rugosite
    p.inputs["Coat Weight"].default_value = coat
    p.inputs["Coat Roughness"].default_value = coat_rug
    if emission:
        p.inputs["Emission Color"].default_value = lin(emission)
        p.inputs["Emission Strength"].default_value = force
    return m


def mat_emission(nom, couleur, force=1.0):
    m, nt, p = materiau(nom)
    nt.nodes.remove(p)
    sortie = next(n for n in nt.nodes if n.type == "OUTPUT_MATERIAL")
    emi = nt.nodes.new("ShaderNodeEmission")
    emi.inputs["Color"].default_value = lin(couleur)
    emi.inputs["Strength"].default_value = force
    nt.links.new(emi.outputs[0], sortie.inputs["Surface"])
    return m, nt, emi, sortie


def lier(obj, parent=None):
    bpy.context.scene.collection.objects.link(obj)
    if parent:
        obj.parent = parent
    return obj


def plan(nom, mat, parent=None):
    """Carré de 1 × 1 avec coordonnées UV, face vers la caméra (-Y) une fois tourné."""
    me = bpy.data.meshes.new(nom)
    me.from_pydata([(-0.5, -0.5, 0), (0.5, -0.5, 0), (0.5, 0.5, 0), (-0.5, 0.5, 0)], [], [(0, 1, 2, 3)])
    uv = me.uv_layers.new(name="UVMap")
    for i, co in enumerate(((0, 0), (1, 0), (1, 1), (0, 1))):
        uv.data[i].uv = co
    me.materials.append(mat)
    ob = lier(bpy.data.objects.new(nom, me), parent)
    ob.rotation_euler = (math.radians(90), 0, 0)
    return ob


def sphere(nom, rayon, mat, parent=None):
    import bmesh
    me = bpy.data.meshes.new(nom)
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=40, v_segments=20, radius=rayon)
    bm.to_mesh(me)
    bm.free()
    me.shade_smooth()
    me.materials.append(mat)
    return lier(bpy.data.objects.new(nom, me), parent)


def boite_arrondie(nom, largeur, epaisseur, hauteur, rayon, mat):
    """Pavé aux arêtes arrondies (la profondeur est sur l'axe Y, face avant vers la caméra)."""
    import bmesh
    me = bpy.data.meshes.new(nom)
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co.x *= largeur
        v.co.y *= epaisseur
        v.co.z *= hauteur
    bm.to_mesh(me)
    bm.free()
    me.materials.append(mat)
    ob = lier(bpy.data.objects.new(nom, me))
    bev = ob.modifiers.new("Arrondi", "BEVEL")
    bev.width, bev.segments, bev.limit_method, bev.harden_normals = rayon, 10, "NONE", True
    me.shade_smooth()
    return ob


def boite_englobante(ob):
    """Boîte englobante locale (après évaluation) : (xmin, xmax, ymin, ymax)."""
    bpy.context.view_layer.update()
    ev = ob.evaluated_get(bpy.context.evaluated_depsgraph_get())
    xs = [c[0] for c in ev.bound_box]
    ys = [c[1] for c in ev.bound_box]
    return min(xs), max(xs), min(ys), max(ys)


def texte(nom, contenu, police, hauteur, mat, parent, x_droite):
    """Texte en relief, aligné à droite sur x_droite, centré verticalement.

    La taille est réglée sur la hauteur réellement mesurée des lettres : certaines
    polices (dont le sous-ensemble chinois) n'ont pas la même échelle interne.
    """
    cu = bpy.data.curves.new(nom, "FONT")
    cu.body = contenu
    cu.font = bpy.data.fonts.load(police, check_existing=True)
    cu.extrude = 0.035
    cu.bevel_depth = 0.006
    cu.bevel_resolution = 3
    cu.size = 1.0
    cu.materials.append(mat)
    ob = lier(bpy.data.objects.new(nom, cu), parent)
    for _ in range(2):
        x0, x1, y0, y1 = boite_englobante(ob)
        cu.size *= hauteur / (y1 - y0)
    x0, x1, y0, y1 = boite_englobante(ob)
    ob.rotation_euler = (math.radians(90), 0, 0)  # face vers la caméra (-Y)
    ob.location = (x_droite - x1, Y_FACE - 0.03, -(y0 + y1) / 2)
    return ob


def cle(ob, image, loc=None, rot=None, echelle=None):
    if loc is not None:
        ob.location = loc
        ob.keyframe_insert("location", frame=image)
    if rot is not None:
        ob.rotation_euler = tuple(math.radians(a) for a in rot)
        ob.keyframe_insert("rotation_euler", frame=image)
    if echelle is not None:
        ob.scale = (echelle,) * 3 if isinstance(echelle, (int, float)) else echelle
        ob.keyframe_insert("scale", frame=image)


def visible(obs, image, oui):
    for ob in obs:
        ob.hide_render = ob.hide_viewport = not oui
        ob.keyframe_insert("hide_render", frame=image)
        ob.keyframe_insert("hide_viewport", frame=image)


def interpolation_lineaire(actif):
    bpy.context.preferences.edit.keyframe_new_interpolation_type = "LINEAR" if actif else "BEZIER"


# ---------------------------------------------------------------- scène
def construire():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    sc = bpy.context.scene
    sc.name = "UB Academy - Trois langues"
    sc.frame_start, sc.frame_end = DEBUT, FIN
    sc.render.fps = IPS
    sc.render.resolution_x, sc.render.resolution_y = 720, 1280
    # Couleurs fidèles au site : transformation « Khronos PBR Neutral » si disponible
    vues = [e.identifier for e in bpy.types.ColorManagedViewSettings.bl_rna.properties["view_transform"].enum_items_static]
    sc.view_settings.view_transform = "Khronos PBR Neutral" if "Khronos PBR Neutral" in vues else "Standard"
    sc.view_settings.look = "None"

    # Monde : marine très sombre (reflets discrets)
    monde = bpy.data.worlds.new("Monde")
    sc.world = monde
    if not monde.node_tree:
        monde.use_nodes = True
    fond = next(n for n in monde.node_tree.nodes if n.type == "BACKGROUND")
    fond.inputs["Color"].default_value = lin(MARINE)
    fond.inputs["Strength"].default_value = 0.5

    # Fond : halo bleu au centre, marine sur les bords, comme l'animation actuelle
    m, nt, emi, sortie = mat_emission("Fond halo marine", MARINE)
    coord = nt.nodes.new("ShaderNodeTexCoord")
    mapping = nt.nodes.new("ShaderNodeMapping")
    mapping.inputs["Location"].default_value = (0, -0.1, 0)
    mapping.inputs["Scale"].default_value = (5.6, 3.6, 1)
    degrade = nt.nodes.new("ShaderNodeTexGradient")
    degrade.gradient_type = "SPHERICAL"
    rampe = nt.nodes.new("ShaderNodeValToRGB")
    rampe.color_ramp.interpolation = "EASE"
    rampe.color_ramp.elements[0].color = lin(MARINE)
    rampe.color_ramp.elements[1].color = lin(HALO)
    nt.links.new(coord.outputs["Object"], mapping.inputs["Vector"])
    nt.links.new(mapping.outputs["Vector"], degrade.inputs["Vector"])
    nt.links.new(degrade.outputs["Fac"], rampe.inputs["Fac"])
    nt.links.new(rampe.outputs["Color"], emi.inputs["Color"])
    fond_ob = plan("Fond", m)
    fond_ob.scale = (40, 40, 1)
    fond_ob.location = (0, 14, 0.4)
    fond_ob.visible_shadow = False

    # Matériaux
    creme = mat_principled("Céramique crème", CREME, rugosite=0.36, coat=0.35, coat_rug=0.15)
    encre = mat_principled("Encre marine", MARINE, rugosite=0.45)
    point = mat_principled("Point orange", ORANGE, rugosite=0.25, coat=0.6, emission=ORANGE, force=0.35)
    fil = mat_principled("Fil orange", ORANGE, rugosite=0.3, emission=ORANGE, force=0.6)
    eclat, *_ = mat_emission("Éclat", "#ffd9b0", 9.0)

    # Trois tuiles de langue : le mot, puis le point orange du site
    tuiles = {}
    for k, libelle, police, hauteur in (("FR", "FR", POLICE_LATIN, 0.5),
                                         ("EN", "EN", POLICE_LATIN, 0.5),
                                         ("ZH", "中文", POLICE_CHINOIS, 0.6)):
        t = boite_arrondie(f"Tuile {k}", TUILE_L, TUILE_E, TUILE_H, 0.17, creme)
        texte(f"Texte {k}", libelle, police, hauteur, encre, t, X_TEXTE_DROITE)
        pt = sphere(f"Point {k}", R_POINT, point, t)
        pt.location = (X_POINT, Y_FACE - 0.03, Z_POINT)
        tuiles[k] = (t, pt)

    # Tuile du logo (vrai logo UB Academy, couleurs d'origine, sans retouche)
    plaque = boite_arrondie("Tuile logo", PLAQUE_L, TUILE_E, PLAQUE_H, 0.22, creme)
    img = bpy.data.images.load(LOGO, check_existing=True)
    m, nt, p = materiau("Logo UB Academy")
    tex = nt.nodes.new("ShaderNodeTexImage")
    tex.image = img
    tex.interpolation = "Cubic"
    nt.links.new(tex.outputs["Color"], p.inputs["Base Color"])
    nt.links.new(tex.outputs["Alpha"], p.inputs["Alpha"])
    p.inputs["Roughness"].default_value = 0.4
    logo = plan("Logo", m, plaque)
    largeur_logo = 3.0
    logo.scale = (largeur_logo, largeur_logo * img.size[1] / img.size[0], 1)
    logo.location = (0, Y_FACE - 0.003, 0)

    # ---------------------------------------------------- animation des tuiles
    # Images à 30 i/s : arrivée depuis la profondeur, lecture, alignement en colonne.
    trajets = {
        #     départ (loin, tourné)                   lecture (face caméra)            dérive lente                      place finale
        "FR": [(1, (-3.0, 9.0, 4.6), (35, -50, 20)), (44, (-0.25, -0.8, 2.45), (5, -11, 3)), (98, (-0.22, -0.7, 2.4), (2, -5, 1)), (130, (0, 0, Z_FINAL["FR"]), (0, 0, 0))],
        "EN": [(6, (3.6, 8.5, 0.6), (-22, 55, -15)), (54, (0.4, -0.6, 0.45), (-4, 11, -2)), (90, (0.36, -0.5, 0.4), (-2, 5, -1)), (122, (0, 0, Z_FINAL["EN"]), (0, 0, 0))],
        "ZH": [(12, (-2.6, 10.0, -4.2), (40, 42, -25)), (64, (-0.25, -0.7, -1.6), (5, 9, -3)), (82, (-0.22, -0.6, -1.65), (2, 4, -1)), (114, (0, 0, Z_FINAL["ZH"]), (0, 0, 0))],
    }
    for k, etapes in trajets.items():
        t, _ = tuiles[k]
        cle(t, 1, loc=etapes[0][1], rot=etapes[0][2])
        for image, loc, rot in etapes:
            cle(t, image, loc=loc, rot=rot)

    # La tuile logo descend du haut une fois la colonne formée (léger rebond)
    visible([plaque, logo], 1, False)
    visible([plaque, logo], 108, True)
    cle(plaque, 108, loc=(0.0, -1.0, 7.6), rot=(-38, 0, 8))
    cle(plaque, 146, loc=(0.0, 0.0, Z_PLAQUE - 0.07), rot=(1.5, 0, 0))
    cle(plaque, 156, loc=(0.0, 0.0, Z_PLAQUE), rot=(0, 0, 0))

    # ---------------------------------------------------- fil orange
    # Il monte depuis le bas de l'image, passe par les trois points, rejoint le logo.
    xf, yf = X_POINT, Y_FACE - 0.03
    sommets = [Vector((xf, yf, Z_FIL_BAS))]
    sommets += [Vector((xf, yf, Z_FINAL[k] + Z_POINT)) for k in ("ZH", "EN", "FR")]
    sommets.append(Vector((xf, yf, Z_FIL_HAUT)))
    cu = bpy.data.curves.new("Fil", "CURVE")
    cu.dimensions = "3D"
    cu.bevel_depth, cu.bevel_resolution = 0.022, 6
    cu.use_fill_caps = True
    cu.bevel_factor_mapping_end = "SPLINE"  # proportionnel à la longueur
    sp = cu.splines.new("POLY")
    sp.points.add(len(sommets) - 1)
    for pnt, co in zip(sp.points, sommets):
        pnt.co = (*co, 1.0)
    cu.materials.append(fil)
    lier(bpy.data.objects.new("Fil", cu))
    FIL_DEBUT, FIL_FIN = 138, 178
    for image in range(FIL_DEBUT, FIL_FIN + 1):
        cu.bevel_factor_end = adoucir((image - FIL_DEBUT) / (FIL_FIN - FIL_DEBUT))
        cu.keyframe_insert("bevel_factor_end", frame=image)

    # Chaque point « s'allume » quand le fil l'atteint
    longueur = Z_FIL_HAUT - Z_FIL_BAS
    for k in ("ZH", "EN", "FR"):
        _, pt = tuiles[k]
        part = (Z_FINAL[k] + Z_POINT - Z_FIL_BAS) / longueur
        image = next(i for i in range(FIL_DEBUT, FIL_FIN + 1)
                     if adoucir((i - FIL_DEBUT) / (FIL_FIN - FIL_DEBUT)) >= part)
        cle(pt, 1, echelle=1.0)
        cle(pt, image - 2, echelle=1.0)
        cle(pt, image + 3, echelle=1.5)
        cle(pt, image + 11, echelle=1.0)

    # Un éclat de lumière remonte le fil pendant la pause : la direction
    bille = sphere("Éclat", 0.065, eclat)
    bille.visible_shadow = False
    ECLAT_DEBUT, ECLAT_FIN = 184, 214
    cle(bille, 1, loc=(xf, yf, Z_FIL_BAS), echelle=0.0)
    cle(bille, ECLAT_DEBUT, loc=(xf, yf, Z_FIL_BAS), echelle=0.0)
    cle(bille, ECLAT_DEBUT + 1, echelle=1.0)
    for image in range(ECLAT_DEBUT, ECLAT_FIN + 1):
        z = Z_FIL_BAS + (Z_FIL_HAUT - Z_FIL_BAS) * adoucir((image - ECLAT_DEBUT) / (ECLAT_FIN - ECLAT_DEBUT))
        cle(bille, image, loc=(xf, yf, z))
    cle(bille, ECLAT_FIN - 1, echelle=1.0)
    cle(bille, ECLAT_FIN + 1, echelle=0.0)

    # ---------------------------------------------------- lumières
    def lumiere(nom, loc, cible, puissance, couleur, taille):
        ld = bpy.data.lights.new(nom, "AREA")
        ld.energy, ld.color, ld.size = puissance, couleur, taille
        ob = lier(bpy.data.objects.new(nom, ld))
        ob.location = loc
        direction = Vector(cible) - Vector(loc)
        ob.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
        return ob

    lumiere("Clé chaude", (-5.5, -7.0, 6.5), (0, 0, 0), 1500, (1.0, 0.95, 0.88), 6.0)
    lumiere("Remplissage froid", (6.5, -6.0, -1.5), (0, 0, 0), 520, (0.82, 0.88, 1.0), 7.0)
    lumiere("Contre-jour", (1.0, 4.0, 7.0), (0, 0, -0.5), 900, (1.0, 0.9, 0.8), 4.0)

    # ---------------------------------------------------- caméra
    cam_d = bpy.data.cameras.new("Caméra")
    cam_d.lens, cam_d.sensor_fit, cam_d.sensor_width = 50, "AUTO", 36
    cam_d.dof.use_dof = True
    cam_d.dof.aperture_fstop = 1.8
    cam = lier(bpy.data.objects.new("Caméra", cam_d))
    sc.camera = cam
    vise = lier(bpy.data.objects.new("Cible caméra", None))
    vise.location = (0, 0, 0.1)
    suivi = cam.constraints.new("TRACK_TO")
    suivi.target, suivi.track_axis, suivi.up_axis = vise, "TRACK_NEGATIVE_Z", "UP_Y"
    cam_d.dof.focus_object = vise
    # léger travelling continu : révèle l'épaisseur des tuiles
    interpolation_lineaire(True)
    cle(cam, 1, loc=(0.8, -12.8, -0.5))
    cle(cam, FIN, loc=(-0.6, -11.7, 0.45))
    interpolation_lineaire(False)

    # Voile marine devant la caméra : fondu d'entrée et de sortie (boucle propre)
    m, nt, emi, sortie = mat_emission("Voile marine", MARINE)
    transp = nt.nodes.new("ShaderNodeBsdfTransparent")
    melange = nt.nodes.new("ShaderNodeMixShader")
    nt.links.new(transp.outputs[0], melange.inputs[1])
    nt.links.new(emi.outputs[0], melange.inputs[2])
    nt.links.new(melange.outputs[0], sortie.inputs["Surface"])
    fac = melange.inputs["Fac"]
    for image, v in ((1, 1.0), (13, 0.0), (224, 0.0), (FIN, 1.0)):
        fac.default_value = v
        fac.keyframe_insert("default_value", frame=image)
    voile = plan("Voile", m, cam)
    voile.rotation_euler = (0, 0, 0)  # perpendiculaire à l'axe de la caméra
    voile.location = (0, 0, -0.6)
    voile.visible_shadow = False
    return sc


# ---------------------------------------------------------------- rendu
def regler_rendu(sc, a):
    sc.render.resolution_percentage = a.pourcentage
    sc.render.film_transparent = False
    if a.moteur == "cycles":
        import addon_utils
        addon_utils.enable("cycles", default_set=True)
        sc.render.engine = "CYCLES"
        cy = sc.cycles
        cy.samples = a.echantillons
        cy.use_adaptive_sampling = True
        cy.adaptive_threshold = 0.02
        cy.use_denoising = True
        cy.max_bounces, cy.diffuse_bounces, cy.glossy_bounces = 6, 2, 3
        cy.transparent_max_bounces = 8
        cy.caustics_reflective = cy.caustics_refractive = False
        try:  # GPU s'il existe (Mac : Metal), sinon processeur
            prefs = bpy.context.preferences.addons["cycles"].preferences
            for t in ("METAL", "OPTIX", "CUDA", "HIP", "ONEAPI"):
                try:
                    prefs.compute_device_type = t
                    prefs.get_devices()
                    if any(d.type == t for d in prefs.devices):
                        for d in prefs.devices:
                            d.use = True
                        cy.device = "GPU"
                        break
                except TypeError:
                    continue
        except Exception:
            cy.device = "CPU"
    else:
        sc.render.engine = "BLENDER_EEVEE"
        sc.eevee.taa_render_samples = 64
    sc.render.use_motion_blur = True
    sc.render.motion_blur_shutter = 0.4
    sc.render.use_persistent_data = True  # accélère le rendu image par image


def rendre(sc, a):
    os.makedirs(a.sortie, exist_ok=True)
    if a.rendu == "images-cles":
        sc.render.image_settings.media_type = "IMAGE"
        sc.render.image_settings.file_format = "PNG"
        for n in [int(x) for x in a.images.split(",") if x.strip()]:
            sc.frame_set(n)
            sc.render.filepath = os.path.join(a.sortie, f"image-{n:03d}.png")
            bpy.ops.render.render(write_still=True)
    elif a.rendu == "sequence":
        sc.render.image_settings.media_type = "IMAGE"
        sc.render.image_settings.file_format = "PNG"
        sc.render.image_settings.color_mode = "RGB"
        sc.render.filepath = os.path.join(a.sortie, "images", "")
        bpy.ops.render.render(animation=True)
    elif a.rendu == "video":
        im = sc.render.image_settings
        im.media_type = "VIDEO"
        im.file_format = "FFMPEG"
        sc.render.ffmpeg.format = "MPEG4"
        sc.render.ffmpeg.codec = "H264"
        sc.render.ffmpeg.constant_rate_factor = "HIGH"
        sc.render.ffmpeg.audio_codec = "NONE"
        sc.render.filepath = os.path.join(a.sortie, "ub-academy-trois-langues.mp4")
        bpy.ops.render.render(animation=True)


if __name__ == "__main__":
    a = arguments()
    sc = construire()
    regler_rendu(sc, a)
    sc.frame_set(200)
    try:
        bpy.ops.file.pack_all()
    except Exception as e:
        print("Ressources non intégrées au .blend :", e)
    bpy.ops.wm.save_as_mainfile(filepath=a.blend, compress=True)
    print("Scène enregistrée :", a.blend)
    if a.rendu != "aucun":
        rendre(sc, a)
        print("Rendu terminé :", a.sortie)
