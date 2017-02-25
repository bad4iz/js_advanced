window.onload = function () {
    'use strict';
    
    var win;
    function openWindow() {
        win = window.open('page.html', 'Window', 'width=200, height=200');
    }
   
    setTimeout(openWindow, 500);
    
    
};