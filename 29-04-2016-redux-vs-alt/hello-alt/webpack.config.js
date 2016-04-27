import path from 'path';

const config = {
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
            loaders: [
            {
              test: /\.(js|jsx)$/,
              loader: 'babel',
              exclude: /node_modules/,
              include: __dirname
            },
            ]
          },
  resolve: {
             extensions: ['', '.js', '.jsx']
           }
};

export default config;
