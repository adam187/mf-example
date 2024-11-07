import { createModuleFederationConfig } from "@module-federation/modern-js";

export default createModuleFederationConfig({
  name: "remote",
  getPublicPath: 'function () { return "http://localhost:3006/";  }',
  remotes: {
    host: "host@http://localhost:3005/mf-manifest.json",
  },
  exposes: {
    "./someFileFromRemote": "./src/someFileFromRemote.ts",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});
