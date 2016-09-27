var webpack = require('webpack')

var packageJSON = require('./package.json')
var externals = Object.keys(packageJSON.dependencies).concat(Object.keys(packageJSON.devDependencies))

module.exports = {
    entry: {
      app: './index.ts',
    },
    target: 'node',
    output: {
        path: 'dist/',
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    externals: externals,
    resolve: {
        extensions: ['', '.ts', '.vue']
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.ts$/,
                loader: 'vue-ts'
            }
        ],
    },
    vue: {
      loaders: {
        js: 'vue-ts-loader',
      },
      esModule: true
    },
}

