module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main',
      Nav: 'app/components/Nav',
      Weather: 'app/components/Weather',
      About: 'app/components/About',
      Examples: 'app/components/Examples',
      WeatherForm: 'app/components/WeatherForm',
      WeatherMessage: 'app/components/WeatherMessage',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
