ROI trial
--------------------

1. Make sure the Nodejs version is `8.2.1` or higher

2. Install all dependencies with the following command:
`npm i`

#### Build static markup

You can build static markup (the `build` folder) by runnin the following command:
`npm run dev`

_The output will be written on a disk._

#### Run Dev Server
Build svg-sprite by command: `npm run svg-sprite`.


You can run dev server (files watcher) by running with the following command:
`npm run server`

_The output will be kept in memory._

After that `webpack-dev-server` will provide `http://localhost:5500`.


#### Notes

- The browserslist for babel and autoprefixer is specified in the package.json

### Dev Server Issue (`npm run server`)
If the error `Error: listen EADDRINUSE 127.0.0.1:5500` occurs run the following commands in the terminal:
1) On Windows
- netstat -o -n -a | findstr :5500
- taskkill /F /PID 5500

2) On Linux/macOS
- [sudo] lsof -i :5500
- kill -9 <PID>

Then try to restart the server

