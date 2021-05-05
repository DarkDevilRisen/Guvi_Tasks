var container = document.createElement('div');
container.setAttribute('class', 'container mt-5 pl-5 text-center');
var row = document.createElement('div');

// row.setAttribute('class', 'row');
// row.setAttribute('style', 'text-alilgn:Center;');

// var col = document.createElement('div')
// col.setAttribute('class','col-8 float-center')

var date = document.createElement('input');
date.setAttribute('type', 'date');
date.setAttribute('id', 'myDate');

// var button = document.createElement('button');
// button.type = "button"
// button.classList.add('btn', 'btn-primary')
// button.addEventListener('click', diff)
// button.innerHTML = "Display Data"

var button = document.createElement('input');
button.value = 'Display Data';
button.type = 'button';
button.setAttribute('style', 'background-color:blue;color:white;');
button.addEventListener('click', diff);


// row.append(date);
// row.append(button)
container.append(date);
container.append(button);
document.body.append(container);






function diff() {
    var dat = document.getElementById("myDate").value;

    // var dt = new Date("May 25, 2021 23:15:00");
    // console.log("getDay() : " + dt.getDay() ); 
    // console.log(dat)
    var dt = new Date(dat);
    var cur = new Date();
    var day;
    var month;
    var months;
    if (dt.getDay() == 0) {
        day = "Sun"
    } else if (dt.getDay() == 1) {
        day = "Mon"
    } else if (dt.getDay() == 2) {
        day = "Tue"
    } else if (dt.getDay() == 3) {
        day = "Wed"
    } else if (dt.getDay() == 4) {
        day = "Thu"
    } else if (dt.getDay() == 5) {
        day = "Fri"
    } else if (dt.getDay() == 6) {
        day = "Sat"
    }

    if (dt.getMonth() == 0) {
        month = "Jan"
    } else if (dt.getMonth() == 1) {
        month = "Feb"
    } else if (dt.getMonth() == 2) {
        month = "Mar"
    } else if (dt.getMonth() == 3) {
        month = "Apr"
    } else if (dt.getMonth() == 4) {
        month = "May"
    } else if (dt.getMonth() == 5) {
        month = "Jun"
    } else if (dt.getMonth() == 6) {
        month = "Jul"
    } else if (dt.getMonth() == 7) {
        month = "Aug"
    } else if (dt.getMonth() == 8) {
        month = "Sep"
    } else if (dt.getMonth() == 9) {
        month = "Oct"
    } else if (dt.getMonth() == 10) {
        month = "Nov"
    } else if (dt.getMonth() == 11) {
        month = "Dec"
    }

    var p = createP('p');
    p.innerHTML = "Given Input date is" + " " + day + " " + month + " " + dt.getDate() + " " + dt.getFullYear() + " " +
        dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + " " + "GMT +0530(India Standard Time)"
    container.append(p);
    document.body.append(container);

    var p = createP('p');
    p.innerHTML = "Year  " + (cur.getFullYear() - dt.getFullYear());
    container.append(p);
    document.body.append(container);

    var p = createP('p');
    months = ((cur.getFullYear() - dt.getFullYear()) * 12);
    months += cur.getMonth() - dt.getMonth();
    p.innerHTML = "Month  " + months;
    container.append(p);
    document.body.append(container);

    var p = createP('p');
    var Difference_In_Time = cur.getTime() - dt.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    p.innerHTML = "Day  " + Difference_In_Days.toFixed(0);
    container.append(p);
    document.body.append(container);

    var p = createP('p');
    var Hour_diff = (cur.getTime() - dt.getTime()) / 1000;
    Hour_diff /= (60 * 60);;
    result = Math.abs(Math.round(Hour_diff));
    p.innerHTML = "Hour  " + result;
    container.append(p);
    document.body.append(container);

    var p = createP('p');
    var min_diff = (cur.getTime() - dt.getTime()) / 1000;
    min_diff /= 60;
    mins = Math.abs(Math.round(min_diff));
    p.innerHTML = "Minutes  " + mins;
    container.append(p);
    document.body.append(container);

    var p = createP('p');
    var seconds = Math.abs(cur.getTime() - dt.getTime()) / 1000;
    p.innerHTML = "Seconds  " + seconds.toFixed(0);
    container.append(p);
    document.body.append(container);

    var p = createP('p');
    var milli_diff = Math.abs(cur.getTime() - dt.getTime()) / 1000;
    milli_diff *= 1000;
    milliseconds = Math.abs(Math.round(milli_diff));
    p.innerHTML = "Milliseconds  " + milliseconds.toFixed(0);
    container.append(p);
    document.body.append(container);
}

function createP(ele) {
    var p = document.createElement(ele);
    p.setAttribute('style', 'text-align:center;margin-bottom:0px');
    return p;
}