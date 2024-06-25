import React from "react";
import {getLatAndLonByCityId} from '@/app/pages/api/weatherApi'

const WeatherTemperatureBox = ({ city, temperature, weatherIcon, dateTime, wind_speed, feels_like, humidity }) => {

    const getWeatherInfor = async() =>{
        let promise = getLatAndLonByCityId(city)
    }

    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{city}</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{dateTime}</p>
            <div className="flex flex-col terms-center">
                <img src={weatherIcon} />
                <h3>{temperature}</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <div>wind speed</div>
                    <div>{wind_speed}</div>
                </div>
                <div>
                    <div>Feels like</div>
                    <div>{feels_like}</div>
                </div>
                <div>
                    <div>Humidity</div>
                    <div>{humidity}</div>
                </div>
            </div>
        </div>

    )
}

export default WeatherTemperatureBox