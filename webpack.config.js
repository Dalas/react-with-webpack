var path = require('path');

module.exports = {
    entry: {
        page1: './static/js/page1/main.js',
        page2: './static/js/page2/main.js'
    },
    output: {
        path: path.join(__dirname, 'static/dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'bower_components']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    externals: {
        "React": "React",
        "ReactDOM": "ReactDOM"
    }
};