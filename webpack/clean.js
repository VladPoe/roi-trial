import path from 'path';
import CleanPlugin from 'clean-webpack-plugin';

const pathsToClean = [
    'build'
];

const cleanOptions = {
    root: path.resolve(__dirname, '../'),
    verbose: false
};

export default function () {
  return {
      plugins: [
          new CleanPlugin(pathsToClean, cleanOptions)
      ]
  }
};
