window.onload = function () {
    'use strict';
    var counter = 0;
    var time = get('out');
    var t = '';

    function get(id) {
        return document.getElementById(id);
    }

    function count1() {
        counter += 1;
        
        time.innerHTML = counter;
    }

    get('start').onclick = function () {
        console.log('start');
        timer = setInterval(count1, 10);
    }
    get('stop').onclick = function () {
        console.log('stop');
        clearInterval(timer);
    }
    get('reset').onclick = function () {
        console.log('reset');
        counter = 0;
    }
};