import React, {useState} from 'react';
import axios from 'axios';
import { MainWeaterProperties }  from './components/WeatherPropDisplay';
import { WeatherDataProps } from '../src/components/types/types';
import { WeatherDataProps_Pattern } from '../src/components/types/types_patterns'

function App() {
  const [data, setData] = useState<WeatherDataProps>(WeatherDataProps_Pattern);
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=702ff3e1f94d8569e076bb32532490b4`; /*must use `` expect "" or ''*/

  const searchLocation = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {  
        setData(response.data)
      })
      setLocation('')
    }
  }

  return (
    <MainWeaterProperties
      data = { data }
      //  main, temp, weather, description, feels_like, humidity, wind, wind_speed
      location = { location }
      searchLocation = { searchLocation }
      setLocation = { setLocation }
    />
  );
}

export default App;
