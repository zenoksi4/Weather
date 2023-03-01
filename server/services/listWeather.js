

const listDailyWeather = (dailyWeather) => {

    const listWeather = dailyWeather.map(weather => {
        return {
            date: weather.dt,
            temp_day: weather.temp.day,
            temp_min: weather.temp.min,
            temp_min: weather.temp.max,
            feels_like: weather.feels_like.day,
            humidity: weather.humidity,
            wind_speed: weather.wind_speed,
        }
    })

    return listWeather;
}

module.exports = {
    listDailyWeather
}