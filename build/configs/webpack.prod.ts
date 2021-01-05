import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import commonWebpackConfig from './webpack.common';

const prodWebpackConfiguration: Configuration = merge(commonWebpackConfig, {
    mode: 'production',
    optimization: {
        minimize: true,
    },
});

export default prodWebpackConfiguration;
