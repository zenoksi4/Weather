import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getWeather } from './store/weather/weatherSlice';

import CardWeather from "./components/CardWeather";
import SearchBar from "./components/SearchBar";

function App() {
  const dispatch = useDispatch();
  const { weather, isLoading } = useSelector((state) => state.weather);
  const [location, setLocation] = useState('')


  useEffect(() => {
    dispatch(getWeather(location));
  }, [dispatch]);
  
  return (
    <div className='container text-center '>
    <SearchBar />

    <CardWeather />
    </div>
  );
}

export default App;
