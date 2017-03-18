document.getElementsByTagName("button")[0].addEventListener('click', showModalHandler);
var modalBox = document.getElementsByClassName("modalBox")[0];

function showModalHandler(){
    
    modalBox.style.display = "block";
    
    
    generateModal(modalObject);
    
    
}
var modalObject = {
    title : "Exit Application",
    message : "Are you sure you want to quit?",
    affirmativeButton : {
        text : "Yes",
        callback : yesFunc
    },
    negationButton : {
        text : "No",
        callback : noFunc
    }
}
function yesFunc(){
    alert("yes");
}
function noFunc(){
    alert("no");
}
var executeAffirmative, executeNegative;

function generateModal(modalObject){
    var title = document.getElementById("title");
    var msg = document.getElementById("msg");
    var choice = document.getElementById("choice");
    
    title.textContent = modalObject.title; //['title'];
    msg.textContent = modalObject.message;
    
    var no =document.getElementById('no');
    var yes=document.getElementById('yes');
    yes.textContent = modalObject.affirmativeButton.text;
    no.textContent = modalObject.negationButton.text;
    
    yes.removeEventListener('click', executeAffirmative);
    no.removeEventListener('click', executeNegative);
    
    executeAffirmative = function () {
        modalBox.style.display ="none";
        modalObject.affirmativeButton.callback();
    }
    executeNegative=function() {
        modalBox.style.display ="none";
        modalObject.negationButton.callback();
    }
    
    yes.addEventListener('click', executeAffirmative);
    no.addEventListener('click', executeNegative);

}