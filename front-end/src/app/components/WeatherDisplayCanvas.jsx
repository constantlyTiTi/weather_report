import React from 'react'
import WeatherTemperatureBox from '@/app/components/WeatherTemperatureBox'
import { getCityByCityId } from '@/app/api/cityApi'
import { getCurrentWeatherData } from '@/app/api/weatherApi'

export default async function WeatherDisplayCanvas({ city }) {

  let weatherInfo = null
  if (city?.location?.length < 2) {
    const cityInfo = await getCityByCityId({ "city_id": city._id })
    weatherInfo = await getCurrentWeatherData({ lon: cityInfo.location[0], lat: cityInfo.location[1] })
  }
  if (city?.location?.length > 1) weatherInfo = await getCurrentWeatherData({ lon: city.location[0], lat: city.location[1] })
    console.log("city",city)
  return (
    !!weatherInfo ?
      <WeatherTemperatureBox weatherInfo={weatherInfo?.data} cityName={!!city.name ? city.name : "Your Current City"} /> : null

  );
}