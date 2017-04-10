var webpack = require('webpack'),
    path = require('path')

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
  ],
  externals : {
    jquery: 'jQuery'
  },
  // makes sure we don't have to include jQuery in every single module
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],  
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',

      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    // loaders tell webpack what to do with odd files
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        // apply to every file ending in .jsx
        test: /\.jsx?$/,
        // UNLESS they're in either of these folders
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'eval-source-map'
}
