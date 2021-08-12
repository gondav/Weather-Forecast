class Forecast {
    constructor(lon, lat) {
        this.longitude = lon;
        this.latitude = lat;
        this.apiKey = '7ef71d9181c6507391becb6fc15eca21';
    }

    // Fetch weather forecast from API
    async fetchForecast() {
        const responseForecast = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude={minutely}&appid=${this.apiKey}`);

        const responseDataForecast = await responseForecast.json();

        return responseDataForecast;
    }
}