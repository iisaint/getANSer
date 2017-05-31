var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js',
        publicPath: '/'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Anser: 'app/components/Anser.jsx',
            About: 'app/components/About.jsx',
            Team: 'app/components/Team.jsx',
            AnserForm: 'app/components/AnserForm.jsx',
            AnserMessage: 'app/components/AnserMessage.jsx',
            getAnser: 'app/api/getAnser.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};