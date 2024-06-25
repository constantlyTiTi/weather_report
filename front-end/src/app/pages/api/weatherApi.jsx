import axios from 'axios'
import {WEATHER_CURRENT_BASE, GET_WEATHER_ICON} from '@/app/const/urls'
import httpConfig from '@/app/config/http-config.json'

const WEATHER_API_KEY = process.env.WEATHER_API_KEY

export const getCurrentWeatherData = ({lon,lat}) => {
    console.log("axio")
    return axios.get(`${WEATHER_CURRENT_BASE}lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
}

// export const getCurrentWeatherIcon = ({iconCode}) => {
//     return axios.get(`${GET_WEATHER_ICON}${iconCode}@2x.png`)
// }

