import axios from 'axios'
import httpConfig from '@/app/config/http-config.json'
export const getCitiesByProvince = ({province}) => {
    return axios.get(`/${province}`, {
        headers:httpConfig.headers
    })
}

export const getProvinces = () => {
    return axios.get(`/provinces`, {
        headers:httpConfig.headers
    })
}