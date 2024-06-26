import axios from 'axios'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL


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