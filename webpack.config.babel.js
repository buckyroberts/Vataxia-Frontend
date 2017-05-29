const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = env => ({
    devServer: {
        inline: true,
        contentBase: './src/assets/html',
        port: 3000
    },
    devtool: env.prod ? 'source-map' : 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/assets/html/index.html'
        })
    ]
});
