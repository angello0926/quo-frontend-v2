/*ref: https://github.com/markievollick/reactAndRedux/blob/master/webpack.config.dev.js */
import webpack from 'webpack';
import path from 'path';

export default {
debug: true, //
devtool: 'inline-source-map', 
noInfo: false, //display list of files when its bundling
entry: [
    'eventsource-polyfill', // necessary for hot reloading with InternetExplorer
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
],
target: 'web', //bundle code for web browser to understand
output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
},

devServer: {
    contentBase: path.resolve(__dirname, 'src') //'./src'
},
plugins: [
    new webpack.HotModuleReplacementPlugin(),  //replace module without reloading browser
    new webpack.NoErrorsPlugin() //keep errors from breaking reloading process
],
module: {
    loaders: [
    {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']}, //use babel to transpile the js
    {test: /(\.css)$/, loaders: ['style', 'css']},
    {test: /(\.scss)$/, loaders: ['style', 'css','sass']},
    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
    {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]'
    }, 
    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
}
};