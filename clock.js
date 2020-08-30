const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minuits = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    clockTitle.innerHTML = `${
        hours <10 ? `0${hours}`:hours}:${
        minuits <10 ? `0${minuits}`:minuits}:${
        seconds <10 ? `0${seconds}`:seconds
    }`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();