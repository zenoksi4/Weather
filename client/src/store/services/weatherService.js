import axios from 'axios'

const getWeather = async (location = '') => {

    if (!location) {
        const response = await axios.get(`https://ipapi.co/json`);
        location = response.data.city
        
      }

    const weather = await axios.get(`https://weather-production-bd00.up.railway.app/weather?city=${location}`);

    return weather.data;
}

const weatherService = {
    getWeather
}

export default weatherService;