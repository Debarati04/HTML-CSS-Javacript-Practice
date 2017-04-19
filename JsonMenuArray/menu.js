var menu = '[{"title":"Movies","parentId":null},{"title":"Music","parentId":null},{"title":"TV Shows","parentId":null},{"title":"Logan","parentId":"Movies"},{"title":"Last Samurai","parentId":"Movies"},{"title":"KungFu Panda","parentId":"Movies"},{"title":"year 2010","parentId":"KungFu Panda"},{"title":"genre animation","parentId":"KungFu Panda"},{"title":"Xmen-2","parentId":"Movies"},{"title":"Linkin Park","parentId":"Music"},{"title":"Iron Maiden","parentId":"Music"},{"title":"Game Of Thrones","parentId":"TV Shows"},{"title":"Iron Fist","parentId":"TV Shows"}]'

var jsMenu = JSON.parse (menu);

function func1 (jsMenu){
    for (var i=0; i < jsMenu.length; i++)
    {
        func2 (jsMenu[i]);
    }
}

function func2(obj){
    var element = document.createElement("div");
    if (obj.parentId === null)
    {
        document.body.appendChild(element);
    }
    else
    {
        var parent = document.getElementById(obj.parentId);
        parent.appendChild(element);
    }
    
    element.id = obj.title;
    element.innerHTML = obj.title;
}

document.getElementById("button").addEventListener('click', func1(jsMenu));
