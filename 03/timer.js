window.onload = function () {
    'use strict';
    var timer,
        counter,
        time,
        x,
        secX,
        secY,
        minX,
        minY;

    function get(id) {
        return document.getElementById(id);
    }

    time = get('out');


    counter = 0;
    x = 0;
    secX = 0;
    secY = 0;
    minX = 0;
    minY = 0;
    time.innerHTML = '' + minX + minY + ':' + secX + secY + ':' + x + counter;


    function count() {
        counter += 1;
        if (counter > 9) {
            counter = 0;
            x += 1;
        }
        if (x > 9) {
            x = 0;
            secY += 1;
        }
        if (secY > 9) {
            secY = 0;
            secX += 1;
        }
        if (secX > 6) {
            secX = 0;
            minY += 1;
        }
        if (minY > 9) {
            minY = 0;
            secX += 1;
        }
        time.innerHTML = minX + '' + minY + ':' + secX + secY + ':' + x + counter;
    }

    get('start').onclick = function () {
        timer = setInterval(count, 10);
    }

    get('stop').onclick = function () {
        clearInterval(timer);
    }
    get('reset').onclick = function () {
        counter = 0;
        x = 0;
        secX = 0;
        secY = 0;
        minX = 0;
        minY = 0;
        time.innerHTML = minX + '' + minY + ':' + secX + '' + secY + ':' + x + '' + counter;
    }
};
