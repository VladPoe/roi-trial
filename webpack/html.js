import path from 'path';
import fs from 'fs';
import HtmlPlugin from 'html-webpack-plugin';
import HtmlPugPlugin from 'html-webpack-pug-plugin';

const pagesFolder = `${path.resolve(__dirname, '../')}/src/pug/pages/`;

function generateHtmlPluginObjects() {
    const objectsArr = [];

    fs.readdirSync(pagesFolder).forEach(file => {
        objectsArr.push(
            new HtmlPlugin({
                template: `${pagesFolder}${file}`,
                filename: `${file.slice(0, -4)}.html`,
                inject: false
            })
        );
    });

    objectsArr.push(new HtmlPugPlugin());

    return objectsArr;
}

export default function () {
    return {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    use: [
                        {
                            loader: 'pug-loader',
                            options: {
                                pretty: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: generateHtmlPluginObjects()
    };
};
