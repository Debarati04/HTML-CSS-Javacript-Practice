var array = ['red', 'blue', 'yellow', 'green'];

function generateRect(N, array){
    var baseDiv = document.getElementsByClassName('baseDiv')[0];
    console.log(baseDiv);
    for(var i=0; i<=N; i++){
        var div = document.createElement("div");
        div.style.padding = 10 + 'px';
        /*if(i<array.length){
            div.style.backgroundColor = array[i];
        }
        else{
            div.style.backgroundColor = array[i - array.length];
        }*/
        
        div.style.backgroundColor = array[i%array.length];
        baseDiv.appendChild(div);
        baseDiv = div;
    }
    
}

function generateCircle(N, array){
    var baseDiv = document.getElementsByClassName('baseDiv')[1];
    //baseDiv.style.margin = "100px";
    console.log(baseDiv);
    var count = 1;
    for(var i=0; i<=N; i++){
        var div = document.createElement("div");
        div.style.padding = 10 + 'px';
        div.style.height = ((N*50) - (count * 20)) + 'px';
        div.style.width = ((N*50) - (count * 20)) + 'px';
        div.style.borderRadius = ((N*50) - (count * 20)) + 'px';
        
        div.style.backgroundColor = array[i%array.length];
        baseDiv.appendChild(div);
        baseDiv = div;
        count ++;
    }
}

generateRect(10, array);
generateCircle(10,array);