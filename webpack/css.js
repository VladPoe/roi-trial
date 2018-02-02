import ExtractTextPlugin from 'extract-text-webpack-plugin';
import Autoprefixer from 'autoprefixer';

const extractStyles = new ExtractTextPlugin('[name]', { allChunks: true });

export default function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(css|sass|scss)$/,
                    use: extractStyles.extract({
                        publicPath: '../',
                        fallback: 'style-loader',
                        use: [
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    ident: 'postcss',
                                    plugins: (loader) => [
                                        Autoprefixer()
                                    ]
                                }
                            },
                            'sass-loader'
                        ]
                    })
                }
            ]
        },
        plugins: [
            extractStyles
        ]
    };
};
