const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

module.exports = (env) => {
  const env_ = dotenv.config().parsed;
  const envKeys = Object.keys(env_).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env_[next]);
    return prev;
  }, {});

  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ],
    mode: env.mode
  };
};