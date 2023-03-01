import axios from 'axios'

const getWeather = async () => {
    const weather = await axios.get('/weather');

    return weather.data;
}

const weatherService = {
    getWeather
}

export default weatherService;