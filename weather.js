const spanWeather = document.querySelector(".js-weather");

const keyCode = "locationCode"
const API_KEY = "056d79cd09a71f6d67f16c1f5deba7c5"

function loadWeatherFromAPI(lat,lon){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(responseJson){
        console.log(responseJson);
        const temp = responseJson.main.temp;
        const city = responseJson.name;
        spanWeather.innerHTML = ` ${Math.floor(temp)}°C @ ${city}`
    })
    
}

function saveToLocal(localObj){
    localStorage.setItem(keyCode,JSON.stringify(localObj));
}

function getLocaSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(position)
    const locaObj = {
        latitude,
        longitude
    };
    saveToLocal(locaObj);
    loadWeatherFromAPI(lat,lon);
}

function getLocaFail(){
    console.log(`fail`);
}

function getUserCode(){
    navigator.geolocation.getCurrentPosition(getLocaSuccess,getLocaFail);
}

function loadCodeFromLocal(){
    const localCode = localStorage.getItem(keyCode);
    if(localCode === null){
        getUserCode();
    }
    else{
        const parseCode = JSON.parse(localCode);
        const lat = parseCode.latitude;
        const lon = parseCode.longitude;
        loadWeatherFromAPI(lat,lon);
    }

}

function init(){
    loadCodeFromLocal();
}

init();