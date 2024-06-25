'use client'

import { SearchResultContext } from "./context/createContext"
import { useState } from "react"

const Provider = ({children}) => {

    const [weatherInfo, setWeatherInfo] = useState({

    })

    return (
        <SearchResultContext.Provider value={{weatherInfo, setWeatherInfo}}>
            {children}
        </SearchResultContext.Provider>
    )
}

export default Provider