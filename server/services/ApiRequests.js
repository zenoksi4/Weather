const axios = require('axios')

const getCityCoord = async (searchCity) => {

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=dd0571132b01e94f7bc71ef87e192efc`);
    
    return response.data.coord

}

const getWeatherByCoord = async (coord) => {
    const response = await axios.get(`https://openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`);

    return response.data.daily
}

module.exports = {
    getCityCoord,
    getWeatherByCoord
}