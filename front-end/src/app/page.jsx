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

        console.log("selectCityInfo1111", selectCityInfo)

        if (!selectCityInfo || selectCityInfo === undefined || selectCityInfo._id === undefined) {
          console.log("selectCityInfo222", selectCityInfo)
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
