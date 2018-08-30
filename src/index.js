//ES5
// const sum = require('./sum');

// ES6
import sum from './sum';
import './image_viewer';
// not importing any code from image_viewer, we want only the code in image_viewer file to run, no functionality is exported

const total = sum(10, 5);
console.log(total);
console.log('hey there'); //web pack dev server will see the change and auto rebuilds the project and build the file that changed
