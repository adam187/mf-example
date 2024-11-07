import { createModuleFederationConfig } from "@module-federation/modern-js";

export default createModuleFederationConfig({
  name: "host",
  getPublicPath: 'function () { return "http://localhost:3005/";  }',
  remotes: {
    remote: "remote@http://localhost:3006/mf-manifest.json",
  },
  exposes: {
    "./someFileFromHost": "./src/someFileFromHost.ts",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});
