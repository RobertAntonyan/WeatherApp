import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Info from './components/Info/Info';
import Wheather from './components/Wheather/Wheather';
import conditions from './condition.json'
import axios from 'axios';


function App() {
  
  const API_KEY = 'c9084a0052d84e4b954191106232107';
  const [wheatherData, setWheatherData] = useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    pressure: undefined,
    description: undefined,
    wind: undefined,
    language: undefined,
    code: undefined,
    icon: undefined,
    date: undefined,
    is_day:undefined,
    day:undefined,
    night: undefined,
    error: undefined,
  })
 const [data, setData] = useState([])
 const city = undefined
 useEffect(() => {
   axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Yerevan`)
   .then((response) => {
   
    setData(response.data)
    })
   
  },[])
  // console.log(data);
 const gettingWheather = async (event) => {
   event.preventDefault();
   const city = event.target.elements.city.value.trim();
   if (city) {
      // const api_url = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
       // const data = await api_url.json();
      const itemInfo = conditions.find(el => el.code === data.current.condition.code)
      const iconCode = data.current.condition.icon.slice(-7,-4)
      const date = data.location.localtime.slice(0,-5)
      //  console.log(api_url);
      setWheatherData({
        temp_c: Math.round(data.current.temp_c),
        city: data.location.name,
        country: data.location.country,
        text: data.current.condition.text,
        code:data.current.condition.code,
        language: itemInfo.languages,
        icon: iconCode,
        date: date,
        is_day: data.current.is_day,
        day: itemInfo.day,
        night: itemInfo.night,
        wind: data.current.wind_mph,
        error: ""
      })
      event.target.value = ''
    }
    else {
      setWheatherData({
        temp_c: undefined,
        city: undefined,
        country: undefined,
        day: undefined,
        date:undefined,
        is_day: undefined,
        night:undefined,
        month: undefined,
        wind: undefined,
        code:undefined,
        language: undefined,
        icon: undefined,
        error: "Enter the name of the city",
      })
    }
  }

  return (
    <div className="App">
      <Info  {...wheatherData}/>
      <Form wheatherMethod={gettingWheather}  />
      <Wheather {...wheatherData} />
    </div>
  );
}

export default App;
