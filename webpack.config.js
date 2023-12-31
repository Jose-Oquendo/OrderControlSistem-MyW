const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    entry: './source/app/index.js',
    output: {
        path: __dirname + '/source/public/js',
        filename: 'bundle.js'
    }, 
    module: {
        rules: [
            {
                test:  /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
