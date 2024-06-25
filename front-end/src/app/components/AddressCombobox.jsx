'use client'
import React, { useState,useRef } from 'react'
// import { Loader } from '@googlemaps/js-api-loader';

const AddressCombobox = ({ options }) => {

  const [selectedCity, setSelectedCity] = useState('')
  const [isOpenDropDown, setIsOpenDropDown] = useState(false)
  const inputRef = useRef()


  let filteredCity = []

  let filteredCityMock = [
    {
      id:1,
      city:'aaaa1'
    },
    {
      id:2,
      city:'aaaa2'
    },
    {
      id:3,
      city:'aaaa3'
    },
    {
      id:4,
      city:'aaaa4'
    },
    {
      id:5,
      city:'aaaa5'
    },
    {
      id:6,
      city:'aaaa6'
    },
    {
      id:7,
      city:'aaaa7'
    },
  ]

  filteredCity = selectedCity === ''
  ? filteredCityMock
  : filteredCityMock.filter((option) => {
    return option.city.toLowerCase().includes(selectedCity.toLowerCase())
  })

  if (!!options && options.length > 0) {
    filteredCity = query === ''
      ? options
      : options.filter((option) => {
        return option.toLowerCase().includes(query.toLowerCase())
      })
  }

  const onBlur = () => {
    setIsOpenDropDown(false)
  }

  const setSelectedCityAndUpdateInput = (item)=>{
    inputRef.current.focus()
    setSelectedCity(item.city)
  }

  return (
    <>
      <div className="relative">
        <input ref={inputRef} onBlur={onBlur} value={selectedCity} onChange={(event)=> setSelectedCity(event.target.value)} onClick={() => setIsOpenDropDown(!isOpenDropDown)} className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="search" placeholder="Search" />
        <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
          </svg>
        </button>
        {
          isOpenDropDown ? <div className='absolute left-0 py-2 w-full bg-white px-2'>
            <h5 className='py-2 font-semibold text-sm leading-6 text-gray-900'>Please choose a city</h5>
            <div className='grid grid-cols-4 gap-4 '>
            {filteredCity.map((item)=>(
              <div key={item.city} onMouseDown={()=>setSelectedCityAndUpdateInput(item)}>{item.city}</div>
            ))}
          </div></div> : null
        }
        
      </div>
    </>
  )
}

export default AddressCombobox