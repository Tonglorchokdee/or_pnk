import th from './locales/th.json'

export default {
  ssr: false,
  head: {
    titleTemplate: '%s - รพ.พระนั่งเกล้า',
    title: 'Title',
    htmlAttrs: {
      lang: 'th'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/custom.css',
  ],

  plugins: [
    {src: '~/plugins/axios.ts'},
    {src: '~/plugins/auth.ts'},
    { src: '~/plugins/rules.ts' },
  ],

  router: {
    middleware: ['auth']
  },

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/moment', '@nuxtjs/i18n', '@nuxtjs/auth-next'],

  axios: {
    baseURL: process.env.NUXT_ENV_BASE_URL ? `${process.env.NUXT_ENV_BASE_URL}` : 'http://localhost:4000'
  },

  moment: {
    defaultLocale: 'th',
    locales: ['th']
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'th',
    messages: { th },
    vueI18n: {
      fallbackLocale: 'th',
      messages: {
        th
      }
    }
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        /**
         * Config กรณีที่ขอ Token
         */
        user: {
          property: 'user',
          autoFetch: false
        },
        endpoints: {
          // TODO: แก้ Endpoint ให้ตรงกับ POSTMAN
          // หน้าไหนที่ไม่ต้องการใช้ Auth ให้ เพิ่ม export default { auth: false } ไว้ใน Template นั้น
          login: { url: '/api/dev/token/login', method: 'post' },
          logout: { url: '/api/dev/token/logout', method: 'post' },
          user: false
        }
      }
    }
  },

  vuetify: {
    defaultAssets: {
      font: {family: 'Sarabun' },
    },
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light : true,
      themes: {
        light: {
          primary: '#0C79D8 ',
          secondary: '#001730 ',
          trinary: '#FEBB61',
          accent: '#030229',
          info: '#C0DEEB',
          warning: '#FEBB61',
          success: '#58CC2F',
          error: '#d03e59',
          white: '#FFFFFF',
          black: '#000000',
          default_bg: '#F0F2FE',
          navbar_color: '#FFFFFF',
          online: '#75F04A',
          onsite: '#FFD12F',
          inactive_text: '#6D6E6F',
          inactive_button: '#AAAAAA',
        }
      }
    }
  },
  loading: {
    color: '#0C79D8',
    height: '5px',
  },

  build: {
  }
}


