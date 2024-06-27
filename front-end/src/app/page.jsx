'use client'
import React, { useContext, useEffect } from 'react'
import WeatherDisplayCanvas from '@/app/components/WeatherDisplayCanvas'
import { SearchResultContext } from '@/app/context/createContext'
import { DEFAULT_CITY } from './const/urls'

const Home = (props) => {
  const { selectCityInfo, setSelectCityInfo } = useContext(SearchResultContext)

  useEffect(()=>{
    if(!selectCityInfo)
      setSelectCityInfo(DEFAULT_CITY)
  },[])

  return selectCityInfo ? <WeatherDisplayCanvas city={selectCityInfo} />
    : null
}

export default Home
