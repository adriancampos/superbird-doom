const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './build')
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                'main.*.js',
                'precache-manifest.*.js'
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new GenerateSW({
            skipWaiting: true,
            clientsClaim: true,
            runtimeCaching: [
                {
                    urlPattern: new RegExp(''),
                    handler: 'NetworkFirst'
                }
            ]
        }),
        new CopyWebpackPlugin([
            { from: 'assets/', to: 'assets/' }
        ])
    ],
    devServer: {
        overlay: true,
        writeToDisk: true,
        stats: 'minimal'
    }
};
