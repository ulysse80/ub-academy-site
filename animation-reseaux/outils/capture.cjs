// Rend l'animation image par image dans Chromium (WebGL) et enregistre des PNG.
// Usage : node outils/capture.cjs [--langue fr|en] [--sortie DOSSIER] [--images 0,45,90]
//   sans --images : les 300 images (0000.png … 0299.png), pour l'encodage vidéo
//   avec --images : seulement ces images (toutes les précédentes sont calculées, à cause des traînées)
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

const arg = (nom, defaut) => { const i = process.argv.indexOf(nom); return i > 0 ? process.argv[i + 1] : defaut; };
const langue = arg("--langue", "fr");
const sortie = path.resolve(arg("--sortie", path.join(__dirname, "..", "rendu", "images-" + langue)));
const choix = arg("--images", null);

(async () => {
  fs.mkdirSync(sortie, { recursive: true });
  // WebGL logiciel (SwiftShader) : fonctionne aussi sans carte graphique
  const navigateur = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
  const page = await navigateur.newPage({ viewport: { width: 540, height: 960 } });
  page.on("pageerror", (e) => { console.error("Erreur dans la page :", e.message); process.exitCode = 1; });
  page.on("console", (m) => { if (m.type() === "error") console.error("Console :", m.text()); });
  const url = "file://" + path.join(__dirname, "..", "index.html") + "?capture&langue=" + langue;
  await page.goto(url);
  await page.waitForFunction(() => window.ubPret === true, null, { timeout: 120000 });
  const infos = await page.evaluate(() => window.ubInfos);
  const liste = choix ? choix.split(",").map(Number) : null;
  const derniere = liste ? Math.max(...liste) : infos.images - 1;
  const debut = Date.now();
  for (let i = 0; i <= derniere; i++) {
    await page.evaluate((n) => window.ubRendre(n), i);
    if (!liste || liste.includes(i)) {
      const donnees = await page.evaluate(() => window.ubImage());
      fs.writeFileSync(path.join(sortie, String(i).padStart(4, "0") + ".png"), Buffer.from(donnees.split(",")[1], "base64"));
    }
    if (i % 30 === 29) console.log(`image ${i + 1}/${derniere + 1}, ${((Date.now() - debut) / (i + 1)).toFixed(0)} ms par image`);
  }
  console.log(`Terminé : ${sortie} (${((Date.now() - debut) / 1000).toFixed(0)} s)`);
  await navigateur.close();
})();
