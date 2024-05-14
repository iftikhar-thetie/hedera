// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    extractCSS: true
    // You can add any necessary configurations here
  },
  devtools: { enabled: true },
  components: ['~/components'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  // layout: true,
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Source Sans 3': {
            wght: '200..900'
          }
        }
      }
    ]
  ],
  hooks: {
    // "pages:extend"(pages) {
    //   pages.push({
    //     name: "ecosystem",
    //     path: "/ecosystem",
    //     file: "~/pages/index.vue",
    //   });
    // },
  },
  runtimeConfig: {
    public: {
      secret: process.env.AUTH_TOKEN,
      app_base_url: process.env.BASE_URL
    }
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      // routes: ["/", "/nft"],
      crawlLinks: true
    },
    storage: {
      redis: {
        driver: 'redis',
        /* redis connector options */
        port: 6379, // Redis port
        host: '127.0.0.1', // Redis host
        username: '', // needs Redis >= 6
        password: '',
        db: 0, // Defaults to 0
        connectTimeout: 10000,
        lazyConnect: true,
        keepAlive: 1000
      }
    }
  },
  render: {
    compressor: true
  },
  buildModules: [
    [
      '@nuxt-modules/compression',
      {
        algorithm: 'brotliCompress'
      }
    ]
  ]
});
