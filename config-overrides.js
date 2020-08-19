const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    webpack(config, env) {
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
                localIdentName: '[name]__[local]--[hash:base64:5]',
            },
        };

        newConfig.module.rules[1].use = ['babel-loader', 'eslint-loader'];

        return newConfig;
    },
};
