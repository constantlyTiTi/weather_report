import axios from 'axios'
import httpConfig from '@/app/config/http-config.json'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
export const getCitiesByProvince = (province ) => {
    const requestBody = `query getCitiesByProvince {
    getCitiesByProvince(state:"${province}"){
        _id,
        name,
        address{
            state,
            country
        },
        location
    }
}`

    return axios({
        url: BACKEND_URL,
        method: 'post',
        data: {
            query: requestBody
        }
    })
}

export const getCityByCityId = ({ city_id }) => {
    const requestBody = `query getLocation {
        getLocation(city_id:"${city_id}"){
            _id,
            name,
            address{
                state,
                country
            },
            location
        }
    }`

    return axios({
        url: BACKEND_URL,
        method: 'post',
        data: {
            query: requestBody
        }
    })
}


export const getProvinces = () => {

    const requestBody = `query GetProvinces {
        getProvinces
    }`

    return axios({
        url: BACKEND_URL,
        method: 'post',
        data: {
            query: requestBody
        }
    })
}

export const getCities = () => {

    const requestBody = `query GetCities {
        getCities{
            _id,
            name,
            address{
                state,
                country
            },
            location
        }
    }`

    return axios({
        url: BACKEND_URL,
        method: 'post',
        data: {
            query: requestBody
        }
    })
}