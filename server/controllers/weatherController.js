const axios = require('axios');
const { search } = require('../routes/weatherRouters');
const { getCityCoord, getWeatherByCoord } = require('../services/ApiRequests')


const getWeather = async (req, res) => {
    try {
        const searchCity = req.query.city
        const coord = await getCityCoord(searchCity);
        const dailyWeather = await getWeatherByCoord(coord);

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