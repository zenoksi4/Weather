const dayWeatherBox = {
    border: "1px solid #28688C",
    backgroundColor: "#2E7FA1",
    borderRadius: "5px",
    height: "10em",
}

function CardDay() {

  return (
    <div className="col-md-3 col-sm-6" style={dayWeatherBox}>
        <div className="col-sm-12" >
            <div className="col-sm-12" >
            <img alt='' src='https://openweathermap.org/img/wn/03d@2x.png' style={{width:'55px'}}/>
                <div>
                    <p style={{marginBottom: 0}}>Thu</p>
                    <h5>3°</h5>
                </div>
            </div>
            <div className="col-12 row container" style={{margin: 0}}>
                <p className="col-6">min 4°</p>
                <p className="col-6">max -1°</p>
            </div>
        </div>
    </div>
  );
}

export default CardDay;