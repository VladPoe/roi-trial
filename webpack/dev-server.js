import path from 'path';
import webpack from 'webpack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

export default function () {
    return {
        devServer: {
            contentBase: path.join(__dirname, '../build'),
            compress: true,
            stats: 'errors-only',
            hot: false,
            inline: false,
            open: false,
            port: 5500
        },
        plugins: [
            new webpack.NamedModulesPlugin(),
            new BrowserSyncPlugin(
                // BrowserSync options
                {
                    // browse to http://localhost:5510/ during development
                    host: 'localhost',
                    port: 5510,
                    // proxy the Webpack Dev Server endpoint
                    // (which should be serving on http://localhost:5510/)
                    // through BrowserSync
                    proxy: 'http://localhost:5500/',
                    open: false
                },
                // plugin options
                {
                    // prevent BrowserSync from reloading the page
                    // and let Webpack Dev Server take care of this
                    reload: false
                }
            )
        ]
    };
};
