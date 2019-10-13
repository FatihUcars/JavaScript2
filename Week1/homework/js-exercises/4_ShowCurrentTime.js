'use strict'
const clock = function() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    const time = h + ':' + m + ':' + s;

    document.getElementById('timer').textContent = time;

    setInterval(clock, 1000);
}

clock();
