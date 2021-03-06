
import axios from 'axios';
export default {
  mode: 'universal',

  generate: {
    routes () {
      return axios.get('http://localhost:3000/projects')
        .then((res) => {
          return res.data.map((project) => {
            return '/project/' + project.id
          })
        })
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/splitting.css',
    '~/assets/css/splitting-cells.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
            { src: '~/plugins/DrawSVGPlugin.min.js', ssr: false },
            { src: '~/plugins/scroll-out.min.js', ssr: false },
            // { src: '~/plugins/splitting.js', ssr: false }
          ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
