'use client'
import React, { useState, useContext } from 'react'
// import { Loader } from '@googlemaps/js-api-loader';
import { SearchResultContext } from '../context/createContext'
import {getCurrentWeatherData} from '../pages/api/weatherApi'
import {getProvinces, getCitiesByProvince} from '../pages/api/cityApi'

const AddressCombobox = ({ options }) => {

  const {setWeather} = useContext(SearchResultContext)
  const [selectedCity, setSelectedCity]  = useState('')
  const [isOpenDropDown, setIsOpenDropDown] = useState(false)
  const [selectProv, setSelectProv] = useState()
  const [provinces, setProvinces] = useState(["on"])
  // const inputRef = useRef()

  // getProvinces().then(res=> setProvinces(res.data)).catch(err => console.log(err))

  let filteredCity = []

  let filteredCityMock = [
    {
      _id:1,
      name:'aa1',
      address:{
          state: 'on',
          country:'ca'
      },
      location:[-123.0737925,49.3206294]
    }
  ]

  filteredCity = selectedCity === '' || selectedCity === undefined
  ? filteredCityMock
  : filteredCityMock.filter((option) => {
    return option.name.toLowerCase().includes(selectedCity.toLowerCase())
  })

  if (!!options && options.length > 0) {
    filteredCity = query === ''
      ? options
      : options.filter((option) => {
        return option.name.toLowerCase().includes(query.toLowerCase())
      })
  }

  const onBlur = () => {
    setIsOpenDropDown(false)
  }

  const setSelectedCityAndUpdateInput = (e,item)=>{
    // inputRef.current.focus()
    // e.preventDefault()
    setSelectedCity(item.name)
  }

  const setSelectedProvinceAndUpdateInput = (e,prov)=>{
    // inputRef.current.focus()
    e.preventDefault()
    setIsOpenDropDown(true)
    setSelectProv(prov)
  }

  
  const backToCountry = (e) => {
    // inputRef.current.focus()
    e.preventDefault()
    setIsOpenDropDown(true)
    setSelectProv('')
  }

  const clickToSearch = () => {

    if(filteredCityMock.includes(s=>s.name===selectedCity)){
      const city = filteredCityMock.find(s=>s.name === selectedCity)
      getCurrentWeatherData({lat:city.location[0],lon:city.location[1]})
      .then(
        res=> setWeather(res.data)
      )
      .catch( error =>
        console.log(error)
      )
    }
    
  }

  return (
    <>
      <div className="relative" onBlur={onBlur}>
        <input value={selectedCity} onChange={(event)=> setSelectedCity(event.target.value)} onClick={() => setIsOpenDropDown(!isOpenDropDown)} className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="search" placeholder="Search" />
        <button onClick={clickToSearch} className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
          </svg>
        </button>
        {
          isOpenDropDown ? <div className='absolute left-0 py-2 w-full bg-white px-2'>
            <h5 className='py-2 font-semibold text-sm leading-6 text-gray-900'>Please choose a {!!selectProv ? 'country': 'province'}</h5> 
            {!!selectProv?
            <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onMouseDown={backToCountry}>back to country</div>: null
           
            }
            <div className='grid grid-cols-4 gap-4 py-2'>
            {!!selectProv ? !!filteredCity && filteredCity.map((item)=>(
              <div key={item.name} onMouseDown={(e)=>setSelectedCityAndUpdateInput(e,item)}>{item.name}</div>
            )) : !!provinces && provinces.map((item)=>(
              <div key={item} onMouseDown={(e)=>setSelectedProvinceAndUpdateInput(e,item)}>{item}</div>
            ))}
          </div></div> : null
        }
        
      </div>
    </>
  )
}

export default AddressCombobox