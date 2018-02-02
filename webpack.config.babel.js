'use strict';

import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import PATHS from './webpack/paths';
import entryModule from './webpack/entry';
import copyModule from './webpack/copy';
import fontsModule from './webpack/fonts';
import devServerModule from './webpack/dev-server';
import cleanModule from './webpack/clean';
import htmlModule from './webpack/html';
import jsModule from './webpack/js';
import cssModule from './webpack/css';

const stats = {
    assets: false,
    colors: true,
    version: false,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false
};

const generateConfig = function () {
    return webpackMerge([
        {
            stats: stats,
            context: PATHS.src,
            output: {
                path: PATHS.build,
                filename: '[name]'
            },
            plugins: [
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery'
                })
            ],
            resolve: {
                descriptionFiles: [
                    'package.json'
                ],
                modules: [
                    'node_modules'
                ]
            },
            target: 'web'
        },
        entryModule(),
        htmlModule(),
        jsModule(),
        cssModule(),
        devServerModule(),
        cleanModule(),
        copyModule(),
        fontsModule()
    ]);
};

export default generateConfig;
