import CopyWebpackPlugin from 'copy-webpack-plugin';
import PATHS from './paths';

export default function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|jpeg|png|gif|svg|)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[path][name].[ext]',
                                emitFile: false
                            }
                        }
                    ]

                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: `${PATHS.src}/assets/icons/`,
                    to: 'assets/icons'
                },
                {
                    from: `${PATHS.src}/assets/images/`,
                    to: 'assets/images'
                }
            ])
        ]
    };
}
