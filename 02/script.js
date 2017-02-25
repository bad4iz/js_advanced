window.onload = function () {
    'use strict';
    var app = app || {};

    var textq = 'Вопроса проектах, имени, гор алфавит своих безопасную эта букв моей снова большого которое семь парадигматическая, он? Мир вопрос страну буквенных свой ручеек,';

    app.Button = function (idButton) {
        if (typeof idButton !== 'string') {
            throw new SyntaxError("Данные некорректны");
        };

        this.button = document.getElementById(idButton);

    }

    app.Button.prototype.eventClick = function (fn) {
        var value = this.button.value;

        this.button.onclick = function () {
            if (typeof fn !== 'function') {
                console.log('нажатие на: "' + value + '" добавьте аргумент в eventClick(fn)');
                return;
            }
            fn();
        };
    }

    function selectSetCollor(el) {
        var el = el;
        return function () {
            if (typeof el !== 'string') {
                throw new SyntaxError("Данные некорректны");
            };
            var selects = document.querySelectorAll(el)
            selects.forEach((item) => item.style.border = '1px solid red');
        }
    }

    function selectSetText(el, text = 'PARAGRAPH') {
        var el = el;
        return function () {
            if (typeof el !== 'string') {
                throw new SyntaxError("Данные некорректны");
            };
            var selects = document.querySelectorAll(el)
            selects.forEach((item) => item.firstChild.data = text);
        }
    }

    function addTextIn(el, text = textq) {
        var el = el;
        var count = 0;
        if (typeof el !== 'string') {
            throw new SyntaxError("Данные некорректны");
        };

        return function () {
            if (document.querySelector('#add') === null) {
                var div = document.createElement('div');
                div.id = "add"
            } else {
                var div = document.querySelector('#add');
            }
            if (count++ < 10) {

                var element = document.createElement(el);
                element.innerHTML = ' ' + count;
                div.appendChild(element);


                var firstInput = document.querySelector('input');
                var doc = document.body

                if (firstInput != null) {
                    // вставка элемента перед указанным элементом.
                }
                doc.insertBefore(div, firstInput);
            } else {
                //                while (div.firstChild.remove()) {
                //                }
                div.remove()
                count = 0;

            }
        }
    }

    Object.prototype.getClass = function (getClass) {
        if (typeof getClass !== 'string') {
            throw new SyntaxError("Данные некорректны");
        };
        var mas = [];
        var e = this;
        for (var i = 0; i < e.childNodes.length; ++i) {
            var temp = e.childNodes[i];

            // если найденный узел не элемент то пропустить его
            if (temp.nodeType != 1) {
                continue;
            }
            var stringClass = temp.getAttribute('class');
            if (stringClass) {
                var masClass = stringClass.split(' ');
                masClass.forEach((el) => {
                    if (el === getClass) {
                        mas.push(temp)
                    }
                })
            }

        }
        return mas;
    };

    console.log(document.body.getClass('f'));



    var buttonSelectAllPs = new app.Button('selectAllPs');
    buttonSelectAllPs.eventClick(selectSetCollor('p'));

    var selectAllLinks = new app.Button('selectAllLinks');
    selectAllLinks.eventClick(selectSetCollor('a'));

    var selectAllDivs = new app.Button('selectAllDiv');
    selectAllDivs.eventClick(selectSetCollor('div'));

    var setText = new app.Button('setText');
    setText.eventClick(selectSetText('p'));

    var addText = new app.Button('addText');
    addText.eventClick(addTextIn('p'));



};