function handler() {
    var r;
    r = prompt('Enter radius of circle');
    //alert('Area is: ' + calculateArea(r));
    var c = document.getElementById('content');
    // console.log(c.innerHTML, c.id);
    c.innerHTML = calculateArea(r);
}

function calculateArea(rad) {
    return Math.PI*rad*rad;
}

document.getElementById('inputButton').addEventListener('click', handler);

var divs = document.querySelectorAll('div');
console.log(divs);


var content = document.getElementById('content');

function clock() {
    content.innerHTML = Date();
}

clock();

setInterval(clock, 1000);


