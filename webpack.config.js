const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode : 'development',
    entry: path.join(__dirname, './index.js'),
    devServer: {
        publicPath: '/build',
        hot:true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    output: {
        filename: "bundle.js",
        path: (__dirname + '/build'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
            },
            {
                test: /\.html$/,
                include: [/index.html/],
                loader: "html-loader"
            },
            {
                test: /\.scss$/,
                //include: /(client\/scss)/,
                use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    }
}