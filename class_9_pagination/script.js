var div = document.createElement('div')
var table = document.createElement('table')
table.setAttribute('style', 'border:1px solid black;width:800px;margin:15px')
var thead = document.createElement('thead');
var tr = document.createElement('tr');

var th1 = createtrtd('th', 'ID');
var th2 = createtrtd('th', 'Name');
var th3 = createtrtd('th', 'Mail');
tr.append(th1, th2, th3);
thead.append(tr);
table.append(thead)
div.append(table)
document.body.append(div)

var tbody = document.createElement('tbody');
var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true);
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);
    res = data.slice(0, 10)
    for (var i = 0; i < res.length; i++) {
        var tbodytr = document.createElement('tr');
        var td1 = createtrtd('td', res[i].id);
        var td2 = createtrtd('td', res[i].name);
        var td3 = createtrtd('td', res[i].email);
        tbodytr.append(td1, td2, td3);
        tbody.append(tbodytr);
        table.append(thead, tbody);
    }
}

var div1 = document.createElement('div')
div1.setAttribute('style','margin:15px;')
var button = createButton('input', 'button', 1)
var button = createButton('input', 'button', 2)
var button = createButton('input', 'button', 3)
var button = createButton('input', 'button', 4)
var button = createButton('input', 'button', 5)
var button = createButton('input', 'button', 6)
var button = createButton('input', 'button', 7)
var button = createButton('input', 'button', 8)
var button = createButton('input', 'button', 9)
var button = createButton('input', 'button', 10)
var button = createButton('input', 'button', "Start")
var button = createButton('input', 'button', "End")
var button = createButton('input', 'button', "Prev")

function createtrtd(elename, value = "") {
    var td = document.createElement(elename);
    td.setAttribute('style', 'border:1px solid black;padding:15px;');
    td.innerHTML = value;
    return td;
}

function createButton(ele, type = '', value = '', ) {
    var button = document.createElement(ele)
    button.type = type
    button.value = value
    button.addEventListener('click', page)
    div1.append(button)
    document.body.append(div1)
    return button

    function page() {
        if (button.value == 1) {
            tbody.textContent = data(0, 10);
        } else if (button.value == 2) {
            tbody.textContent = data(10, 20);
        } else if (button.value == 3) {
            tbody.textContent = data(20, 30);
        } else if (button.value == 4) {
            tbody.textContent = data(30, 40);
        } else if (button.value == 5) {
            tbody.textContent = data(40, 50);
        } else if (button.value == 6) {
            tbody.textContent = data(50, 60);
        } else if (button.value == 7) {
            tbody.textContent = data(60, 70);
        } else if (button.value == 8) {
            tbody.textContent = data(70, 80);
        } else if (button.value == 9) {
            tbody.textContent = data(80, 90);
        } else if (button.value == 10) {
            tbody.textContent = data(90, 100);
        } else if (button.value == "Start") {
            tbody.textContent = data(0, 10);
        } else if (button.value == "End") {
            tbody.textContent = data(90, 100);
        } else if (button.value == "Prev") {
            
        }
    }
}

function data(a, b) {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true);
    request.send();
    request.onload = function () {
        var data = JSON.parse(this.response);
        res = data.slice(a, b)

        for (var i = 0; i < res.length; i++) {
            var tbodytr = document.createElement('tr');
            var td1 = createtrtd('td', res[i].id);
            var td2 = createtrtd('td', res[i].name);
            var td3 = createtrtd('td', res[i].email);
            tbodytr.append(td1, td2, td3);
            tbody.append(tbodytr);
            table.append(thead, tbody);
        }

    }
}
