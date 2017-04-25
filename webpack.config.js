var webpack = require("webpack");

module.exports = {
    entry: [
        "script!jquery/dist/jquery.min.js",
        "script!foundation-sites/dist/foundation.min.js",
        "./app/app.jsx"
    ],
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
        "$": "jquery",
        "jQuery": "jquery",
        })
    ],
    output: {
        part: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        alias: {
          Main: "app/components/main.jsx",
          Nav: "app/components/Nav.jsx",
          Weather: "app/components/Weather.jsx",
          WeatherForm: "app/components/WeatherForm.jsx",
          WeatherMessage: "app/components/WeatherMessage.jsx",
          About: "app/components/About.jsx",
          Example: "app/components/Example.jsx",
          openWeatherMap: "app/api/openWeatherMap.jsx"
        },
        extensions: ["", ".js", "jsx"]
    },
    module: {
        loaders: [
        {
            loader: "babel-loader",
            query: {
                presets: ["react", "es2015"]
            },
          test: /\.jsx?$/,
          exclude: /("node_modules|bower_components)/
        }
      ]
    },
    // devtool: "eval-source-map",
    devtool: "inline-source-map"
};
