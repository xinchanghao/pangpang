'use strict';
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const paths = require('./paths');
const errorOverlayMiddleware = require('react-error-overlay/middleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

const devMode = process.env.NODE_ENV !== 'production';
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

console.log(`${process.env.NODE_ENV}环境打包开始...`)

const styleLoader = devMode ? require.resolve('style-loader') : MiniCssExtractPlugin.loader;

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
};

module.exports = {
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
        oneOf: [
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
              cacheDirectory: devMode ? true : false,
              compact: devMode ? false : true,
            },
          },
          {
            test: /\.css$/,
            include: paths.appNodeModules,
            use: [
              styleLoader,
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  minimize: devMode ? false : true,
                  sourceMap: shouldUseSourceMap,
                },
              },
              postcssLoader
            ],
          },
          {
            test: /\.css$/,
            exclude: paths.appNodeModules,
            use: [
              styleLoader,
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules: true, //打开css_modules
                  localIdentName: '[name]__[local]-[hash:base64:6]', //定制css_modules生成哈希字符串的格式
                  sourceMap: shouldUseSourceMap,
                  minimize: devMode ? false : true,
                },
              },
              postcssLoader
            ],
          },
          {
            test: /\.scss$/,
            exclude: paths.appNodeModules,
            use: [
              styleLoader,
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]__[local]-[hash:base64:6]',
                  sourceMap: shouldUseSourceMap,
                  minimize: devMode ? false : true,
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
        ]
      }
    ]
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  devServerConfig: function (proxy, allowedHost) {
    return {
      disableHostCheck: !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
      compress: true,
      clientLogLevel: 'none',
      contentBase: paths.appPublic,
      watchContentBase: true,
      hot: true,
      publicPath: '/',
      quiet: true,
      watchOptions: {
        ignored: /node_modules/,
      },
      // Enable HTTPS if the HTTPS environment variable is set to 'true'
      https: protocol === 'https',
      host: host,
      overlay: false,
      historyApiFallback: {
        disableDotRule: true,
      },
      public: allowedHost,
      proxy,
      setup(app) {
        app.use(errorOverlayMiddleware());
        app.use(noopServiceWorkerMiddleware());
      },
    };
  }
}