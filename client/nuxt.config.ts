// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Food Quest',
      meta: [
        { name: 'description', content: 'My amazing food store app in nuxt 3.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css' },
        { rel: 'preconnect', href: "https://app.snipcart.com" },
        { rel: 'preconnect', href: "https://cdn.snipcart.com" },
        { rel: 'stylesheet', href: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" },
        { rel: 'icon', href: '@/assets/images/favicon.svg' },
  
      ],
      script: [
        { src: 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js', async: true }
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: 'Javascript is required' }
      ]
    }
  },
 
  target: 'static',
  fallback: true,

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_colors.scss" as *;'
        }
      }
    }
  },

  css: ["@/assets/css/main.scss"],
  modules: [
      '@unocss/nuxt',
    ],

    
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },


})

