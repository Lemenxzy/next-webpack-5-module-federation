const path = require('path');
const ignoreNpm = require('./config/ignoreNpm');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const exposesConfig = require('./config/exposes-config')
const remotesConfig = require('./config/remotes-config');
const webpackConfig = require('./config/webpackConfig');

const envPaths = {
  production: path.resolve('./config', `.env.production`),
  development: path.resolve('./config', `.env.development`),
};

module.exports = (_, args) => {
  const envPath = envPaths[args.mode] || envPaths.development;
  const isEnvProduction =  args.mode === 'production'
  require('dotenv').config({ path: envPath });
  const {publicPath, devPublicPath } = webpackConfig(isEnvProduction)
  return {
    optimization: {
      minimize: isEnvProduction,
    },

    performance: {
      hints: isEnvProduction ? 'warning' : false,
    },

    output: {
      publicPath: publicPath
    },

    devServer: {
      open: true,
      contentBase: path.join(__dirname, 'dist'),
      publicPath: devPublicPath,
      historyApiFallback: true,
      port:  process.env.PORT || 3000,
      host: '127.0.0.1',
    },

    resolve: {
      extensions: ['.jsx', '.js', '.json', 'ts', 'tsx'],
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react'],
          },
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
          ],
        },
        {
          test: /\.module.css$/,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/,
          exclude: /\.module\.s[ac]ss$/,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    "postcss-import",
                    "autoprefixer",
                    require('postcss-preset-env')({
                      browsers: 'last 2 versions',
                    })
                  ],
                },
              }
            },
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.module.s[ac]ss$/,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    "postcss-import",
                    "autoprefixer",
                    require('postcss-preset-env')({
                      browsers: 'last 2 versions',
                    })
                  ],
                },
              }
            },
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: process.env.NAME,
        library: { type: "var", name: process.env.NAME },
        filename: process.env.FILENAME,
        exposes: exposesConfig(),
        remotes: remotesConfig(),
        shared: ignoreNpm(!isEnvProduction),
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
        eslint: {
          files: "./src/*",
        },
      }),
      new HtmlWebpackPlugin(Object.assign(
          {},
          {
            inject: "body",
            template: './public/index.html',
          },
          isEnvProduction
              ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
              : undefined
      )),
      new Dotenv({
        safe: true,
        path: envPath,
      }),
    ],
  };
};
