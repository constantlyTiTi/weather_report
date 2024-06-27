
import React from "react";
import { GET_WEATHER_ICON } from '@/app/const/urls'

const WeatherTemperatureBox = ({ weatherInfo,cityName }) => {

    const { current } = weatherInfo
    const { temp, feels_like, humidity, wind_speed, sunrise, sunset, weather } = current
    const dateTime = new Date().toLocaleString()

    const sunriseLocalDateTime = new Date(sunrise * 1000).toLocaleString()
    const sunriseDateTime = sunriseLocalDateTime.split(" ")[1] + " " + sunriseLocalDateTime.split(" ")[2]
    const sunsetLocalDateTime = new Date(sunset * 1000).toLocaleString()
    const sunsetDateTime = sunsetLocalDateTime.split(" ")[1] + " " + sunsetLocalDateTime.split(" ")[2]

    const twoDecimal = (num) => {
        return Math.round((num + Number.EPSILON) * 100) / 100;
    }

    const celTemp = twoDecimal((temp - 273.15))
    const celFeel_like = twoDecimal((feels_like - 273.15))


    return (
        <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="my-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{cityName}</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{dateTime}</p>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <div>Temperature</div>
                    <div>{celTemp} °C</div>
                </div>
                <div>
                    <div>wind speed</div>
                    <div>{wind_speed} </div>
                </div>
                <div>
                    <div>Feels like</div>
                    <div>{celFeel_like}</div>
                </div>
                <div>
                    <div>Humidity</div>
                    <div>{humidity}</div>
                </div>
            </div>
            <div className="flex my-4">

                <div className="border border-gray-200 p-5">
                    <h5 className='text-center'>Sunrise</h5>
                    <div className="mt-3">
                        <svg className='justify-center' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 64 64">
                            <radialGradient id="RbJnniKIjDo23wwJ9NBMca_119011_gr1" cx="32" cy="32" r="31.016" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#afeeff"></stop><stop offset=".193" stopColor="#bbf1ff"></stop><stop offset=".703" stopColor="#d7f8ff"></stop><stop offset="1" stopColor="#e1faff"></stop></radialGradient><path fill="url(#RbJnniKIjDo23wwJ9NBMca_119011_gr1)" d="M59,20h1.5c2.168,0,3.892-1.998,3.422-4.243C63.58,14.122,62.056,13,60.385,13L56,13 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h0.385c1.67,0,3.195-1.122,3.537-2.757C60.392,3.998,58.668,2,56.5,2H34.006H32.5h-26 C4.575,2,3,3.575,3,5.5S4.575,9,6.5,9H8c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2l-3.385,0c-1.67,0-3.195,1.122-3.537,2.757 C0.608,18.002,2.332,20,4.5,20H18v13L3.615,33c-1.67,0-3.195,1.122-3.537,2.757C-0.392,38.002,1.332,40,3.5,40H5 c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2H4.5c-2.168,0-3.892,1.998-3.422,4.243C1.42,49.878,2.945,51,4.615,51H8 c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2l-1.385,0c-1.67,0-3.195,1.122-3.537,2.757C2.608,60.002,4.332,62,6.5,62h24.494H32.5h24 c1.925,0,3.5-1.575,3.5-3.5S58.425,55,56.5,55H56c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h4.385c1.67,0,3.195-1.122,3.537-2.757 C64.392,45.998,62.668,44,60.5,44H47V31h12.385c1.67,0,3.195-1.122,3.537-2.757C63.392,25.998,61.668,24,59.5,24H59 c-1.105,0-2-0.895-2-2C57,20.895,57.895,20,59,20z"></path><linearGradient id="RbJnniKIjDo23wwJ9NBMcb_119011_gr2" x1="32" x2="32" y1="52" y2="12" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#ff9757"></stop><stop offset="1" stopColor="#ffb65b"></stop><stop offset="1" stopColor="#ffb65b"></stop></linearGradient><path fill="url(#RbJnniKIjDo23wwJ9NBMcb_119011_gr2)" d="M12,12h40v40H12V12z"></path><linearGradient id="RbJnniKIjDo23wwJ9NBMcc_119011_gr3" x1="32" x2="32" y1="60" y2="4" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#ff9757"></stop><stop offset="1" stopColor="#ffb65b"></stop><stop offset="1" stopColor="#ffb65b"></stop></linearGradient><path fill="url(#RbJnniKIjDo23wwJ9NBMcc_119011_gr3)" d="M4,32L32,4l28,28L32,60L4,32z"></path><linearGradient id="RbJnniKIjDo23wwJ9NBMcd_119011_gr4" x1="32" x2="32" y1="56.713" y2="22.713" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#feaa53"></stop><stop offset=".612" stopColor="#ffcd49"></stop><stop offset="1" stopColor="#ffde44"></stop></linearGradient><path fill="url(#RbJnniKIjDo23wwJ9NBMcd_119011_gr4)" d="M15,32c0,9.393,7.607,17,17,17c9.387,0,17-7.607,17-17s-7.613-17-17-17 C22.607,15,15,22.607,15,32"></path>
                        </svg>
                    </div>
                    <p className="mb-3 mt-5 font-normal text-gray-500 dark:text-gray-400">{sunriseDateTime}</p>
                </div>

                <div className="border border-gray-200 p-5">
                    <h5 className='text-center'>Sunrise</h5>
                    <div className="mt-3">
                        <img src='/sunset-svgrepo-com.svg' />
                    </div>
                    <p className="mb-3 mt-5 font-normal text-gray-500 dark:text-gray-400">{sunsetDateTime}</p>
                </div>

            </div>

            <div className="flex my-4">
                {
                    !!weather && weather.length > 0 ? weather.map(item => (
                        <div key={`${item}-div`} className="border border-gray-200">
                            <h5 key={`${item}-h5`} className='text-center'>{item.main}</h5>
                            <img key={`${item}-img`} src={`${GET_WEATHER_ICON}${item.icon}@2x.png`} />
                        </div>
                    )) : null
                }

            </div>
        </div>

    )
}

export default WeatherTemperatureBox
