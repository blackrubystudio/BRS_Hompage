module.exports = {
    router: {
        scrollBehavior: function(to, from, savedPosition) {
            return { x: 0, y: 0 };
        }
    },

    head: {
        title: 'BLACKRUBY STUDIO',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Black Ruby Studio Hompage' }
        ],

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
        ]
    },
    loading: { color: '#3B8070' },

    build: {
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },

    modules: [
        '@nuxtjs/style-resources'
    ],

    styleResources: {
        sass: [
            '@assets/css/common.scss'
        ]
    },

    css: [
        "@assets/css/reset.css",
        "@/assets/css/font.css"
    ],

    plugins: [
        { src: "~/plugins/globalComponent.js" },
        { src: "~/plugins/googleMap.js" },

    ]
}