const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode:"development",
    entry: path.resolve(__dirname, `src`, `app`),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules:[{
            test: /\.jsx?/,
            loader:'babel-loader'
        },{
         test: /\.css$/,
         use: [
           MiniCssExtractPlugin.loader,
           "css-loader", "postcss-loader",
           ],
       },]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "styles.css",
          chunkFilename: "styles.css"
        }),
        new HtmlWebPackPlugin({
        template: "./src/app/index.html",
        filename: "./index.html"
      }),
    ]
}