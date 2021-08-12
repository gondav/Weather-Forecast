class Weather {
    constructor(city) {
        this.city = city;
        this.apiKey = '7ef71d9181c6507391becb6fc15eca21';
    }

    // Fetch weather from API
    async fetchWeather() {

        const responseCurrent = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

        const responseDataCurrent = await responseCurrent.json();

        return responseDataCurrent;
    }

    // Change location
    changeLocation(city) {
        this.city = city;
    }
}

