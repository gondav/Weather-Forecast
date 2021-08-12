class Storage {
    constructor() {
        this.city;
        this.defaultCity = 'Budapest';
    }

    // Fetch location from local storage
    getStorage() {
        if(!localStorage.getItem('city')) {
            this.city = this.defaultCity
        }
        else {
            this.city = localStorage.getItem('city');
        }

        return {
            city: this.city
        }
    }

    // Store location in local storage
    setStorage(city) {
        localStorage.setItem('city', city);
    }
}