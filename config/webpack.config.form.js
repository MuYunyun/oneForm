'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Webpack uses `publicPath` to determine where the app is being served from.
// It requires a trailing slash, or the file assets will get an incorrect path.
const publicPath = paths.servedPath;
// Some apps do not use client-side routing with pushState.
// For these, "homepage" can be set to "." to enable relative asset paths.
const shouldUseRelativeAssetPaths = publicPath === './';
// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = false;
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
const publicUrl = publicPath.slice(0, -1);
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl);

// Assert this just to be safe.
// Development builds of React are slow and not intended for production.
if (env.stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

// Note: defined here because it will be used more than once.
const cssFilename = 'static/css/[name].[contenthash:8].css';

const extractTextPluginOptions = shouldUseRelativeAssetPaths
  ? { publicPath: Array(cssFilename.split('/').length).join('../') }
  : {};

module.exports = {
  bail: true,
  devtool: shouldUseSourceMap ? 'source-map' : false,
  entry: [paths.libIndexJs],
  output: {
    path: paths.libBuild,
    filename: 'daform.min.js',
    publicPath: publicPath,
    libraryTarget: 'umd',
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: [
      '.mjs',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.web.js',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx',
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve('source-map-loader'),
        enforce: 'pre',
        include: [paths.src],
      },
      {
        oneOf: [
          {
            test: /\.(js|jsx|mjs)$/,
            include: [paths.src],
            loader: require.resolve('babel-loader'),
            options: {
              compact: true,
            },
          },
          {
            test: /\.(ts|tsx)$/,
            include: [paths.src],
            use: [
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true,
                  configFile: paths.appTsProdConfig,
                },
              },
            ],
          },
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
              Object.assign(
                {
                  fallback: {
                    loader: require.resolve('style-loader'),
                    options: {
                      hmr: false,
                    },
                  },
                  use: [
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: shouldUseSourceMap,
                      },
                    },
                    {
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
                      },
                    },
                  ],
                },
                extractTextPluginOptions
              )
            ),
          },
          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  // modules: true,
                  importLoaders: 2,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
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
                },
              },
            ],
          },
          {
            test: /\.less$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  // modules: true,
                  importLoaders: 2,
                },
              },
              {
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
                },
              },
              {
                loader: require.resolve('less-loader'),
                options: {
                  javascriptEnabled: true,
                }
              },
            ],
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
    // It is absolutely essential that NODE_ENV was set to production here.
    // Otherwise React will be compiled in the very slow development mode.
    new webpack.DefinePlugin(env.stringified),
    // Minify the code.
    new UglifyJsPlugin({
      uglifyOptions: {
        parse: {
          // we want uglify-js to parse ecma 8 code. However we want it to output
          // ecma 5 compliant code, to avoid issues with older browsers, this is
          // whey we put `ecma: 5` to the compress and output section
          // https://github.com/facebook/create-react-app/pull/4234
          ecma: 8,
        },
        compress: {
          ecma: 5,
          warnings: false,
          // Disabled because of an issue with Uglify breaking seemingly valid code:
          // https://github.com/facebook/create-react-app/issues/2376
          // Pending further investigation:
          // https://github.com/mishoo/UglifyJS2/issues/2011
          comparisons: false,
          // Don't inline functions with arguments, to avoid name collisions:
          // https://github.com/mishoo/UglifyJS2/issues/2842
          inline: 1,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          // Turned on because emoji and regex is not minified properly using default
          // https://github.com/facebook/create-react-app/issues/2488
          ascii_only: true
        },
      },
      // Use multi-process parallel running to improve the build speed
      // Default number of concurrent runs: os.cpus().length - 1
      parallel: true,
      // Enable file caching
      cache: true,
      sourceMap: shouldUseSourceMap,
    }), // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    new ExtractTextPlugin({
      filename: cssFilename,
    }),
    // Perform type checking and linting in a separate process to speed up compilation
    // new ForkTsCheckerWebpackPlugin({
    //   async: false,
    //   tsconfig: paths.appTsProdConfig,
    //   tslint: paths.appTsLint,
    // }),
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};
