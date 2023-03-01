const axios = require('axios');

const { getCityCoord, getWeatherByCoord } = require('../services/ApiRequests');
const { listDailyWeather } = require('../services/listWeather');


const getWeather = async (req, res) => {
    try {
        const searchCity = req.query.city
        const coord = await getCityCoord(searchCity);
        const dailyWeatherApi = await getWeatherByCoord(coord);
        const dailyWeather = listDailyWeather(dailyWeatherApi);

        res.status(200).json(
            {   
                city: searchCity,
                weather: dailyWeather
            })
        
    } catch (error) {
        res.status(500).json({ message: "Failed to get weather: " + error})
    }
}



module.exports = {
    getWeather
}