let temp = document.querySelector('.temp');
let form = document.querySelector('form');
let cityInput = document.getElementById('cityname');

form.addEventListener('submit', (e) => {
    console.log(cityInput.value)
    e.preventDefault();
    getLatandLon(cityInput.value)
});

async function getWeather(latData, lonData){
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latData}&lon=${lonData}&appid=1588473748be5ad72a5f912bdee53bc2&units=metric`, {mode: 'cors'});
    const weatherData = await weatherResponse.json();
    const tempData = weatherData.main.temp;
    const cityName = weatherData.name;
    temp.textContent = `The weather in ${cityName} is ${tempData}c`;
    console.log(weatherData);
}

async function getLatandLon(city){
    console.log(city)
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=1588473748be5ad72a5f912bdee53bc2`, {mode: 'cors'});
    const data = await response.json();
    //Make lat and lon more precise
    const latData = data[0].lat;
    const lonData = data[0].lon;
    getWeather(latData, lonData);
}

