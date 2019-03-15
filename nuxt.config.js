module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'brs_hompage',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Black Ruby Studio Hompage' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
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

    css: [
        "@assets/css/reset.css", "@/assets/css/font.css"

    ],
}