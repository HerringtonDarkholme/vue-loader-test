var webpack = require('webpack')

module.exports = {
    entry: {
      app: './src/app.ts',
      vendor: ['vue', 'av-ts']
    },
    output: {
        path: 'dist/',
        filename: 'bundle.js'
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
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
}

