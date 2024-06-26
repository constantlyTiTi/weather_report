import React from 'react'
import WeatherTemperatureBox from '@/app/components/WeatherTemperatureBox'
import { getCityByCityId } from '@/app/api/cityApi'
import { getCurrentWeatherData } from '@/app/api/weatherApi'
import MetegramChart from '@/app/components/MetegramChart'

export default async function WeatherDisplayCanvas({ city }) {

  let weatherInfo = null
  if (city?._id) {
    
    const cityInfoRepData = await getCityByCityId({ "city_id": city._id })
    const cityInfo = cityInfoRepData?.data?.data?.getLocation
    weatherInfo = await getCurrentWeatherData({ lon: cityInfo.location[0], lat: cityInfo.location[1] })
  }
  if (city?.location?.length > 1) weatherInfo = await getCurrentWeatherData({ lon: city.location[0], lat: city.location[1] })
    
  return (
    !!weatherInfo ?
    <div className='flex flex-wrap w-full justify-center'>
      <WeatherTemperatureBox weatherInfo={weatherInfo?.data} cityName={city.name} /> 
      <MetegramChart weatherInfo={weatherInfo?.data} cityName={city.name}/>
      </div>: null
  );
}