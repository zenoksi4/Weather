import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getWeather } from './store/weather/weatherSlice';

import CardWeather from "./components/CardWeather";
import SearchBar from "./components/SearchBar";
import CardDay from './components/CardDay';
import CardsWrapper from './components/CardsWrapper';
import Loader from './components/Loader';
import Badge from 'react-bootstrap/Badge';
import NotFound from './components/NotFound';


function App() {
  const dispatch = useDispatch();
  const { weatherCity, isLoading } = useSelector((state) => state.weather);
  const [location, setLocation] = useState('')
  const [activeDay, setActiveDay] = useState(0)

  useEffect(() => {
    dispatch(getWeather(location));
  }, [dispatch, location]);
  
  return (
    <div className='container text-center '>

      <SearchBar setLocation={setLocation}/>

      {  
        !isLoading ?
          <div>
            {(weatherCity && weatherCity.weather) ?
              <CardsWrapper> 
                <CardWeather city={weatherCity.city} weather={weatherCity.weather[activeDay]} />
                {
                      weatherCity.weather.map((weather, index) => (
                      
                      <CardDay
                        weather={weather}
                        index={index}
                        activeDay={activeDay}
                        setActiveDay={setActiveDay}
                      />

                      ))
                }
              </CardsWrapper>:
              
            <NotFound />
            }
          </div>:
          <Loader />

      }

    </div>
  );
}

export default App;
