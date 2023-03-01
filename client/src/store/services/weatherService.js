import axios from 'axios'

const getWeather = async () => {
    const weather = await axios.get(`http://localhost:5000/weather?city=kyiv`);

    return weather.data;
}

const weatherService = {
    getWeather
}

export default weatherService;