const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './index.js'),
    devServer: {
        publicPath: '/build',
        hot: true,
        port: 8080
    },
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
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
        ]
    }
}