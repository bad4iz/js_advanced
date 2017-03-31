var task3 = document.getElementById('task3');
var resultTest3 = document.getElementById('resultTest3');
var arr = [];
var ind;
var val;
var reg = /\+-*\//;
task3.onchange = function () {
    val = task3.value;
    ind = val.search(/[\+\-\*]/)
    if (~ind){
        console.log(new Number(val.slice(0,ind)) + val.slice(ind, ind + 1) + new Number(val.slice(ind + 1) );
    }
    document.getElementById('resultTest3').textContent = task3.value;
};
