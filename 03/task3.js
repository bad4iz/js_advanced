var task3 = document.getElementById('task3');
var resultTest3 = document.getElementById('resultTest3');
var ind;
var val;
var reg = /[\+\-\*\/]/g;
task3.onchange = function () {
    val = task3.value;

    var operator = val.match(reg);
    var itog = 0;
    if( 1 == operator.length ){
        var arr  = val.split(operator);
        var a = arr[0];
        var b = arr[1];

        if (operator == '-') itog = +a - +b;
        if (operator == '+') itog = +a + +b;
        if (operator == '*') itog = +a * +b;
        if (operator == '/') itog = +a / +b;
        resultTest3.textContent = itog;
    }
};
