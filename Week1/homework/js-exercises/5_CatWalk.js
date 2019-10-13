'use strict'
const image = document.getElementsByTagName('img')[0];
image.style.left = '0px';


const startTime = new Date().getTime();
const walkRight = function () {
    const currTime = new Date().getTime();
    const seconds = ((currTime-startTime)/1000);
    let newPosition = (0 + (seconds*50));
    image.style.left = newPosition + 'px';
    window.requestAnimationFrame(walkRight);

    
};

walkRight();

// Not finished