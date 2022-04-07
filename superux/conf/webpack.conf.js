const path = require('path');

const CircularDependencyPlugin = require('circular-dependency-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { commonPaths, moduleNames } = require('./common');

module.exports = (env, argv) => {
    // 개발 모드 (--mode=development) / 배포 모드 (--mode=production).
    const isDevelopmentMode = !argv || argv.mode === 'development';

    // ===============================================
    // 프로젝트 관련 경로들.

    const { rootPath, srcPath, outPath, modulePath, publicPath } = commonPaths;

    // ===============================================
    // 코드 컴파일(변환) 정의.

    // ts / tsx -> js.
    const ts2js = 'ts-loader';

    // sass / scss -> css.
    const sass2css = 'sass-loader';

    // css module -> css.
    // https://velog.io/@kwonh/React-CSS를-작성하는-방법들-css-module-sass-css-in-js
    const cssModule2css = {
        loader: 'css-loader', options: {
            modules: {
                mode: 'local',
                // class 이름이 "파일경로-파일이름__선택자--해시" 식으로 생성됨.
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
        }
    };

    // css -> css.
    const css2css = 'css-loader';

    // css -> <style> tag.
    const css2inline = 'style-loader';

    // css -> .css file.
    const css2file = MiniCssExtractPlugin.loader;

    // svg -> React component.
    const svg2inline = '@svgr/webpack';

    // ===============================================
    // 테스트 웹 서버 설정.

    const serverIP = '0.0.0.0';
    const localIP = 'localhost';
    const serverPort = 8081;

    // ===============================================
    // Webpack alias 등 정의.

    const alias = {};

    // Git submodule들의 alias 처리.
    // ex. import ... from 'office-core' -> src/module/office-core/dist로 mapping됨.
    moduleNames.forEach(name => {
        alias[name] = path.join(modulePath, `${name}/dist`);
    });

    const plugins = [
        new CircularDependencyPlugin({
            exclude: /node_modules|src\/module/,
            include: /src/,
            failOnError: false,
            allowAsyncCycles: false,
            cwd: rootPath
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        // 빌드 전 이전 빌드 결과 지움.
        new CleanWebpackPlugin(),
        // 사용할 템플릿 HTML 파일 지정.
        // (이 안에 <script/> 태그 등이 자동으로 삽입됨.)
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'Template.html'),
            filename: path.join(outPath, 'index.html')
        })
    ];

    // ===============================================
    // 최종 configuration.

    return {
        entry: path.join(srcPath, 'index.tsx'),
        target: ['web', 'es5'],
        devtool: isDevelopmentMode ? 'source-map' : false,
        output: {
            path: outPath,
            filename: '[name].[contenthash].js'
        },
        optimization: {
            // Webpack 코드 분리 설정.
            // (https://simsimjae.medium.com/webpack4-splitchunksplugin-옵션-파헤치기-19f5de32425a)
            splitChunks: {
                chunks: 'all'
            }
        },
        resolve: {
            modules: ['node_modules', srcPath + '/'],
            extensions: ['.ts', '.tsx', '.js'],
            alias: alias,
            fallback: {
                "tty": false,
                "os": false,
                "crypto": false,
                "https": false,
                "http": false,
                "zlib": false,
                "buffer": false,
                "util": false,
                "stream": false,
            }
        },
        module: {
            // 배열 "use: []" 안에 있는 loader들은 가장 뒤에 있는 것부터 역순으로 적용됨에 유의.
            rules: [
                { test: /\.tsx?$/, use: [ts2js] },
                // src는 CSS module 적용, 그 외는 global css로 처리.
                { include: srcPath, test: /\.(css|scss)$/, use: [css2inline, cssModule2css, sass2css] },
                { exclude: srcPath, test: /\.(css|scss)$/, use: [css2inline, css2css, sass2css] },
                { test: /\.svg$/, use: [svg2inline] },
                { test: /\.(ttf|woff|woff2|png)$/, type: 'asset/resource' }
            ]
        },
        plugins: plugins,
        devServer: {
            host: serverIP,
            port: serverPort,
            hot: true,
            open: true,
            contentBase: [outPath, publicPath],
            // webpack-dev-server는 기본적으로 결과물 파일들을 디스크에 쓰지 않고 메모리 위에 올리는데,
            // 그러면 HTML 파일은 outPath에 미리 존재해야 함 & 결과물 파일 직접 확인이 안 됨.
            // 따라서, webpack-dev-server가 결과물 파일들을 디스크에 쓰도록 강제.
            writeToDisk: true,
            openPage: `http://${localIP}:${serverPort}`,
            historyApiFallback: {
                disableDotRule: true
            }
        }
    };
};
