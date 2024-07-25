
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: "static",
    head: {
      title: "Crust ",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },

  modules: ["@nuxt/ui", "@nuxtjs/i18n", "nuxt-vite-legacy"],
  legacy: {
    targets: "defaults, safari >= 12, ios >= 12",
    modernPolyfills: true
  },
  devtools: { enabled: true },
  css: [
    "./assets/css/main.scss",
    // './assets/css/dracula-prism.min.css',
    "prismjs/themes/prism.css",
    "assets/scss/mailchimp.css",
  ],

  plugins: [
    // '{ src: '~/plugins/prism.js', ssr: false }',
    "./plugins/prism.js",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    port: 3000,
    host: "0.0.0.0",
  },

  ssr: false,
});
