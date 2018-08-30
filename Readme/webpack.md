 ### What is WebPack?

 - In Single Page App - server just sends out a html barebone, and the huge amount of JS code to browser, which then starts building the web app.
 - In server side rendering world, whole html doc is rendered, and less js code used to modify the content

 - Modules are essential to split the huge code base into different folders/files(modules) : This adds huge benefit

 - However modules can lead to a bunch of problems
 1. Load order : code in one file will have a dependency on code in another file, hence the order in which files load matters


- Webpack collects all the JS files and generates a single bundle.js file and also ensuring every module is loaded in a proper order

1. also converts ES6/Es2015 code to ES 5 code

### About modules:
- common Js - implemented by node js, hence when using node chances are we use require and modules.exports format
- AMD (Asynchronous module definition) JS -
- ES2015 (ES6) - import and export


### configure Webpack
- npm init  [ generates package.json file, with all dependencies]
- Create a src folder with two files index.js and sum.js
- npm install --save-dev webpack@2.2.0-rc.0

1. configuration is needed for a webpack - webpack.config.js (file in root directory)

2. config file contains
  - entry point property: where the js code starts
  - output property : path requires absolute path hence use a helper to generate absolut path
  - use path-module

3. in package.json replace in the scripts tag add "build": "webpack"
now run $npm run build

## Loaders: Enhance behaviour of webpack, individual libraries that can run on different files in our project.

- Babel : Transpiling js from ES 2015 to ES5
1. install babel : npm install --save-dev babel-loader babel-core babel-preset-env
2. babel set up for ES2015 : don't let babel apply on CSS, its only on js
3. create module in webpack_config
4. create .babelrc file
5: $npm run build ( I was getting error when I added babel to webpack_config, however I was able to convert ES2015 syntax of export and import to ES5 and use the code in browser)

## Handling CSS with Webpack
1. create image.js
2. http://lorempixel.com/400/400
generates random images each time you refresh 400/400 is the width and height
3. why run npm run build everytime: There are array of commands available to automatically rebuilding our project with webpack, reason we are not using is because we are making frequent changes to webpack config file, and these changes will not be picked by auto commands.
4. build again and notice random image appears.
5. create and import css file.
6. configure webpack to handle css , css-loader and style-loader
otherwise you get this error ; You may need an appropriate loader to handle this file type.
```| img {
|   border: 10px solid black;
| }
```
7. npm install --save-dev style-loader css-loader
8. add config in webpack config
9. npm run build.

## loaders are tricky: what did the loaders do to the css files
1. notice : in the head tag, style appears,
how did webpack modify html structure of our document??
- in bundle.js you will see raw content of img style is taken and
additional code is injected to add the style.

## extract text plugin - generate separate css file instead of injecting code in bundle.js
1. npm install --save-dev extract-text-webpack-plugin@2.0.0-beta.4
2. update webpack config with extra plugin specifics
3. run npm run build
4. add a link tag in html head


## Handling images with webpack: image is dependent on outside source , hence lot laggy to load.
- add image locally and include in the webpack config
1. npm install --save-dev image-webpack-loader url-loader
2. configure web pack
3. Add images to test with : open . -> open folder an ddrag drop 2 images > 40Kb and < 40kb
4. run npm run build
5. if you get file-loader error, run : npm install --save-dev file-loader
6. notice, in the build folder only the big image is generated as a seperate file
7. import the big and small image into image_viewer.js
8. notice upon build only small image is shown on the website not large image: check in the console and notice the image is being referred in the root directory but not in output directory.

## resolve the image path issue by creating public path
1. add config to output : public path
2. npm run build
3. notice : file loaded, so what exactly did public path config do?

## Webpack dev server
1. So far we have been manually running webpack, manually loading index.html, which in turn will load the js. there has to be better way, which is webpack dev server:
2. webpack-dev-server is a library which acts as an intermediary between build output and browser. with this pack, we have to start server only once, it automatically rebuild the project when changes made.
3. No longer be manually loading index.html.
4. no backend logic included in webpack-dev-server: it is only for client side js in single page app, so what happens when a logic is needed like lets say access a database, user auth etc, which are traditionally handled by server.
these logics are handled by traditional servers like node

## steps to use wbepack-dev-server
1. npm install --save-dev webpack-dev-server@2.2.0-rc.0
2. update package.json, to add the script serve :
3. npm run server:
build a project
4. change a js file and notice auto rebuild. modify index.js

Note :
1. Webpack-dev-server will not notice the changes made to webpack-config file
2. if you run webpack-dev-server: output files are only stored in the memory, the build files are not saved into hard-drive.
