import CardDay from "../CardDay";

const wrapper = {
    backgroundColor:"#28688C",
    boxShadow: "1px 5px 25px 3px #444",
    borderRadius: "10px",
    margin: "100px auto",
    maxWidth: "720px",
    padding: "0px",
    color: "white",
}


function CardWeather() {

  return (
    <div className="container-fluid" style={wrapper}>
        <div className="row" style={{padding: "15px"}}>
        
            <div className="col-md-4 col-sm-5">
                <h5>Lviv</h5>
                <h6>Wednesday, March 1, 2023</h6>

                <img alt='' src='https://openweathermap.org/img/wn/03d@2x.png' style={{width:'155px', marginLeft: "5px"}}/>
            </div>

        <div className="col-md-5 col-sm-7" style={{margin: "10px auto", padding: "0"}}>
            <div className="row">
            <p style={{paddingLeft: '45px',fontSize: "1.5rem", margin: '0'}}>°C </p>
            <span style={{fontSize: '5.5rem', lineHeight: '0.7'}}>3</span>
            <p style={{marginTop: '10px', textAlign: 'center'}}>Few Clouds</p>

            </div>
        </div>
        
        <div className="col-xs-12 col-sm-12 col-md-3 row" style={{textAlign: "right"}}>
            <div className="col-md-12 col-sm-3 col-xs-3 side-weather-info">
            <h6>Humidity: 38 %</h6>
            </div>
            <div className="col-md-12 col-sm-3 col-xs-3" style={{padding: '0 10px'}}>
            <h6>Wind: 3.14 m/s</h6>
            </div>
            <div className="col-md-12 col-sm-3 col-xs-3" style={{padding: '0 10px'}}>
            <h6>High: 4 °</h6>
            </div>
            <div className="col-md-12 col-sm-3 col-xs-3" style={{padding: '0 10px'}}>
            <h6>Low: -2 °</h6>
            </div>
            <div className="col-md-12 col-sm-3 col-xs-3" style={{padding: '0 10px'}}>
            <h6>feels like: -2 °</h6>
            </div>
        </div>


            <div className="container-fluid">
                <div className="row" >
                    <CardDay />
                    <CardDay />
                    <CardDay />
                    <CardDay />
                    <CardDay />
                </div>
            </div>

        </div>
    </div>

  );
}

export default CardWeather;