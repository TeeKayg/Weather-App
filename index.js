let temp = document.querySelector('.temp');
let form = document.querySelector('form');
let cityInput = document.getElementById('cityName');
let desc = document.querySelector('.desc')
let errorMessage = document.querySelector('.errorMessage');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeather(cityInput.value)
    cityInput.value = '';

    temp.classList.add('animate')
    setTimeout(() =>{
        temp.classList.remove('animate')
    }, '1000');

    desc.classList.add('animate')
    setTimeout(() => {
        desc.classList.remove('animate')
    }, '1000')
});

async function getWeather(city){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=bc591177501744ba89a02048233001&q=${city}&aqi=no`)
    if (response.status >= 200 && response.status <= 299){
        const data = await response.json();
        displayWeather(data);
        errorMessage.innerText = ''
    } else {
        errorMessage.innerText = 'Please enter a valid City'
        temp.textContent = ''
        desc.textContent = ''
    }
}

function displayWeather(data){
    temp.textContent = `${data.location.name}, ${data.location.country}`
    desc.textContent = `${data.current.condition.text}, ${data.current.temp_c}°c`
    console.log(data)
}


//add background changing function
