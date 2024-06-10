import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
// @see https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/styles/main.scss"],
  ssr: true,
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  nitro: {
    preset: "firebase",
    firebase: {
      nodeVersion: "20",
      gen: 2,
      httpsOptions: {
        maxInstances: 3,
      },
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
