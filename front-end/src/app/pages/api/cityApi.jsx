import axios from 'axios'
import httpConfig from '@/app/config/http-config.json'
export const getCitiesByProvince = ({province}) => {
    const requestBody =`query getCitiesByProvince {
    getCitiesByProvince(state:${province}){
        _id,
        name,
        address{
            state,
            country
        },
        location
    }
}`
    
        return axios.post(BACKEND_URL, requestBody)
}

export const getCityByCityId = ({city_id}) => {
    const requestBody =`query getLocation {
        getLocation(city_id:${city_id}){
            _id,
            name,
            address{
                state,
                country
            },
            location
        }
    }`
    
        return axios.post(BACKEND_URL, requestBody)
}


export const getProvinces = () => {

    const requestBody =`query getProvinces {
    getProvinces{
        _id,
        name,
        address{
            state,
            country
        },
        location
    }
}`

    return axios.post(BACKEND_URL, requestBody)
}