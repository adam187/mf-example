import { appTools, defineConfig } from "@modern-js/app-tools";
import { moduleFederationPlugin } from "@module-federation/modern-js";
import { bffPlugin } from "@modern-js/plugin-bff";
import { expressPlugin } from "@modern-js/plugin-express";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  bff: {
    enableHandleWeb: true,
  },
  dev: {
    port: 3006,
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: "rspack", // Set to 'webpack' to enable webpack
    }),
    bffPlugin(),
    expressPlugin(),
    moduleFederationPlugin(),
  ],
});
