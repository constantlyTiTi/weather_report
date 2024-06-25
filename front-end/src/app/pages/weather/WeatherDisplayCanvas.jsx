import React from 'react'
import WeatherTemperatureBox from '@/app/components/WeatherTemperatureBox'
import {getCityByCityId} from '@/app/pages/api/cityApi'
import {getCurrentWeatherData} from '@/app/pages/api/weatherApi'

export default async function WeatherDisplayCanvas({city_id }) {

  // const cityInfo = await getCityByCityId(city_id)
  const weatherInfo = await getCurrentWeatherData({lon:-123.0737925,lat:49.3206294})

  console.log(weatherInfo)


  return (
    !!weatherInfo ?
      <WeatherTemperatureBox weatherInfo={weatherInfo.data} /> : null
  
  );
}