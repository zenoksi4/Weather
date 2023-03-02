

const listDailyWeather = (dailyWeather) => {

    const listWeather = dailyWeather.map(weather => {
        return {
            date: weather.dt,
            temp_day: Math.round(weather.temp.day),
            temp_min: Math.round(weather.temp.min),
            temp_max: Math.round(weather.temp.max),
            feels_like: Math.round(weather.feels_like.day),
            humidity: weather.humidity,
            wind_speed: weather.wind_speed,
            desc:  weather.weather[0].description,
            icon:  weather.weather[0].icon
        }
    })

    return listWeather;
}

module.exports = {
    listDailyWeather
}