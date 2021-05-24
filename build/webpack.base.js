const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const projectRoot = process.cwd();
const filePublicPath = 'assets/img/[name]_[hash:8].[ext]';

module.exports = {
    // entry: './src/js/index.js', //入口文件
    entry: path.resolve(projectRoot, 'src/index.jsx'),
    resolve: {
        alias: {
            '@src': path.resolve('src'),
            '@components': path.resolve('src/components'),
            '@routers': path.resolve('src/routers'),
            '@assets': path.resolve('src/assets')
        },
        extensions: ['.web.js', '.js', '.jsx', '.less', '.css', '.json', '.scss', '.ts', '.tsx'], //自动解析的扩展
    },
    module: {
        rules: [
            {
                test:/\.(jsx|js)?$/i,
                use: ['babel-loader'],
            },
            {
                test: /\.(eot|woff|ttf|ico)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: filePublicPath,
                    },
                  },
                ],
              },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: filePublicPath,
                            limit: 4*1024,
                            // publicPath: '../../'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  {
                    loader: 'postcss-loader',
                    options: {
                      config: {
                        path: path.resolve(projectRoot, 'build/postcss.config.js'),
                      },
                    },
                  },
                ],
            },
            {
                test: /\.(sc|sa)ss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader',
                    options: {
                      modules: {
                        localIdentName: '[local]__[hash:base64:5]',
                      },
                    },
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      config: {
                        path: path.resolve(projectRoot, 'build/postcss.config.js'),
                      },
                    },
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      implementation: require('sass'), //使用dart-sass代替node-sass
                    },
                  },
                ],
            },
            {
                test: /\.less$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  {
                    loader: 'postcss-loader',
                    options: {
                      plugins: [
                        require('autoprefixer')({
                          overrideBrowserslist: ['last 2 version', '>1%', 'ios 7'],
                        }),
                      ],
                    },
                  },
                  {
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                    //   modifyVars: modifyVars,
                      javascriptEnabled: true,
                    },
                  },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inline: '.css$',
            template: 'views/index.ejs',
            filename: 'index.html',
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false,
            }
        }),
        new CleanWebpackPlugin(),
    ]
}