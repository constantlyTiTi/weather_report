'use client'
import React, { useState, useContext, useEffect } from 'react'
import { SearchResultContext } from '../context/createContext'
import { getProvinces, getCities } from '../api/cityApi'

const AddressCombobox = () => {

  const { setSelectCityInfo } = useContext(SearchResultContext)
  const [selectedCity, setSelectedCity] = useState('')
  const [isOpenDropDown, setIsOpenDropDown] = useState(false)
  const [selectProv, setSelectProv] = useState()
  const [provinces, setProvinces] = useState()
  const [cityOptionsByProv, setCityOptionsProv] = useState()
  const [allCities, setAllCities] = useState()
  const [isTyping, setIsTyping] = useState()
  const [filteredCity, setFilteredCity] = useState()

  useEffect(() => {
    getProvinces().then(res => setProvinces(res?.data?.data?.getProvinces)).catch(err => console.log(err))
    getCities().then(res => setAllCities(res?.data?.data?.getCities)).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (!!cityOptionsByProv && cityOptionsByProv.length > 0) {

      const filtered = selectedCity === ''
        ? cityOptionsByProv
        : cityOptionsByProv.filter((option) => {
          return option.name.toLowerCase().startsWith(selectedCity.toLowerCase())
        })
      setFilteredCity(filtered)
    }

    if (!!allCities && allCities.length > 0 && isTyping) {

      const filtered = !!selectedCity ? allCities.filter((option) => {
        return option.name.toLowerCase().startsWith(selectedCity.toLowerCase())
      }) : filteredCity

      setFilteredCity(filtered)
    }
  }, [selectedCity, cityOptionsByProv,allCities])


  const onBlur = () => {
    setIsOpenDropDown(false)
  }

  const setSelectedCityAndUpdateInput = (e, item) => {
    setIsOpenDropDown(true)
    setSelectedCity(item.name)
    setIsOpenDropDown(false)
  }

  const setSelectedProvinceAndUpdateInput = (e, prov) => {
    console.log('setSelectedProvinceAndUpdateInput',e.target.value)
    e.preventDefault()
    setIsOpenDropDown(true)
    setSelectProv(prov)
    let cityOptions = prov && allCities.filter(city => city.address.state === prov)
    setCityOptionsProv(cityOptions)
  }

  const backToCountry = (e) => {

    e.preventDefault()
    setIsOpenDropDown(true)
    setSelectProv(null)
    setSelectedCity('')
  }

  const clickToSearch = () => {
    const city = allCities.find(option => option.name.toLowerCase().startsWith(selectedCity.toLowerCase()))

    !!city && setSelectCityInfo(city)


  }

  const inputOnChange = (event) => {
    setSelectedCity(event.target.value)

    if (event.target.value) {
      setIsTyping(true)
    } else {
      setIsTyping(false)
    }

  }

  return (
    <div className="relative" onBlur={onBlur}>
      <input value={selectedCity} onChange={inputOnChange} onClick={() => setIsOpenDropDown(!isOpenDropDown)} className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="search" placeholder="Search" />
      <button onClick={clickToSearch} className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
        </svg>
      </button>
      {
        isOpenDropDown ?
          <div className='absolute left-0 py-2 w-full bg-white px-2'>
            <h5 className='py-2 font-semibold text-sm leading-6 text-gray-900'>Please choose a {!!selectProv || isTyping ? 'city' : 'province'}</h5>
            {!!selectProv && !isTyping ?
              <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onMouseDown={backToCountry}>back to province</div> : null
            }
            {
              !!selectProv || isTyping ? !!filteredCity &&
                <div className='grid grid-cols-2 gap-1 py-2'>
                  {filteredCity.map((item, index) => (
                    <div className="text-sm border border-gray-300 my-1 w-full hover:bg-gray-300 text-center" key={`${item.name}-${index}`} onMouseDown={(e) => setSelectedCityAndUpdateInput(e, item)}>{item.name}</div>
                  ))}
                </div> :
                <div className='py-2'>
                  {
                    !!provinces && provinces.map((item) => (
                      <div className="text-sm border border-gray-300 my-2 w-full hover:bg-gray-300 text-center" key={`${item}-prov`}  onMouseDown={(e) => setSelectedProvinceAndUpdateInput(e, item)}>{item}</div>
                    ))}</div>

            }
          </div> : null
      }
    </div>
  )
}

export default AddressCombobox