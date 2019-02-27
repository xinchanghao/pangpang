'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');

const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

const postcssLoader = {
  loader: require.resolve('postcss-loader'),
  options: {
    ident: 'postcss',
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      }),
    ],
    sourceMap: true
  }
}

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
      require.resolve('react-dev-utils/webpackHotDevClient'),
      require.resolve('./polyfills'),
      require.resolve('react-error-overlay'),
      paths.appIndexJs,
    ],
    output: {
      path: paths.appBuild,
      pathinfo: true,
      filename: 'static/js/bundle.js',
      chunkFilename: 'static/js/[name].chunk.js',
      publicPath: publicPath,
      devtoolModuleFilenameTemplate: info =>
        path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },
    resolve: {
      modules: ['node_modules', paths.appNodeModules].concat(
        process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
      ),
      extensions: ['.js', '.jsx', '.json', '.css', '.less', '.web.js', '.web.jsx'],
      alias: {
        actions: path.resolve("src/actions"),
        utils: path.resolve("src/utils"),
        pages: path.resolve("src/pages"),
        components: path.resolve("src/pages/components"),
        'react-native': 'react-native-web',
      },
      plugins: [
        new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
      ],
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.jsx?$/,
          enforce: 'pre', //定义loader的执行优先顺序
          include: paths.appSrc,
          use: [
            {
              loader: "babel-loader",
              options: {
                plugins: [
                  "dynamic-import-webpack",
                  ['import', { libraryName: 'antd', style: 'css' }],
                ],
                cacheDirectory: true //缓存loader打包结果加快重新打包的过程
              },
            },
          ]
        },
        {
          oneOf: [ // 只使用这些嵌套规则之一
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: /\.(js|jsx)$/,
              include: paths.appSrc,
              loader: require.resolve('babel-loader'),
              options: {
                cacheDirectory: true,
              },
            },
            {
              test: /\.css$/,
              include: paths.appNodeModules,
              use: [
                require.resolve('style-loader'),
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                  },
                },
                postcssLoader
              ],
            },
            {
              test: /\.css$/,
              exclude: paths.appNodeModules,
              use: [
                require.resolve('style-loader'),
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                    modules: true, //打开css_modules
                    localIdentName: '[name]__[local]-[hash:base64:6]', //定制css_modules生成哈希字符串的格式
                  },
                },
                postcssLoader
              ],
            },
            {
              test: /\.scss$/,
              exclude: paths.appNodeModules,
              use: [
                require.resolve('style-loader'),
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]__[local]-[hash:base64:6]',
                    sourceMap: true
                  },
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: true
                  }
                },
                postcssLoader
              ],
            },
            {
              test: /\.less$/,
              exclude: paths.appNodeModules,
              use: [
                {
                  loader: 'style-loader'
                },
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 2
                  }
                },
                postcssLoader,
                {
                  loader: 'less-loader'
                }
              ]
            },
            {
              loader: require.resolve('file-loader'),
              exclude: [/\.js$/, /\.html$/, /\.json$/],
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml
      }),
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin(env.stringified),
      new webpack.HotModuleReplacementPlugin(),
      new CaseSensitivePathsPlugin(),
      new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    },
    performance: {
      hints: false,
    },
  };
