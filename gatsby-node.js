// @see https://www.gatsbyjs.org/docs/add-custom-webpack-config/

exports.modifyWebpackConfig = ({
  config,
  stage
}) => {
  switch (stage) {
    case 'develop':
      config.merge({
        postcss: [
          require('postcss-custom-properties')
        ]
      })

  }
  return config;
};
