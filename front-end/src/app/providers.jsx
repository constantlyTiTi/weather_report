'use client'

import { SearchResultContext } from "./context/createContext"
import { useState } from "react"

const Provider = ({ children }) => {

    const [selectCityInfo, setSelectCityInfo] = useState()

    return (
        <SearchResultContext.Provider value={{ selectCityInfo, setSelectCityInfo }}>
            {children}
        </SearchResultContext.Provider>
    )
}

export default Provider