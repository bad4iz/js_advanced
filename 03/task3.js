var task3 = document.getElementById('task3');
var resultTest3 = document.getElementById('resultTest3');
var one = '', two = '';
var reg = /\+-*\//;
task3.onchange   = function () {
    console.log(task3.value.search(/[\+\-\*]/));
    document.getElementById('resultTest3').textContent = task3.value;
};
