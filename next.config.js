module.exports = {
    env: {
        mode: process.env.NODE_ENV,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    },
    redirects() {
        return [{
            source: '/graveyard.json',
            destination: '/api/graveyard',
            permanent: true,
        }, ];
    },
    rewrites() {
        return [{
                source: '/umami.js',
                destination: 'https://a.challenges.gg/umami.js'
            },
            {
                source: '/api/collect',
                destination: 'https://a.challenges.gg/api/collect',
            }
        ]
    },
};