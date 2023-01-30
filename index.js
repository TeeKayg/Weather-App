let temp = document.querySelector('.temp');
let form = document.querySelector('form');
let cityInput = document.getElementById('cityname');

form.addEventListener('submit', (e) => {
    console.log(cityInput.value)
    e.preventDefault();
    getWeather(cityInput.value)
});

async function getWeather(latData, lonData, cityName){
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latData}&lon=${lonData}&appid=1588473748be5ad72a5f912bdee53bc2&units=metric`, {mode: 'cors'});
    const weatherData = await weatherResponse.json();
    const tempData = weatherData.main.temp;
    console.log(weatherData)
    temp.textContent = `The weather in ${cityName} is ${tempData}°C`;
}

async function getLatandLon(city){
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=1588473748be5ad72a5f912bdee53bc2`, {mode: 'cors'});
    const data = await response.json();
    console.log(data);
    //Make lat and lon more precise
    const latData = data[0].lat;
    const lonData = data[0].lon;
    getWeather(latData, lonData, data[0].name);
}

async function getWeather(city){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=bc591177501744ba89a02048233001&q=${city}&aqi=no`)
    const data = await response.json();
    console.log(data);
    displayWeather(data);
}

function displayWeather(data){
    temp.textContent = `The weather in ${data.location.name}, ${data.location.country} is ${data.current.temp_c}°c`
}