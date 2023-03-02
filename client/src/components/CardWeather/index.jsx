
function CardWeather({city, weather}) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Intl.DateTimeFormat("en-US", options).format(new Date(weather.date * 1000))

    return (
        <>

            <div className="col-md-4 col-sm-5">
                <h5>{city}</h5>
                <h6>{date}</h6>

                <img alt='' src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} style={{width:'155px', marginLeft: "5px"}}/>
            </div>

            <div className="col-md-5 col-sm-7" style={{margin: "10px auto", padding: "0"}}>
                <div className="row">
                <p style={{paddingLeft: '45px',fontSize: "1.5rem", margin: '0'}}>°C </p>
                <span style={{fontSize: '5.5rem', lineHeight: '0.7'}}>{weather.temp_day}</span>
                <p style={{marginTop: '10px', textAlign: 'center'}}>{weather.desc}</p>

                </div>
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-3 row" style={{textAlign: "right"}}>
                <div className="col-md-12 col-sm-3 col-xs-3 side-weather-info">
                <h6>Humidity: {weather.humidity}%</h6>
                </div>
                <div className="col-md-12 col-sm-3 col-xs-3" style={{padding: '0 10px'}}>
                <h6>Wind: {weather.wind_speed}m/s</h6>
                </div>
                <div className="col-md-12 col-sm-3 col-xs-3" style={{padding: '0 10px'}}>
                <h6>High: {weather.temp_max}°</h6>
                </div>
                <div className="col-md-12 col-sm-3 col-xs-3" style={{padding: '0 10px'}}>
                <h6>Low: {weather.temp_min}°</h6>
                </div>
                <div className="col-md-12 col-sm-3 col-xs-3" style={{padding: '0 10px'}}>
                <h6>feels like: {weather.feels_like}°</h6>
                </div>
            </div>

        </>
    );
}

export default CardWeather;