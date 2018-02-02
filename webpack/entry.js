import PATHS from './paths';

export default function () {
    const entries = {
        'css/index.css': `${PATHS.src}/scss/index.scss`,
        'js/index.js': `${PATHS.src}/js/index.js`
    };

    return {
        entry: entries
    };
}
