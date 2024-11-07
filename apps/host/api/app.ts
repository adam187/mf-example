import { readFileSync } from "node:fs";
import path from "node:path";

import express from "express";

const app = express();

app.use("/static", express.static(path.join(__dirname, "../static")));

if (process.env.NODE_ENV === "production") {
  let mfManifest = readFileSync(
    path.join(__dirname, "../mf-manifest.json"),
    "utf8"
  );

  app.get("/mf-manifest.json", (_req, res) => {
    res.type("json");
    res.send(mfManifest);
  });
}

export default app;
