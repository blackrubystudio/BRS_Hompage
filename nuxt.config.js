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
                content: "AI, 블록체인 엔진 전문 개발 스튜디오"
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
                content: "AI, 블록체인 엔진 전문 개발 스튜디오"
            },
            {
                property: "og:url",
                content: "https://blackruby.studio"
            },
            {
                property: "og:image",
                content: "https://s3.ap-northeast-2.amazonaws.com/blackruby.studio/img/blackrubystudio.png"
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
                content: "AI, 블록체인 엔진 전문 개발 스튜디오"
            },
            {
                property: "twitter:image",
                content: "https://s3.ap-northeast-2.amazonaws.com/blackruby.studio/img/blackrubystudio.png"
            }
        ],

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
            { rel: "canonical", href: "https://blackruby.studio" },
        ]
    },
    loading: { color: '#3B8070' },
    loaders: [
        //Babel 변환
        {
            test: /\.(js|jsx)$/,
            include: [
                /src\/js/,
                /node_modules\/axios/
            ],
            loader: 'babel',
            query: {
                cacheDirectory: true,
    
                //plugins는 presets 보다 먼저 실행되며,
                //plugins내의 순서는 처음 -> 나중으로 실행된다.
                plugins: [
                    // ['transform-class-properties'],
                    // ['transform-object-rest-spread', { useBuiltIns: true }],
                    ['transform-runtime'],
                ],
                
                //presets내의 순서는 나중 -> 처음으로 실행된다.
                presets: [
                    ['env', {
                        targets: {
                            browsers: ['ie >= 8']
                        },
                        loose: true,
                    }],
                    // ['react'],
                ],
            }
        },
    ],
    postLoaders: [
        {
            test: /\.js$/,
            loader: 'es3ify-loader',
        }
    ],
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
        },
        postcss: {
            plugins: {
              'postcss-preset-env': {
                autoprefixer: {
                  grid: true
                }
              }
            }
        },
    },
    
    modules: [
        '@nuxtjs/style-resources',
        // 'nuxt-polyfill',
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