const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greeting");

const keyUserName = "userName",
classShowON = "showing";

function handleSubmit(event){
    event.preventDefault();
    const inputUserName = input.value;
    console.log(inputUserName);
    localStorage.setItem(keyUserName,inputUserName);
    showGreeting(inputUserName);
}

function askUserName(){
    form.classList.add(classShowON);
    form.addEventListener("submit", handleSubmit);
}

function showGreeting(name){
    form.classList.remove(classShowON);
    greeting.classList.add(classShowON);
    greeting.innerHTML = `Hello ${name}`;   
}

function getName(){
    const currentUser = localStorage.getItem(keyUserName);
    if(currentUser===null){
        askUserName();
    }
    else{
        showGreeting(currentUser);
    }
}
  
function init(){
    getName();
}

init();