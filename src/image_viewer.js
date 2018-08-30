// import css file
// .. -> up one directory
// anything non js requires file extension
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css'

const smallImage = document.createElement('img');
// image.src = 'http://lorempixel.com/400/400';
smallImage.src = small;

document.body.appendChild(smallImage);


const bigImage = document.createElement('img');
// image.src = 'http://lorempixel.com/400/400';
bigImage.src = big;

document.body.appendChild(bigImage);
