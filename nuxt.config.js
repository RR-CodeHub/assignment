export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'assignment',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://i.imgur.com/QRAUqs9.png' },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css" },
      { rel: 'stylesheet', type: 'text/css', href: "/css/cs-skin-elastic.css" },
      { rel: 'stylesheet', type: 'text/css', href: "/css/style.css" },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css" },
      { rel: 'stylesheet', type: 'text/css', href: "/css/cs-skin-elastic.css" },
      { rel: 'stylesheet', type: 'text/css', href: "/css/style.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/npm/chartist@0.11.0/dist/chartist.min.css"},
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/npm/jqvmap@1.5.1/dist/jqvmap.min.css" },
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/npm/weathericons@2.1.0/css/weather-icons.css"},
      { rel: 'stylesheet', type: 'text/css', href: "https://cdn.jsdelivr.net/npm/fullcalendar@3.9.0/dist/fullcalendar.min.css" },
    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"},
      { src: "/js/main.js"},

      { src: "https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"},
      { src: "/js/main.js"},
      { src: "https://cdn.jsdelivr.net/npm/chart.js@2.7.3/dist/Chart.bundle.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/chartist@0.11.0/dist/chartist.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/chartist-plugin-legend@0.6.2/chartist-plugin-legend.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/flot-pie@1.0.0/src/jquery.flot.pie.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/flot-spline@0.0.1/js/jquery.flot.spline.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/simpleweather@3.1.0/jquery.simpleWeather.min.js"},
      { src: "/js/init/weather-init.js"},
      { src: "https://cdn.jsdelivr.net/npm/moment@2.22.2/moment.min.js"},
      { src: "https://cdn.jsdelivr.net/npm/fullcalendar@3.9.0/dist/fullcalendar.min.js"},
      { src: "/js/init/fullcalendar-init.js"},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
