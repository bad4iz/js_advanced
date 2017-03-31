var task3 = document.getElementById('task3');
var resultTest3 = document.getElementById('resultTest3');
var one = '', two = '';
task3.onchange   = function () {

    document.getElementById('resultTest3').textContent = task3.value;
};
