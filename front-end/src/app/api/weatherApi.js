import axios from 'axios'
import { WEATHER_CURRENT_BASE } from '@/app/const/urls'

const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export const getCurrentWeatherData = ({ lon, lat }) => {


    // return {
    //     data:{
    //         "lat": 33.44,
    //         "lon": -94.04,
    //         "timezone": "America/Chicago",
    //         "timezone_offset": -18000,
    //         "current": {
    //             "dt": 1719477282,
    //             "sunrise": 1719486517,
    //             "sunset": 1719538190,
    //             "temp": 295.99,
    //             "feels_like": 296.73,
    //             "pressure": 1011,
    //             "humidity": 92,
    //             "dew_point": 294.62,
    //             "uvi": 0,
    //             "clouds": 0,
    //             "visibility": 10000,
    //             "wind_speed": 1.54,
    //             "wind_deg": 20,
    //             "weather": [
    //                 {
    //                     "id": 800,
    //                     "main": "Clear",
    //                     "description": "clear sky",
    //                     "icon": "01n"
    //                 }
    //             ]
    //         },
    //         "minutely": [
    //             {
    //                 "dt": 1719477300,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719477360,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719477420,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719477480,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719477540,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719477600,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719477660,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719477720,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719477780,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719477840,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719477900,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719477960,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478020,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478080,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478140,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478200,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478260,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478320,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478380,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478440,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478500,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478560,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478620,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478680,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478740,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478800,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478860,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478920,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719478980,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479040,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479100,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479160,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479220,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479280,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479340,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479400,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479460,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479520,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479580,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479640,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479700,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479760,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479820,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479880,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719479940,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480000,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480060,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480120,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480180,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480240,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480300,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480360,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480420,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480480,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480540,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480600,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480660,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480720,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480780,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719480840,
    //                 "precipitation": 0
    //             }
    //         ],
    //         "hourly": [
    //             {
    //                 "dt": 1719475200,
    //                 "temp": 295.61,
    //                 "feels_like": 296.29,
    //                 "pressure": 1011,
    //                 "humidity": 91,
    //                 "dew_point": 294.07,
    //                 "uvi": 0,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.95,
    //                 "wind_deg": 28,
    //                 "wind_gust": 6.03,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719478800,
    //                 "temp": 295.99,
    //                 "feels_like": 296.73,
    //                 "pressure": 1011,
    //                 "humidity": 92,
    //                 "dew_point": 294.62,
    //                 "uvi": 0,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.93,
    //                 "wind_deg": 28,
    //                 "wind_gust": 5.62,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719482400,
    //                 "temp": 295.39,
    //                 "feels_like": 296.05,
    //                 "pressure": 1011,
    //                 "humidity": 91,
    //                 "dew_point": 293.85,
    //                 "uvi": 0,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.27,
    //                 "wind_deg": 37,
    //                 "wind_gust": 7.59,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719486000,
    //                 "temp": 294.69,
    //                 "feels_like": 295.25,
    //                 "pressure": 1011,
    //                 "humidity": 90,
    //                 "dew_point": 292.98,
    //                 "uvi": 0,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.93,
    //                 "wind_deg": 44,
    //                 "wind_gust": 6.07,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719489600,
    //                 "temp": 294.49,
    //                 "feels_like": 295.03,
    //                 "pressure": 1012,
    //                 "humidity": 90,
    //                 "dew_point": 292.78,
    //                 "uvi": 0.22,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.55,
    //                 "wind_deg": 25,
    //                 "wind_gust": 6.05,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719493200,
    //                 "temp": 295.87,
    //                 "feels_like": 296.39,
    //                 "pressure": 1012,
    //                 "humidity": 84,
    //                 "dew_point": 293.03,
    //                 "uvi": 0.95,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.19,
    //                 "wind_deg": 39,
    //                 "wind_gust": 8.68,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719496800,
    //                 "temp": 298.16,
    //                 "feels_like": 298.57,
    //                 "pressure": 1012,
    //                 "humidity": 71,
    //                 "dew_point": 292.65,
    //                 "uvi": 2.29,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 4.73,
    //                 "wind_deg": 54,
    //                 "wind_gust": 8.75,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719500400,
    //                 "temp": 300.48,
    //                 "feels_like": 301.58,
    //                 "pressure": 1012,
    //                 "humidity": 59,
    //                 "dew_point": 291.96,
    //                 "uvi": 4.02,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 4.6,
    //                 "wind_deg": 60,
    //                 "wind_gust": 6.88,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719504000,
    //                 "temp": 302.25,
    //                 "feels_like": 303.61,
    //                 "pressure": 1012,
    //                 "humidity": 55,
    //                 "dew_point": 292.31,
    //                 "uvi": 6.26,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 4.36,
    //                 "wind_deg": 60,
    //                 "wind_gust": 6.22,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719507600,
    //                 "temp": 303.84,
    //                 "feels_like": 305.26,
    //                 "pressure": 1012,
    //                 "humidity": 50,
    //                 "dew_point": 292.48,
    //                 "uvi": 7.99,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 4.07,
    //                 "wind_deg": 58,
    //                 "wind_gust": 5.49,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719511200,
    //                 "temp": 304.96,
    //                 "feels_like": 306.5,
    //                 "pressure": 1011,
    //                 "humidity": 47,
    //                 "dew_point": 292.42,
    //                 "uvi": 9.28,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.77,
    //                 "wind_deg": 63,
    //                 "wind_gust": 5.03,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719514800,
    //                 "temp": 306.17,
    //                 "feels_like": 307.64,
    //                 "pressure": 1010,
    //                 "humidity": 43,
    //                 "dew_point": 291.94,
    //                 "uvi": 9.43,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.24,
    //                 "wind_deg": 58,
    //                 "wind_gust": 4.5,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719518400,
    //                 "temp": 306.78,
    //                 "feels_like": 307.95,
    //                 "pressure": 1009,
    //                 "humidity": 40,
    //                 "dew_point": 291.54,
    //                 "uvi": 7.6,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.05,
    //                 "wind_deg": 62,
    //                 "wind_gust": 4.36,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719522000,
    //                 "temp": 307.26,
    //                 "feels_like": 308.27,
    //                 "pressure": 1009,
    //                 "humidity": 38,
    //                 "dew_point": 291.15,
    //                 "uvi": 6.15,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.84,
    //                 "wind_deg": 63,
    //                 "wind_gust": 4.05,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719525600,
    //                 "temp": 307.33,
    //                 "feels_like": 308.38,
    //                 "pressure": 1009,
    //                 "humidity": 38,
    //                 "dew_point": 290.99,
    //                 "uvi": 3.92,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.86,
    //                 "wind_deg": 62,
    //                 "wind_gust": 4.09,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719529200,
    //                 "temp": 306.98,
    //                 "feels_like": 308.54,
    //                 "pressure": 1008,
    //                 "humidity": 41,
    //                 "dew_point": 292.16,
    //                 "uvi": 1.82,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.62,
    //                 "wind_deg": 65,
    //                 "wind_gust": 3.95,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719532800,
    //                 "temp": 305.26,
    //                 "feels_like": 307.72,
    //                 "pressure": 1008,
    //                 "humidity": 50,
    //                 "dew_point": 293.61,
    //                 "uvi": 0.58,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.48,
    //                 "wind_deg": 79,
    //                 "wind_gust": 3.89,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719536400,
    //                 "temp": 301.41,
    //                 "feels_like": 302.75,
    //                 "pressure": 1008,
    //                 "humidity": 58,
    //                 "dew_point": 292.51,
    //                 "uvi": 0,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.2,
    //                 "wind_deg": 89,
    //                 "wind_gust": 4.95,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719540000,
    //                 "temp": 299.4,
    //                 "feels_like": 299.4,
    //                 "pressure": 1008,
    //                 "humidity": 58,
    //                 "dew_point": 290.51,
    //                 "uvi": 0,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.7,
    //                 "wind_deg": 89,
    //                 "wind_gust": 10.32,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719543600,
    //                 "temp": 297.98,
    //                 "feels_like": 298.14,
    //                 "pressure": 1009,
    //                 "humidity": 62,
    //                 "dew_point": 290.33,
    //                 "uvi": 0,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.66,
    //                 "wind_deg": 88,
    //                 "wind_gust": 10.86,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719547200,
    //                 "temp": 297.33,
    //                 "feels_like": 297.53,
    //                 "pressure": 1009,
    //                 "humidity": 66,
    //                 "dew_point": 290.69,
    //                 "uvi": 0,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.8,
    //                 "wind_deg": 92,
    //                 "wind_gust": 10.94,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719550800,
    //                 "temp": 296.46,
    //                 "feels_like": 296.73,
    //                 "pressure": 1010,
    //                 "humidity": 72,
    //                 "dew_point": 291.16,
    //                 "uvi": 0,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.39,
    //                 "wind_deg": 96,
    //                 "wind_gust": 9.61,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719554400,
    //                 "temp": 295.61,
    //                 "feels_like": 295.92,
    //                 "pressure": 1010,
    //                 "humidity": 77,
    //                 "dew_point": 291.55,
    //                 "uvi": 0,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.02,
    //                 "wind_deg": 109,
    //                 "wind_gust": 7.7,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719558000,
    //                 "temp": 294.89,
    //                 "feels_like": 295.26,
    //                 "pressure": 1009,
    //                 "humidity": 82,
    //                 "dew_point": 291.8,
    //                 "uvi": 0,
    //                 "clouds": 3,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.61,
    //                 "wind_deg": 106,
    //                 "wind_gust": 4.18,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719561600,
    //                 "temp": 294.48,
    //                 "feels_like": 294.89,
    //                 "pressure": 1009,
    //                 "humidity": 85,
    //                 "dew_point": 291.84,
    //                 "uvi": 0,
    //                 "clouds": 49,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.29,
    //                 "wind_deg": 99,
    //                 "wind_gust": 2.82,
    //                 "weather": [
    //                     {
    //                         "id": 802,
    //                         "main": "Clouds",
    //                         "description": "scattered clouds",
    //                         "icon": "03n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719565200,
    //                 "temp": 294.19,
    //                 "feels_like": 294.62,
    //                 "pressure": 1009,
    //                 "humidity": 87,
    //                 "dew_point": 291.98,
    //                 "uvi": 0,
    //                 "clouds": 65,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.44,
    //                 "wind_deg": 101,
    //                 "wind_gust": 3.13,
    //                 "weather": [
    //                     {
    //                         "id": 803,
    //                         "main": "Clouds",
    //                         "description": "broken clouds",
    //                         "icon": "04n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719568800,
    //                 "temp": 293.84,
    //                 "feels_like": 294.29,
    //                 "pressure": 1010,
    //                 "humidity": 89,
    //                 "dew_point": 291.91,
    //                 "uvi": 0,
    //                 "clouds": 74,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.5,
    //                 "wind_deg": 109,
    //                 "wind_gust": 3.49,
    //                 "weather": [
    //                     {
    //                         "id": 803,
    //                         "main": "Clouds",
    //                         "description": "broken clouds",
    //                         "icon": "04n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719572400,
    //                 "temp": 293.54,
    //                 "feels_like": 293.98,
    //                 "pressure": 1010,
    //                 "humidity": 90,
    //                 "dew_point": 291.82,
    //                 "uvi": 0,
    //                 "clouds": 79,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.4,
    //                 "wind_deg": 116,
    //                 "wind_gust": 3.4,
    //                 "weather": [
    //                     {
    //                         "id": 803,
    //                         "main": "Clouds",
    //                         "description": "broken clouds",
    //                         "icon": "04n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719576000,
    //                 "temp": 294.34,
    //                 "feels_like": 294.79,
    //                 "pressure": 1010,
    //                 "humidity": 87,
    //                 "dew_point": 292.15,
    //                 "uvi": 0.21,
    //                 "clouds": 83,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.2,
    //                 "wind_deg": 122,
    //                 "wind_gust": 3.94,
    //                 "weather": [
    //                     {
    //                         "id": 803,
    //                         "main": "Clouds",
    //                         "description": "broken clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719579600,
    //                 "temp": 296.72,
    //                 "feels_like": 297.2,
    //                 "pressure": 1011,
    //                 "humidity": 79,
    //                 "dew_point": 292.84,
    //                 "uvi": 0.9,
    //                 "clouds": 100,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.56,
    //                 "wind_deg": 142,
    //                 "wind_gust": 4.14,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719583200,
    //                 "temp": 299.11,
    //                 "feels_like": 299.11,
    //                 "pressure": 1011,
    //                 "humidity": 72,
    //                 "dew_point": 293.69,
    //                 "uvi": 2.3,
    //                 "clouds": 100,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.39,
    //                 "wind_deg": 155,
    //                 "wind_gust": 3.88,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719586800,
    //                 "temp": 301.4,
    //                 "feels_like": 303.61,
    //                 "pressure": 1011,
    //                 "humidity": 65,
    //                 "dew_point": 294.21,
    //                 "uvi": 4.51,
    //                 "clouds": 100,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.32,
    //                 "wind_deg": 153,
    //                 "wind_gust": 3.29,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719590400,
    //                 "temp": 303.45,
    //                 "feels_like": 305.94,
    //                 "pressure": 1011,
    //                 "humidity": 57,
    //                 "dew_point": 293.91,
    //                 "uvi": 7.53,
    //                 "clouds": 99,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.14,
    //                 "wind_deg": 164,
    //                 "wind_gust": 3.06,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719594000,
    //                 "temp": 305.31,
    //                 "feels_like": 307.81,
    //                 "pressure": 1010,
    //                 "humidity": 50,
    //                 "dew_point": 293.52,
    //                 "uvi": 9.94,
    //                 "clouds": 97,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.32,
    //                 "wind_deg": 163,
    //                 "wind_gust": 3.34,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719597600,
    //                 "temp": 306.92,
    //                 "feels_like": 308.96,
    //                 "pressure": 1010,
    //                 "humidity": 43,
    //                 "dew_point": 292.51,
    //                 "uvi": 10.66,
    //                 "clouds": 92,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.09,
    //                 "wind_deg": 171,
    //                 "wind_gust": 3.25,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719601200,
    //                 "temp": 308.28,
    //                 "feels_like": 309.73,
    //                 "pressure": 1009,
    //                 "humidity": 37,
    //                 "dew_point": 291.43,
    //                 "uvi": 5.85,
    //                 "clouds": 53,
    //                 "visibility": 10000,
    //                 "wind_speed": 1.84,
    //                 "wind_deg": 156,
    //                 "wind_gust": 3.12,
    //                 "weather": [
    //                     {
    //                         "id": 803,
    //                         "main": "Clouds",
    //                         "description": "broken clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719604800,
    //                 "temp": 309.16,
    //                 "feels_like": 310.4,
    //                 "pressure": 1008,
    //                 "humidity": 34,
    //                 "dew_point": 290.83,
    //                 "uvi": 2.42,
    //                 "clouds": 75,
    //                 "visibility": 10000,
    //                 "wind_speed": 1.92,
    //                 "wind_deg": 140,
    //                 "wind_gust": 3.41,
    //                 "weather": [
    //                     {
    //                         "id": 803,
    //                         "main": "Clouds",
    //                         "description": "broken clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719608400,
    //                 "temp": 309.71,
    //                 "feels_like": 310.75,
    //                 "pressure": 1007,
    //                 "humidity": 32,
    //                 "dew_point": 290.57,
    //                 "uvi": 2.69,
    //                 "clouds": 82,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.02,
    //                 "wind_deg": 137,
    //                 "wind_gust": 3.65,
    //                 "weather": [
    //                     {
    //                         "id": 803,
    //                         "main": "Clouds",
    //                         "description": "broken clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719612000,
    //                 "temp": 309.7,
    //                 "feels_like": 311.34,
    //                 "pressure": 1007,
    //                 "humidity": 34,
    //                 "dew_point": 291.32,
    //                 "uvi": 2.45,
    //                 "clouds": 87,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.13,
    //                 "wind_deg": 143,
    //                 "wind_gust": 3.87,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719615600,
    //                 "temp": 309.07,
    //                 "feels_like": 311.8,
    //                 "pressure": 1006,
    //                 "humidity": 39,
    //                 "dew_point": 292.97,
    //                 "uvi": 1.47,
    //                 "clouds": 92,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.1,
    //                 "wind_deg": 141,
    //                 "wind_gust": 3.75,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719619200,
    //                 "temp": 306.79,
    //                 "feels_like": 310.14,
    //                 "pressure": 1006,
    //                 "humidity": 48,
    //                 "dew_point": 294.41,
    //                 "uvi": 0.51,
    //                 "clouds": 94,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.2,
    //                 "wind_deg": 138,
    //                 "wind_gust": 4.38,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719622800,
    //                 "temp": 303.41,
    //                 "feels_like": 305.67,
    //                 "pressure": 1007,
    //                 "humidity": 56,
    //                 "dew_point": 293.81,
    //                 "uvi": 0,
    //                 "clouds": 100,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.21,
    //                 "wind_deg": 169,
    //                 "wind_gust": 3.78,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719626400,
    //                 "temp": 302.09,
    //                 "feels_like": 303.64,
    //                 "pressure": 1008,
    //                 "humidity": 57,
    //                 "dew_point": 292.72,
    //                 "uvi": 0,
    //                 "clouds": 97,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.45,
    //                 "wind_deg": 207,
    //                 "wind_gust": 3.4,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719630000,
    //                 "temp": 301.5,
    //                 "feels_like": 302.65,
    //                 "pressure": 1008,
    //                 "humidity": 56,
    //                 "dew_point": 292.14,
    //                 "uvi": 0,
    //                 "clouds": 91,
    //                 "visibility": 10000,
    //                 "wind_speed": 1.68,
    //                 "wind_deg": 238,
    //                 "wind_gust": 1.79,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719633600,
    //                 "temp": 300.58,
    //                 "feels_like": 301.54,
    //                 "pressure": 1009,
    //                 "humidity": 57,
    //                 "dew_point": 291.37,
    //                 "uvi": 0,
    //                 "clouds": 91,
    //                 "visibility": 10000,
    //                 "wind_speed": 1.48,
    //                 "wind_deg": 196,
    //                 "wind_gust": 1.55,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719637200,
    //                 "temp": 299.94,
    //                 "feels_like": 300.72,
    //                 "pressure": 1009,
    //                 "humidity": 56,
    //                 "dew_point": 290.71,
    //                 "uvi": 0,
    //                 "clouds": 91,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.1,
    //                 "wind_deg": 172,
    //                 "wind_gust": 2.35,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719640800,
    //                 "temp": 299.43,
    //                 "feels_like": 299.43,
    //                 "pressure": 1010,
    //                 "humidity": 57,
    //                 "dew_point": 290.47,
    //                 "uvi": 0,
    //                 "clouds": 90,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.14,
    //                 "wind_deg": 167,
    //                 "wind_gust": 5.44,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719644400,
    //                 "temp": 298.78,
    //                 "feels_like": 299.04,
    //                 "pressure": 1010,
    //                 "humidity": 63,
    //                 "dew_point": 291.23,
    //                 "uvi": 0,
    //                 "clouds": 100,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.16,
    //                 "wind_deg": 191,
    //                 "wind_gust": 7.9,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             }
    //         ],
    //         "daily": [
    //             {
    //                 "dt": 1719511200,
    //                 "sunrise": 1719486517,
    //                 "sunset": 1719538190,
    //                 "moonrise": 1719465600,
    //                 "moonset": 1719507900,
    //                 "moon_phase": 0.71,
    //                 "summary": "Expect a day of partly cloudy with rain",
    //                 "temp": {
    //                     "day": 304.96,
    //                     "min": 294.49,
    //                     "max": 307.33,
    //                     "night": 297.33,
    //                     "eve": 305.26,
    //                     "morn": 294.49
    //                 },
    //                 "feels_like": {
    //                     "day": 306.5,
    //                     "night": 297.53,
    //                     "eve": 307.72,
    //                     "morn": 295.03
    //                 },
    //                 "pressure": 1011,
    //                 "humidity": 47,
    //                 "dew_point": 292.42,
    //                 "wind_speed": 4.73,
    //                 "wind_deg": 54,
    //                 "wind_gust": 10.94,
    //                 "weather": [
    //                     {
    //                         "id": 500,
    //                         "main": "Rain",
    //                         "description": "light rain",
    //                         "icon": "10d"
    //                     }
    //                 ],
    //                 "clouds": 0,
    //                 "pop": 1,
    //                 "rain": 0.36,
    //                 "uvi": 9.43
    //             },
    //             {
    //                 "dt": 1719597600,
    //                 "sunrise": 1719572938,
    //                 "sunset": 1719624592,
    //                 "moonrise": 1719553740,
    //                 "moonset": 1719598320,
    //                 "moon_phase": 0.75,
    //                 "summary": "There will be clear sky until morning, then partly cloudy",
    //                 "temp": {
    //                     "day": 306.92,
    //                     "min": 293.54,
    //                     "max": 309.71,
    //                     "night": 300.58,
    //                     "eve": 306.79,
    //                     "morn": 294.34
    //                 },
    //                 "feels_like": {
    //                     "day": 308.96,
    //                     "night": 301.54,
    //                     "eve": 310.14,
    //                     "morn": 294.79
    //                 },
    //                 "pressure": 1010,
    //                 "humidity": 43,
    //                 "dew_point": 292.51,
    //                 "wind_speed": 3.39,
    //                 "wind_deg": 96,
    //                 "wind_gust": 9.61,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "clouds": 92,
    //                 "pop": 0,
    //                 "uvi": 10.66
    //             },
    //             {
    //                 "dt": 1719684000,
    //                 "sunrise": 1719659361,
    //                 "sunset": 1719710992,
    //                 "moonrise": 1719641880,
    //                 "moonset": 1719688680,
    //                 "moon_phase": 0.78,
    //                 "summary": "You can expect partly cloudy in the morning, with clearing in the afternoon",
    //                 "temp": {
    //                     "day": 307.93,
    //                     "min": 298.59,
    //                     "max": 308.51,
    //                     "night": 300.57,
    //                     "eve": 304.52,
    //                     "morn": 298.71
    //                 },
    //                 "feels_like": {
    //                     "day": 311.86,
    //                     "night": 303.05,
    //                     "eve": 309.34,
    //                     "morn": 299.46
    //                 },
    //                 "pressure": 1015,
    //                 "humidity": 46,
    //                 "dew_point": 294.89,
    //                 "wind_speed": 5.46,
    //                 "wind_deg": 221,
    //                 "wind_gust": 12.22,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "clouds": 87,
    //                 "pop": 0,
    //                 "uvi": 11.43
    //             },
    //             {
    //                 "dt": 1719770400,
    //                 "sunrise": 1719745784,
    //                 "sunset": 1719797391,
    //                 "moonrise": 1719730080,
    //                 "moonset": 1719779220,
    //                 "moon_phase": 0.82,
    //                 "summary": "Expect a day of partly cloudy with rain",
    //                 "temp": {
    //                     "day": 306.14,
    //                     "min": 298.48,
    //                     "max": 307.61,
    //                     "night": 298.98,
    //                     "eve": 304.39,
    //                     "morn": 298.48
    //                 },
    //                 "feels_like": {
    //                     "day": 310.94,
    //                     "night": 299.81,
    //                     "eve": 310.78,
    //                     "morn": 299.26
    //                 },
    //                 "pressure": 1019,
    //                 "humidity": 55,
    //                 "dew_point": 296.1,
    //                 "wind_speed": 3.64,
    //                 "wind_deg": 268,
    //                 "wind_gust": 10.48,
    //                 "weather": [
    //                     {
    //                         "id": 500,
    //                         "main": "Rain",
    //                         "description": "light rain",
    //                         "icon": "10d"
    //                     }
    //                 ],
    //                 "clouds": 81,
    //                 "pop": 0.47,
    //                 "rain": 1,
    //                 "uvi": 9.75
    //             },
    //             {
    //                 "dt": 1719856800,
    //                 "sunrise": 1719832209,
    //                 "sunset": 1719883788,
    //                 "moonrise": 1719818460,
    //                 "moonset": 1719869700,
    //                 "moon_phase": 0.85,
    //                 "summary": "Expect a day of partly cloudy with rain",
    //                 "temp": {
    //                     "day": 304.83,
    //                     "min": 296.57,
    //                     "max": 307.93,
    //                     "night": 302.04,
    //                     "eve": 306.99,
    //                     "morn": 297.05
    //                 },
    //                 "feels_like": {
    //                     "day": 310.37,
    //                     "night": 305.11,
    //                     "eve": 312.94,
    //                     "morn": 298
    //                 },
    //                 "pressure": 1017,
    //                 "humidity": 63,
    //                 "dew_point": 297.1,
    //                 "wind_speed": 3,
    //                 "wind_deg": 79,
    //                 "wind_gust": 6.32,
    //                 "weather": [
    //                     {
    //                         "id": 500,
    //                         "main": "Rain",
    //                         "description": "light rain",
    //                         "icon": "10d"
    //                     }
    //                 ],
    //                 "clouds": 90,
    //                 "pop": 0.91,
    //                 "rain": 1.45,
    //                 "uvi": 0.23
    //             },
    //             {
    //                 "dt": 1719943200,
    //                 "sunrise": 1719918634,
    //                 "sunset": 1719970184,
    //                 "moonrise": 1719907140,
    //                 "moonset": 1719960360,
    //                 "moon_phase": 0.89,
    //                 "summary": "Expect a day of partly cloudy with rain",
    //                 "temp": {
    //                     "day": 309.91,
    //                     "min": 298.13,
    //                     "max": 310.34,
    //                     "night": 300.99,
    //                     "eve": 306.28,
    //                     "morn": 298.13
    //                 },
    //                 "feels_like": {
    //                     "day": 314.65,
    //                     "night": 303.51,
    //                     "eve": 311.26,
    //                     "morn": 298.85
    //                 },
    //                 "pressure": 1013,
    //                 "humidity": 42,
    //                 "dew_point": 295.02,
    //                 "wind_speed": 3.42,
    //                 "wind_deg": 171,
    //                 "wind_gust": 9.51,
    //                 "weather": [
    //                     {
    //                         "id": 500,
    //                         "main": "Rain",
    //                         "description": "light rain",
    //                         "icon": "10d"
    //                     }
    //                 ],
    //                 "clouds": 9,
    //                 "pop": 0.21,
    //                 "rain": 0.12,
    //                 "uvi": 1
    //             },
    //             {
    //                 "dt": 1720029600,
    //                 "sunrise": 1720005061,
    //                 "sunset": 1720056578,
    //                 "moonrise": 1719996180,
    //                 "moonset": 1720050780,
    //                 "moon_phase": 0.92,
    //                 "summary": "Expect a day of partly cloudy with rain",
    //                 "temp": {
    //                     "day": 309.36,
    //                     "min": 298.88,
    //                     "max": 309.36,
    //                     "night": 302.43,
    //                     "eve": 305.47,
    //                     "morn": 298.88
    //                 },
    //                 "feels_like": {
    //                     "day": 314.24,
    //                     "night": 306.1,
    //                     "eve": 311.31,
    //                     "morn": 299.62
    //                 },
    //                 "pressure": 1015,
    //                 "humidity": 44,
    //                 "dew_point": 295.5,
    //                 "wind_speed": 3.27,
    //                 "wind_deg": 170,
    //                 "wind_gust": 8.5,
    //                 "weather": [
    //                     {
    //                         "id": 500,
    //                         "main": "Rain",
    //                         "description": "light rain",
    //                         "icon": "10d"
    //                     }
    //                 ],
    //                 "clouds": 44,
    //                 "pop": 0.3,
    //                 "rain": 0.27,
    //                 "uvi": 1
    //             },
    //             {
    //                 "dt": 1720116000,
    //                 "sunrise": 1720091488,
    //                 "sunset": 1720142971,
    //                 "moonrise": 1720085640,
    //                 "moonset": 1720140900,
    //                 "moon_phase": 0.96,
    //                 "summary": "Expect a day of partly cloudy with rain",
    //                 "temp": {
    //                     "day": 308.76,
    //                     "min": 298.38,
    //                     "max": 308.76,
    //                     "night": 302.32,
    //                     "eve": 308.35,
    //                     "morn": 298.38
    //                 },
    //                 "feels_like": {
    //                     "day": 313.29,
    //                     "night": 303.43,
    //                     "eve": 312.41,
    //                     "morn": 299.2
    //                 },
    //                 "pressure": 1014,
    //                 "humidity": 45,
    //                 "dew_point": 295.07,
    //                 "wind_speed": 4.11,
    //                 "wind_deg": 246,
    //                 "wind_gust": 8.92,
    //                 "weather": [
    //                     {
    //                         "id": 500,
    //                         "main": "Rain",
    //                         "description": "light rain",
    //                         "icon": "10d"
    //                     }
    //                 ],
    //                 "clouds": 4,
    //                 "pop": 0.26,
    //                 "rain": 0.15,
    //                 "uvi": 1
    //             }
    //         ]
    //     }
    // }
    return axios.get(`${WEATHER_CURRENT_BASE}lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`)

}


