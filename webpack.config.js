const path = require('path');

module.exports = (env) => {
  const isProductionBuild = env === 'production' ? 'production' : false;
// using `webpack --env.development` will make  env = {development:true}
// just testing for production here...
  return {
    mode:  isProductionBuild ? 'production': 'development',
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    devtool: isProductionBuild ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};