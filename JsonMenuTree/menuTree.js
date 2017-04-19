var menu = '[{"name":"Movies","children":[{"name":"Last Samurai","children":[]},{"name":"XMEN","children":[]},{"name":"KungFu Panda","children":[{"name":"year 2010","children":[]},{"name":"genre animation","children":[]}]}]},{"name":"Music","children":[{"name":"Linkin Park","children":[]},{"name":"Iron Maiden","children":[]}]},{"name":"TV Shows","children":[{"name":"Game Of Thrones","children":[]},{"name":"Iron Fist","children":[]}]}]'
var jsMenu = JSON.parse (menu);

document.getElementById("button").addEventListener('click', function () { 
    generateMenu (document.body, jsMenu);
});

function generateMenu (parent, menuItems){
    for (var i=0; i<menuItems.length; i++){
        var menuElement = document.createElement("div");
        menuElement.innerHTML = menuItems[i].name;
        if (menuItems[i].children && menuItems[i].children.length > 0){
            generateMenu (menuElement, menuItems[i].children);
        }
        parent.appendChild(menuElement)
    }
}