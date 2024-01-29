// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: 'static',
    head: {
      title: 'Crust ',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: [
    '@nuxt/ui', 
  ],
  devtools: { enabled: true },
  css: [
    './assets/css/main.scss', 
    // './assets/css/dracula-prism.min.css', 
    'prismjs/themes/prism.css',
  ],
  plugins: [
    // '{ src: '~/plugins/prism.js', ssr: false }',
    './plugins/prism.js'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
