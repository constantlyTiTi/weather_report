'use client'
import React, { useContext, useEffect } from 'react'
import WeatherDisplayCanvas from '@/app/components/WeatherDisplayCanvas'
import { SearchResultContext } from '@/app/context/createContext'

const Home = () => {
  const { selectCityInfo, setSelectCityInfo } = useContext(SearchResultContext)

  useEffect(() => {
    navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) => {
        let isGeoPermit = permissionStatus.state === 'granted'

 

        if (!selectCityInfo || selectCityInfo._id === undefined) {
      
          !!isGeoPermit && navigator.geolocation.getCurrentPosition(pos => {
            setSelectCityInfo({
              location: [pos.coords.longitude, pos.coords.latitude]
            })
          })
        }
      });
  }, [])

  return selectCityInfo ? <WeatherDisplayCanvas city={selectCityInfo} />
    : null
}

export default Home