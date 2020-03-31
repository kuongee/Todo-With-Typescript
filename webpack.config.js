const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        app: "./src/app.ts"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: __dirname,
        publicPath: "/dist/",
        inline: true,
        hot: true,
        host: "localhost",
        port: 9000
    }
};
