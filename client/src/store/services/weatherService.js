import axios from 'axios'

const getWeather = async (location = '') => {

    if (!location) {
        const response = await axios.get(`https://ipapi.co/json`);
        location = response.data.city
        
      }

    const weather = await axios.get(`https://weather-xsao.onrender.com/weather?city=${location}`);

    return weather.data;
}

const weatherService = {
    getWeather
}

export default weatherService;