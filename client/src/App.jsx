import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getWeather } from './store/weather/weatherSlice';

import CardWeather from "./components/CardWeather";
import SearchBar from "./components/SearchBar";
import CardDay from './components/CardDay';
import CardsWrapper from './components/CardsWrapper';


function App() {
  const dispatch = useDispatch();
  const { weatherCity, isLoading } = useSelector((state) => state.weather);
  const [location, setLocation] = useState('')


  useEffect(() => {
    dispatch(getWeather(location));
    console.log(weatherCity);

  }, [dispatch]);
  
  return (
    <div className='container text-center '>
    <SearchBar />
      <CardsWrapper>
        <CardWeather />

        <CardDay />
        <CardDay />
        <CardDay />
      </CardsWrapper>
    </div>
  );
}

export default App;
