'use client'

import { SearchResultContext } from "./context/createContext"
import { useState } from "react"

const Provider = ({children}) => {

    const [city, setCity] = useState()

    return (
        <SearchResultContext.Provider value={{city, setCity}}>
            {children}
        </SearchResultContext.Provider>
    )
}

export default Provider