import path from 'path';

module.exports = async ({ config }) => {
  // Use babel-loader for TypeScript files
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });

  // Add support for importing scss files in react components
  config.module.rules.push({
    test: /\.(scss)$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
