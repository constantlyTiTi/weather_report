import axios from 'axios'
import { WEATHER_CURRENT_BASE } from '@/app/const/urls'

const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export const getCurrentWeatherData = ({ lon, lat }) => {


    return axios.get(`${WEATHER_CURRENT_BASE}lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`)

}


