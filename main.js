'use strict';


function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomFloat(10, 100));








