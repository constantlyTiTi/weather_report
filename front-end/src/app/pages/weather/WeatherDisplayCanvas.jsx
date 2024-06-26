import React from 'react'
import WeatherTemperatureBox from '@/app/components/WeatherTemperatureBox'
import {getCityByCityId} from '@/app/pages/api/cityApi'
import {getCurrentWeatherData} from '@/app/pages/api/weatherApi'

export default async function WeatherDisplayCanvas({city_id }) {

  const cityInfo = await getCityByCityId(city_id)
  const weatherInfo = null
  if(cityInfo){
    weatherInfo = await getCurrentWeatherData({lon:cityInfo.location[0],lat:cityInfo.location[1]})
  }
  

  console.log(weatherInfo)


  return (
    !!weatherInfo ?
      <WeatherTemperatureBox weatherInfo={weatherInfo.data} /> : null
  
  );
}