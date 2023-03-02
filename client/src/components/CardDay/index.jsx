import styles from './styles.module.css'

const dayWeatherBox = {
    border: "1px solid #28688C",
    backgroundColor: "#2E7FA1",
    borderRadius: "5px",
    height: "10em",
}

function CardDay({
        weather,
        index,
        activeDay,
        setActiveDay,
    }) {
    
    const dayWeek = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date(weather.date * 1000))

    return (
        <div 
            className={`col-md-3 col-sm-6 ${activeDay === index ? styles.active: styles.cardDay}`} 
            style={dayWeatherBox} 
            onClick = {() => setActiveDay(index)}
        >
            <div className="col-sm-12">
                <div className="col-sm-12" >
                <img alt='' src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} style={{width:'55px'}}/>
                    <div>
                        <p style={{marginBottom: 0}}>{dayWeek}</p>
                        <h5>{weather.temp_day}°</h5>
                    </div>
                </div>
                <div className="col-12 row container" style={{margin: 0}}>
                    <p className="col-6" style={{margin: 0}}>min: {weather.temp_min}°</p>
                    <p className="col-6" style={{margin: 0}}>max: {weather.temp_max}°</p>
                </div>
            </div>
        </div>

    );
}

export default CardDay;