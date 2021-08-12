class UI {
    constructor() {
        this.location = document.querySelector('.city');
        this.temperature = document.querySelector('.temperature');
        this.information = document.querySelector('.information');
        this.condition = document.querySelector('.condition');
        this.day0 = document.querySelector('#day1');
        this.day1 = document.querySelector('#day2');
        this.day2 = document.querySelector('#day3');
        this.day3 = document.querySelector('#day4');
        this.day4 = document.querySelector('#day5');
        this.day5 = document.querySelector('#day6');
        this.dayArray = [this.day0, this.day1, this.day2, this.day3, this.day4, this.day5];
    }

    paint(data, forecastData) {

        // Convert UNIX timestamp to date
        /* let sunrise = new Date((data.sys.sunrise + forecastData.timezone_offset) * 1000 ).toLocaleString(navigator.language, {hour: '2-digit', minute:'2-digit'});
        let sunset = new Date(data.sys.sunset * 1000).toLocaleString(navigator.language, {hour: '2-digit', minute:'2-digit'}); */

        // Paint UI;
        this.location.textContent = data.name;
        this.temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
        this.condition.innerHTML = data.weather[0].description;

        this.information.innerHTML = `
        <span>
            <i class="bi bi-moisture"></i>    ${data.main.humidity}%
        </span>
        <span>
            <i class="bi"></i>    Feels Like: ${Math.round(data.main.feels_like - 273.15)}°C
        </span>
        <span>
            <i class="bi bi-wind"></i>    ${data.wind.speed} m/s
        </span>`;
        
        // Get forecast information
        for(let j = 0; j < 6; j++) {
            
            let minimum = Math.round(forecastData.daily[j].temp.min - 273.15);
            let maximum = Math.round(forecastData.daily[j].temp.max - 273.15);
            let weekDay = new Date(forecastData.daily[j].dt * 1000).toLocaleString('en-us', { weekday: 'long' }).slice(0,3);

            this.dayArray[j].children[0].innerHTML = weekDay;
            this.dayArray[j].children[1].textContent = `${maximum} / ${minimum}°C`;
            this.dayArray[j].children[2].innerHTML = forecastData.daily[j].weather[0].description;
        }
    }
}