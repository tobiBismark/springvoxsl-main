import { promises as fs } from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const assetsDir = path.join(distDir, "assets");
const serverAssetsDir = path.join(distDir, "server", "assets");

async function findFirstFile(dir, predicate) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const match = entries.find((entry) => entry.isFile() && predicate(entry.name));
  return match ? path.join(dir, match.name) : null;
}

const manifestPath = await findFirstFile(
  serverAssetsDir,
  (name) => name.startsWith("_tanstack-start-manifest") && name.endsWith(".js"),
);

if (!manifestPath) {
  throw new Error("Could not find TanStack Start manifest in dist/server/assets.");
}

const manifestSource = await fs.readFile(manifestPath, "utf8");
const scriptMatch = manifestSource.match(/src: "(\/assets\/[^"]+\.js)"/);

if (!scriptMatch) {
  throw new Error("Could not find the client entry script in the TanStack Start manifest.");
}

const cssPath = await findFirstFile(
  assetsDir,
  (name) => name.startsWith("styles-") && name.endsWith(".css"),
);

if (!cssPath) {
  throw new Error("Could not find the built stylesheet in dist/assets.");
}

const entryScript = scriptMatch[1];
const stylesheet = `/assets/${path.basename(cssPath)}`;
const staticFiles = [
  {
    source: path.resolve("public", "_redirects"),
    destination: path.join(distDir, "_redirects"),
  },
  {
    source: path.resolve("public", "sitemap.xml"),
    destination: path.join(distDir, "sitemap.xml"),
  },
];

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="SpringVox - Enterprise Communication Solutions"
    />
    <title>SpringVox</title>
    <link rel="stylesheet" href="${stylesheet}" />
    <link rel="modulepreload" href="${entryScript}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="${entryScript}"></script>
  </body>
</html>
`;

await fs.writeFile(path.join(distDir, "index.html"), html, "utf8");

for (const file of staticFiles) {
  await fs.copyFile(file.source, file.destination);
}
