const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const StyleLintPlugin = require('stylelint-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const { override, addPostcssPlugins } = require('customize-cra');
// eslint-disable-next-line import/no-extraneous-dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin');

const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './public/**/*.html',
        './src/**/*.js',
    ],
});

module.exports = {
    webpack: override((config, env) => {
        const newConfig = config;

        const isProduction = env === 'production';

        const assetUrl = isProduction ? process.env.ASSET_URL : '';

        newConfig.devtool = isProduction ? 'cheap-module-source-map' : 'source-map';
        newConfig.optimization.runtimeChunk = false;
        newConfig.optimization.splitChunks = false;

        newConfig.resolve.alias = Object.assign(config.resolve.alias, {
            '@': path.resolve(__dirname, './src'),
        });

        newConfig.plugins.push(
            new StyleLintPlugin({
                files: ['src/**/*.{js,jsx,htm,html,css,sss,less,scss,sass}'],
            }),
        );

        if (isProduction) {
            newConfig.plugins.push(
                new CopyWebpackPlugin(
                    {
                        patterns: [
                            {
                                from: 'docs',
                                to: 'docs',
                            },
                        ],
                    },
                ),
            );
        }

        newConfig.output.filename = isProduction ? 'static/js/[name].[contenthash:8].js' : 'static/js/[name].[hash].js';
        newConfig.output.chunkFilename = isProduction ? 'static/js/chunks/[name].[contenthash:8].js' : 'static/js/chunks/[name].[hash].js';

        newConfig.plugins[4].options.filename = 'static/css/[name].[contenthash:8].css';
        newConfig.plugins[4].options.chunkFilename = 'static/css/chunks/[name].[contenthash:8].css';

        newConfig.module.rules[2].oneOf[0].options.name = 'static/media/[name].[hash:8].[ext]';
        newConfig.module.rules[2].oneOf[0].options.publicPath = assetUrl;

        newConfig.module.rules[2].oneOf[7].options.name = 'static/media/[name].[hash:8].[ext]';
        newConfig.module.rules[2].oneOf[7].options.publicPath = assetUrl;

        newConfig.optimization.minimizer[0].options.extractComments = false;
        newConfig.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;

        newConfig.module.rules[2].oneOf[5].use[1].options = {
            modules: {
                localIdentName: isProduction ? '[name]__[local]--[hash:base64:5]' : '[path][name]__[local]',
                // eslint-disable-next-line no-unused-vars,consistent-return
                getLocalIdent: (loaderContext, localIdentName, localName, options) => {
                    // eslint-disable-next-line no-shadow
                    const pathLocalName = loaderContext.resourcePath;
                    if (
                        pathLocalName.includes('src/styles/index.scss')
                        || pathLocalName.includes('src\\styles\\index.scss')
                        || pathLocalName.includes('node_modules')
                    ) {
                        return localName;
                    }
                },
            },
        };

        newConfig.module.rules[1].use = ['babel-loader', 'eslint-loader'];

        return newConfig;
    },
    addPostcssPlugins([
        tailwindcss,
        autoprefixer,
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    ])),
};
