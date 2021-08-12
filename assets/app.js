
const ui = new UI;  
const storage = new Storage();
const weather = new Weather(storage.getStorage().city);

document.addEventListener('DOMContentLoaded', getWeather);

// Change location
const form = document.querySelector('.search1');

form.onsubmit = (e) => {
    e.preventDefault();
    const city = document.querySelector('.input').value;
    weather.changeLocation(city);

    storage.setStorage(city);

    getWeather();

    document.querySelector('.input').value = '';

}

// Change location on tablet or mobile
const searchIcon = document.querySelector('.hamburger-button');

// Display search city option on tablet or mobile
searchIcon.onclick = () => {
    // Display background
    document.querySelector('.transparent-background').style.display = "flex";
    // Change location
    document.querySelector('.search2').onsubmit = (e) => {
        e.preventDefault();

        const city = document.querySelector('.input2').value;
        weather.changeLocation(city);

        storage.setStorage(city);

        getWeather();

        document.querySelector('.input2').value = '';

        document.querySelector('.transparent-background').style.display = "none";
    }
    
}

// Get data from API and paint UI
function getWeather() {
    weather.fetchWeather()
    .then(data => {
        console.log(data);
        //ui.paint(data);
        const forecast = new Forecast(data.coord.lon, data.coord.lat);
        forecast.fetchForecast()
        .then(forecastData => {
            ui.paint(data, forecastData);
            console.log(forecastData);
        })
    })
    .catch(err => {
        console.log(err)
    })
}

