/**
 * Created by bad4iz on 29.03.2017.
 */
let query, pairs, sum = 0;

query = location.search.substring(1);
pairs = query.split("&");

for (var i = 0; i < pairs.length; i++) {

    var pos = pairs[i].indexOf('=');            // Проверка пары "name=value"
    if (pos == -1) {                            // Если не найдено - пропустить
        continue;
    }

    console.log( pairs[i].substring(pos + 1));    // Получение значения
    sum += +pairs[i].substring(pos + 1);    // Получение значения
}
let ar = document.getElementById('sum');
ar.textContent += sum;

