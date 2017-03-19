function handler(){
    var colorArray = ['red', 'blue', 'green', 'yellow', 'grey', 'pink'];
    
    var tdLen = document.getElementsByClassName('row');
    for (var i=0; i<tdLen.length; i++){
        var x = document.getElementsByTagName("input")[i].value;
        var div = document.createElement('div');
        div.style.backgroundColor = colorArray[i];
        div.style.height = x*2 + 'px';
        div.style.verticalAlign = 'bottom';
        tdLen[i].innerHTML = "";
        tdLen[i].appendChild(div);
    }
}

document.getElementsByTagName("button")[0].addEventListener('click', handler);

