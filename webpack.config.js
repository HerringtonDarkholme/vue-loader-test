/**
 * Created by tcstory on 12/22/15.
 */

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: 'dist/',
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    }
}

