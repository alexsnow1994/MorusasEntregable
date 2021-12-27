const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
//     mode: 'production',
//   };

module.exports ={
    // mode: 'production',
    entry: '/frontEnd/app.js',
    output: {
        path: path.join(__dirname, '/backEnd/public'),
        filename: 'bundle.js' 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : './frontEnd/index.html',
            minify: {
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ]
}