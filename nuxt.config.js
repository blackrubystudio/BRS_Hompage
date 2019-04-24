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
            { hid: 'description', name: 'description', content: 'Black Ruby Studio Hompage' },
            {
                name: "keywords",
                content: "블랙루비스튜디오, Blackrubystudio, 아이크래프트, icraft, 팬랩, fanrep, 빔미, BeamMe"
            },
            {
                hid: "description",
                name: "description",
                content: "AI, 블록체인, 자연어처리, 검색엔진, 빅데이터 분석 등을 진행하는 스튜디오"
            },
            {
                property: "og:type",
                content: "website"
            },
            {
                property: "og:title",
                content: "BLACKRUBY STUDIO"
            },
            {
                property: "og:description",
                content: "AI, 블록체인, 자연어처리, 검색엔진, 빅데이터 분석 등을 진행하는 스튜디오"
            },
            {
                property: "og:url",
                content: "https://blackruby.studio"
            },
            {
                property: "og:image",
                content: "https://s3.ap-northeast-2.amazonaws.com/blackruby.studio/img/blackruby.svg"
            },
            {
                name: "twitter:card",
                content: "summary"
            },
            {
                name: "twitter:url",
                content: "https://blackruby.studio"
            },
            {
                property: "twitter:title",
                content: "BLACKRUBY STUDIO"
            },
            {
                property: "twitter:description",
                content: "AI, 블록체인, 자연어처리, 검색엔진, 빅데이터 분석 등을 진행하는 스튜디오"
            },
            {
                property: "twitter:image",
                content: "https://s3.ap-northeast-2.amazonaws.com/blackruby.studio/img/blackruby.svg"
            }
        ],

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
            { rel: "canonical", href: "https://blackruby.studio" },
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