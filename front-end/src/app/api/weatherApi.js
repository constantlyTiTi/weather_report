import axios from 'axios'
import { WEATHER_CURRENT_BASE, GET_WEATHER_ICON } from '@/app/const/urls'

const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export const getCurrentWeatherData = ({ lon, lat }) => {

    // return ({
    //     data: {
    //         "lat": 33.44,
    //         "lon": -94.04,
    //         "timezone": "America/Chicago",
    //         "timezone_offset": -18000,
    //         "current": {
    //             "dt": 1719442678,
    //             "sunrise": 1719400097,
    //             "sunset": 1719451786,
    //             "temp": 302.19,
    //             "feels_like": 305.07,
    //             "pressure": 1010,
    //             "humidity": 65,
    //             "dew_point": 294.94,
    //             "uvi": 0.68,
    //             "clouds": 0,
    //             "visibility": 10000,
    //             "wind_speed": 2.06,
    //             "wind_deg": 280,
    //             "weather": [
    //                 {
    //                     "id": 800,
    //                     "main": "Clear",
    //                     "description": "clear sky",
    //                     "icon": "01d"
    //                 }
    //             ]
    //         },
    //         "minutely": [
    //             {
    //                 "dt": 1719442680,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719442740,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719442800,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719442860,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719442920,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719442980,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443040,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443100,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443160,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443220,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443280,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443340,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443400,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443460,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443520,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443580,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443640,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443700,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443760,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443820,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443880,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719443940,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444000,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444060,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444120,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444180,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444240,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444300,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444360,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444420,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444480,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444540,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444600,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444660,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444720,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444780,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444840,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444900,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719444960,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445020,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445080,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445140,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445200,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445260,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445320,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445380,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445440,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445500,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445560,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445620,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445680,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445740,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445800,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445860,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445920,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719445980,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719446040,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719446100,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719446160,
    //                 "precipitation": 0
    //             },
    //             {
    //                 "dt": 1719446220,
    //                 "precipitation": 0
    //             }
    //         ],
    //         "hourly": [
    //             {
    //                 "dt": 1719439200,
    //                 "temp": 303.36,
    //                 "feels_like": 306.82,
    //                 "pressure": 1009,
    //                 "humidity": 62,
    //                 "dew_point": 295.27,
    //                 "uvi": 2.84,
    //                 "clouds": 16,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.19,
    //                 "wind_deg": 280,
    //                 "wind_gust": 4.61,
    //                 "weather": [
    //                     {
    //                         "id": 801,
    //                         "main": "Clouds",
    //                         "description": "few clouds",
    //                         "icon": "02d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719442800,
    //                 "temp": 302.19,
    //                 "feels_like": 305.07,
    //                 "pressure": 1010,
    //                 "humidity": 65,
    //                 "dew_point": 294.94,
    //                 "uvi": 0.68,
    //                 "clouds": 0,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.43,
    //                 "wind_deg": 282,
    //                 "wind_gust": 5.91,
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
    //                 "dt": 1719446400,
    //                 "temp": 303.25,
    //                 "feels_like": 306.81,
    //                 "pressure": 1009,
    //                 "humidity": 63,
    //                 "dew_point": 295.43,
    //                 "uvi": 0.5,
    //                 "clouds": 15,
    //                 "visibility": 10000,
    //                 "wind_speed": 1.44,
    //                 "wind_deg": 278,
    //                 "wind_gust": 4.14,
    //                 "weather": [
    //                     {
    //                         "id": 801,
    //                         "main": "Clouds",
    //                         "description": "few clouds",
    //                         "icon": "02d"
    //                     }
    //                 ],
    //                 "pop": 0.1
    //             },
    //             {
    //                 "dt": 1719450000,
    //                 "temp": 301.26,
    //                 "feels_like": 304.46,
    //                 "pressure": 1009,
    //                 "humidity": 73,
    //                 "dew_point": 295.96,
    //                 "uvi": 0,
    //                 "clouds": 21,
    //                 "visibility": 10000,
    //                 "wind_speed": 4.17,
    //                 "wind_deg": 132,
    //                 "wind_gust": 7.88,
    //                 "weather": [
    //                     {
    //                         "id": 801,
    //                         "main": "Clouds",
    //                         "description": "few clouds",
    //                         "icon": "02d"
    //                     }
    //                 ],
    //                 "pop": 0.76
    //             },
    //             {
    //                 "dt": 1719453600,
    //                 "temp": 300,
    //                 "feels_like": 302.56,
    //                 "pressure": 1008,
    //                 "humidity": 80,
    //                 "dew_point": 296.26,
    //                 "uvi": 0,
    //                 "clouds": 31,
    //                 "visibility": 10000,
    //                 "wind_speed": 4.63,
    //                 "wind_deg": 162,
    //                 "wind_gust": 8.79,
    //                 "weather": [
    //                     {
    //                         "id": 500,
    //                         "main": "Rain",
    //                         "description": "light rain",
    //                         "icon": "10n"
    //                     }
    //                 ],
    //                 "pop": 1,
    //                 "rain": {
    //                     "1h": 0.33
    //                 }
    //             },
    //             {
    //                 "dt": 1719457200,
    //                 "temp": 298.3,
    //                 "feels_like": 299.22,
    //                 "pressure": 1009,
    //                 "humidity": 90,
    //                 "dew_point": 296.54,
    //                 "uvi": 0,
    //                 "clouds": 39,
    //                 "visibility": 6269,
    //                 "wind_speed": 2.98,
    //                 "wind_deg": 60,
    //                 "wind_gust": 3.49,
    //                 "weather": [
    //                     {
    //                         "id": 502,
    //                         "main": "Rain",
    //                         "description": "heavy intensity rain",
    //                         "icon": "10n"
    //                     }
    //                 ],
    //                 "pop": 1,
    //                 "rain": {
    //                     "1h": 5.62
    //                 }
    //             },
    //             {
    //                 "dt": 1719460800,
    //                 "temp": 296.39,
    //                 "feels_like": 297.33,
    //                 "pressure": 1009,
    //                 "humidity": 98,
    //                 "dew_point": 296.07,
    //                 "uvi": 0,
    //                 "clouds": 62,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.48,
    //                 "wind_deg": 178,
    //                 "wind_gust": 6.81,
    //                 "weather": [
    //                     {
    //                         "id": 502,
    //                         "main": "Rain",
    //                         "description": "heavy intensity rain",
    //                         "icon": "10n"
    //                     }
    //                 ],
    //                 "pop": 1,
    //                 "rain": {
    //                     "1h": 6.94
    //                 }
    //             },
    //             {
    //                 "dt": 1719464400,
    //                 "temp": 296.13,
    //                 "feels_like": 296.99,
    //                 "pressure": 1009,
    //                 "humidity": 96,
    //                 "dew_point": 295.57,
    //                 "uvi": 0,
    //                 "clouds": 69,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.24,
    //                 "wind_deg": 180,
    //                 "wind_gust": 5.6,
    //                 "weather": [
    //                     {
    //                         "id": 501,
    //                         "main": "Rain",
    //                         "description": "moderate rain",
    //                         "icon": "10n"
    //                     }
    //                 ],
    //                 "pop": 1,
    //                 "rain": {
    //                     "1h": 3.04
    //                 }
    //             },
    //             {
    //                 "dt": 1719468000,
    //                 "temp": 295.66,
    //                 "feels_like": 296.47,
    //                 "pressure": 1011,
    //                 "humidity": 96,
    //                 "dew_point": 295.01,
    //                 "uvi": 0,
    //                 "clouds": 74,
    //                 "visibility": 10000,
    //                 "wind_speed": 1.89,
    //                 "wind_deg": 250,
    //                 "wind_gust": 2.31,
    //                 "weather": [
    //                     {
    //                         "id": 803,
    //                         "main": "Clouds",
    //                         "description": "broken clouds",
    //                         "icon": "04n"
    //                     }
    //                 ],
    //                 "pop": 0.8
    //             },
    //             {
    //                 "dt": 1719471600,
    //                 "temp": 295.64,
    //                 "feels_like": 296.43,
    //                 "pressure": 1010,
    //                 "humidity": 95,
    //                 "dew_point": 294.91,
    //                 "uvi": 0,
    //                 "clouds": 7,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.56,
    //                 "wind_deg": 293,
    //                 "wind_gust": 4.31,
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
    //                 "dt": 1719475200,
    //                 "temp": 295.44,
    //                 "feels_like": 296.23,
    //                 "pressure": 1010,
    //                 "humidity": 96,
    //                 "dew_point": 294.72,
    //                 "uvi": 0,
    //                 "clouds": 13,
    //                 "visibility": 10000,
    //                 "wind_speed": 1.86,
    //                 "wind_deg": 336,
    //                 "wind_gust": 2.54,
    //                 "weather": [
    //                     {
    //                         "id": 801,
    //                         "main": "Clouds",
    //                         "description": "few clouds",
    //                         "icon": "02n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719478800,
    //                 "temp": 295.32,
    //                 "feels_like": 296.1,
    //                 "pressure": 1010,
    //                 "humidity": 96,
    //                 "dew_point": 294.7,
    //                 "uvi": 0,
    //                 "clouds": 28,
    //                 "visibility": 10000,
    //                 "wind_speed": 1.41,
    //                 "wind_deg": 348,
    //                 "wind_gust": 1.91,
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
    //                 "dt": 1719482400,
    //                 "temp": 295.41,
    //                 "feels_like": 296.2,
    //                 "pressure": 1010,
    //                 "humidity": 96,
    //                 "dew_point": 294.76,
    //                 "uvi": 0,
    //                 "clouds": 35,
    //                 "visibility": 10000,
    //                 "wind_speed": 1.92,
    //                 "wind_deg": 1,
    //                 "wind_gust": 2.29,
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
    //                 "dt": 1719486000,
    //                 "temp": 295.45,
    //                 "feels_like": 296.27,
    //                 "pressure": 1011,
    //                 "humidity": 97,
    //                 "dew_point": 294.96,
    //                 "uvi": 0,
    //                 "clouds": 30,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.24,
    //                 "wind_deg": 37,
    //                 "wind_gust": 3.16,
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
    //                 "dt": 1719489600,
    //                 "temp": 296.09,
    //                 "feels_like": 296.97,
    //                 "pressure": 1011,
    //                 "humidity": 97,
    //                 "dew_point": 295.73,
    //                 "uvi": 0.22,
    //                 "clouds": 27,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.41,
    //                 "wind_deg": 52,
    //                 "wind_gust": 4.99,
    //                 "weather": [
    //                     {
    //                         "id": 802,
    //                         "main": "Clouds",
    //                         "description": "scattered clouds",
    //                         "icon": "03d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719493200,
    //                 "temp": 297.35,
    //                 "feels_like": 298.2,
    //                 "pressure": 1012,
    //                 "humidity": 91,
    //                 "dew_point": 295.84,
    //                 "uvi": 0.95,
    //                 "clouds": 34,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.57,
    //                 "wind_deg": 62,
    //                 "wind_gust": 5.78,
    //                 "weather": [
    //                     {
    //                         "id": 802,
    //                         "main": "Clouds",
    //                         "description": "scattered clouds",
    //                         "icon": "03d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719496800,
    //                 "temp": 298.67,
    //                 "feels_like": 299.44,
    //                 "pressure": 1012,
    //                 "humidity": 83,
    //                 "dew_point": 295.69,
    //                 "uvi": 2.29,
    //                 "clouds": 33,
    //                 "visibility": 10000,
    //                 "wind_speed": 4.04,
    //                 "wind_deg": 70,
    //                 "wind_gust": 5.62,
    //                 "weather": [
    //                     {
    //                         "id": 802,
    //                         "main": "Clouds",
    //                         "description": "scattered clouds",
    //                         "icon": "03d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719500400,
    //                 "temp": 300.15,
    //                 "feels_like": 302.43,
    //                 "pressure": 1012,
    //                 "humidity": 75,
    //                 "dew_point": 295.33,
    //                 "uvi": 4.02,
    //                 "clouds": 35,
    //                 "visibility": 10000,
    //                 "wind_speed": 4.11,
    //                 "wind_deg": 74,
    //                 "wind_gust": 4.91,
    //                 "weather": [
    //                     {
    //                         "id": 802,
    //                         "main": "Clouds",
    //                         "description": "scattered clouds",
    //                         "icon": "03d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719504000,
    //                 "temp": 301.55,
    //                 "feels_like": 304.16,
    //                 "pressure": 1012,
    //                 "humidity": 67,
    //                 "dew_point": 294.99,
    //                 "uvi": 6.26,
    //                 "clouds": 37,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.83,
    //                 "wind_deg": 77,
    //                 "wind_gust": 4.33,
    //                 "weather": [
    //                     {
    //                         "id": 802,
    //                         "main": "Clouds",
    //                         "description": "scattered clouds",
    //                         "icon": "03d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719507600,
    //                 "temp": 303.03,
    //                 "feels_like": 305.95,
    //                 "pressure": 1012,
    //                 "humidity": 61,
    //                 "dew_point": 294.82,
    //                 "uvi": 7.99,
    //                 "clouds": 36,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.08,
    //                 "wind_deg": 81,
    //                 "wind_gust": 3.4,
    //                 "weather": [
    //                     {
    //                         "id": 802,
    //                         "main": "Clouds",
    //                         "description": "scattered clouds",
    //                         "icon": "03d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719511200,
    //                 "temp": 304.14,
    //                 "feels_like": 307.02,
    //                 "pressure": 1011,
    //                 "humidity": 56,
    //                 "dew_point": 294.6,
    //                 "uvi": 9.28,
    //                 "clouds": 35,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.66,
    //                 "wind_deg": 81,
    //                 "wind_gust": 2.92,
    //                 "weather": [
    //                     {
    //                         "id": 802,
    //                         "main": "Clouds",
    //                         "description": "scattered clouds",
    //                         "icon": "03d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719514800,
    //                 "temp": 305.04,
    //                 "feels_like": 307.79,
    //                 "pressure": 1011,
    //                 "humidity": 52,
    //                 "dew_point": 294.29,
    //                 "uvi": 9.43,
    //                 "clouds": 44,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.57,
    //                 "wind_deg": 87,
    //                 "wind_gust": 3.04,
    //                 "weather": [
    //                     {
    //                         "id": 802,
    //                         "main": "Clouds",
    //                         "description": "scattered clouds",
    //                         "icon": "03d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719518400,
    //                 "temp": 305.85,
    //                 "feels_like": 308.31,
    //                 "pressure": 1010,
    //                 "humidity": 48,
    //                 "dew_point": 293.49,
    //                 "uvi": 7.6,
    //                 "clouds": 30,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.11,
    //                 "wind_deg": 90,
    //                 "wind_gust": 2.76,
    //                 "weather": [
    //                     {
    //                         "id": 802,
    //                         "main": "Clouds",
    //                         "description": "scattered clouds",
    //                         "icon": "03d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719522000,
    //                 "temp": 306.36,
    //                 "feels_like": 308.47,
    //                 "pressure": 1009,
    //                 "humidity": 45,
    //                 "dew_point": 292.87,
    //                 "uvi": 6.15,
    //                 "clouds": 19,
    //                 "visibility": 10000,
    //                 "wind_speed": 1.86,
    //                 "wind_deg": 95,
    //                 "wind_gust": 2.84,
    //                 "weather": [
    //                     {
    //                         "id": 801,
    //                         "main": "Clouds",
    //                         "description": "few clouds",
    //                         "icon": "02d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719525600,
    //                 "temp": 306.5,
    //                 "feels_like": 308.47,
    //                 "pressure": 1009,
    //                 "humidity": 44,
    //                 "dew_point": 292.75,
    //                 "uvi": 3.92,
    //                 "clouds": 14,
    //                 "visibility": 10000,
    //                 "wind_speed": 1.95,
    //                 "wind_deg": 105,
    //                 "wind_gust": 3.25,
    //                 "weather": [
    //                     {
    //                         "id": 801,
    //                         "main": "Clouds",
    //                         "description": "few clouds",
    //                         "icon": "02d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719529200,
    //                 "temp": 306.09,
    //                 "feels_like": 309.04,
    //                 "pressure": 1009,
    //                 "humidity": 49,
    //                 "dew_point": 294.06,
    //                 "uvi": 1.82,
    //                 "clouds": 11,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.04,
    //                 "wind_deg": 123,
    //                 "wind_gust": 3.3,
    //                 "weather": [
    //                     {
    //                         "id": 801,
    //                         "main": "Clouds",
    //                         "description": "few clouds",
    //                         "icon": "02d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719532800,
    //                 "temp": 305.02,
    //                 "feels_like": 309.34,
    //                 "pressure": 1008,
    //                 "humidity": 58,
    //                 "dew_point": 295.66,
    //                 "uvi": 0.58,
    //                 "clouds": 10,
    //                 "visibility": 10000,
    //                 "wind_speed": 1.71,
    //                 "wind_deg": 122,
    //                 "wind_gust": 2.89,
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
    //                 "temp": 301.85,
    //                 "feels_like": 304.12,
    //                 "pressure": 1009,
    //                 "humidity": 63,
    //                 "dew_point": 294.12,
    //                 "uvi": 0,
    //                 "clouds": 5,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.56,
    //                 "wind_deg": 97,
    //                 "wind_gust": 2.37,
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
    //                 "temp": 299.91,
    //                 "feels_like": 301.13,
    //                 "pressure": 1009,
    //                 "humidity": 63,
    //                 "dew_point": 292.24,
    //                 "uvi": 0,
    //                 "clouds": 9,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.21,
    //                 "wind_deg": 94,
    //                 "wind_gust": 7.29,
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
    //                 "temp": 298.67,
    //                 "feels_like": 298.97,
    //                 "pressure": 1009,
    //                 "humidity": 65,
    //                 "dew_point": 291.74,
    //                 "uvi": 0,
    //                 "clouds": 35,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.63,
    //                 "wind_deg": 93,
    //                 "wind_gust": 10.93,
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
    //                 "dt": 1719547200,
    //                 "temp": 298.3,
    //                 "feels_like": 298.67,
    //                 "pressure": 1009,
    //                 "humidity": 69,
    //                 "dew_point": 292.28,
    //                 "uvi": 0,
    //                 "clouds": 39,
    //                 "visibility": 10000,
    //                 "wind_speed": 4.47,
    //                 "wind_deg": 102,
    //                 "wind_gust": 12.27,
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
    //                 "dt": 1719550800,
    //                 "temp": 297.18,
    //                 "feels_like": 297.62,
    //                 "pressure": 1010,
    //                 "humidity": 76,
    //                 "dew_point": 292.71,
    //                 "uvi": 0,
    //                 "clouds": 39,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.21,
    //                 "wind_deg": 112,
    //                 "wind_gust": 9.66,
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
    //                 "dt": 1719554400,
    //                 "temp": 296.41,
    //                 "feels_like": 296.88,
    //                 "pressure": 1010,
    //                 "humidity": 80,
    //                 "dew_point": 292.81,
    //                 "uvi": 0,
    //                 "clouds": 49,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.16,
    //                 "wind_deg": 113,
    //                 "wind_gust": 9.99,
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
    //                 "dt": 1719558000,
    //                 "temp": 295.68,
    //                 "feels_like": 296.18,
    //                 "pressure": 1009,
    //                 "humidity": 84,
    //                 "dew_point": 292.87,
    //                 "uvi": 0,
    //                 "clouds": 13,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.13,
    //                 "wind_deg": 117,
    //                 "wind_gust": 8.98,
    //                 "weather": [
    //                     {
    //                         "id": 801,
    //                         "main": "Clouds",
    //                         "description": "few clouds",
    //                         "icon": "02n"
    //                     }
    //                 ],
    //                 "pop": 0
    //             },
    //             {
    //                 "dt": 1719561600,
    //                 "temp": 295.2,
    //                 "feels_like": 295.73,
    //                 "pressure": 1009,
    //                 "humidity": 87,
    //                 "dew_point": 292.98,
    //                 "uvi": 0,
    //                 "clouds": 38,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.02,
    //                 "wind_deg": 124,
    //                 "wind_gust": 8.49,
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
    //                 "temp": 294.91,
    //                 "feels_like": 295.49,
    //                 "pressure": 1010,
    //                 "humidity": 90,
    //                 "dew_point": 293.18,
    //                 "uvi": 0,
    //                 "clouds": 55,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.56,
    //                 "wind_deg": 118,
    //                 "wind_gust": 6.05,
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
    //                 "temp": 295,
    //                 "feels_like": 295.59,
    //                 "pressure": 1010,
    //                 "humidity": 90,
    //                 "dew_point": 293.33,
    //                 "uvi": 0,
    //                 "clouds": 66,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.97,
    //                 "wind_deg": 134,
    //                 "wind_gust": 7.24,
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
    //                 "temp": 295.02,
    //                 "feels_like": 295.61,
    //                 "pressure": 1010,
    //                 "humidity": 90,
    //                 "dew_point": 293.36,
    //                 "uvi": 0,
    //                 "clouds": 73,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.87,
    //                 "wind_deg": 140,
    //                 "wind_gust": 8.19,
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
    //                 "temp": 295.75,
    //                 "feels_like": 296.36,
    //                 "pressure": 1010,
    //                 "humidity": 88,
    //                 "dew_point": 293.72,
    //                 "uvi": 0.21,
    //                 "clouds": 78,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.56,
    //                 "wind_deg": 137,
    //                 "wind_gust": 7.7,
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
    //                 "temp": 297.63,
    //                 "feels_like": 298.27,
    //                 "pressure": 1011,
    //                 "humidity": 82,
    //                 "dew_point": 294.44,
    //                 "uvi": 0.9,
    //                 "clouds": 100,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.17,
    //                 "wind_deg": 152,
    //                 "wind_gust": 6.21,
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
    //                 "temp": 299.54,
    //                 "feels_like": 299.54,
    //                 "pressure": 1011,
    //                 "humidity": 78,
    //                 "dew_point": 295.5,
    //                 "uvi": 2.3,
    //                 "clouds": 99,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.58,
    //                 "wind_deg": 162,
    //                 "wind_gust": 5.43,
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
    //                 "temp": 301.51,
    //                 "feels_like": 304.99,
    //                 "pressure": 1011,
    //                 "humidity": 73,
    //                 "dew_point": 296.29,
    //                 "uvi": 4.51,
    //                 "clouds": 100,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.24,
    //                 "wind_deg": 176,
    //                 "wind_gust": 4.79,
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
    //                 "temp": 303.46,
    //                 "feels_like": 308.2,
    //                 "pressure": 1011,
    //                 "humidity": 67,
    //                 "dew_point": 296.76,
    //                 "uvi": 7.53,
    //                 "clouds": 96,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.99,
    //                 "wind_deg": 194,
    //                 "wind_gust": 4.49,
    //                 "weather": [
    //                     {
    //                         "id": 500,
    //                         "main": "Rain",
    //                         "description": "light rain",
    //                         "icon": "10d"
    //                     }
    //                 ],
    //                 "pop": 0.2,
    //                 "rain": {
    //                     "1h": 0.12
    //                 }
    //             },
    //             {
    //                 "dt": 1719594000,
    //                 "temp": 304.98,
    //                 "feels_like": 309.83,
    //                 "pressure": 1011,
    //                 "humidity": 60,
    //                 "dew_point": 296.44,
    //                 "uvi": 9.94,
    //                 "clouds": 88,
    //                 "visibility": 10000,
    //                 "wind_speed": 3.29,
    //                 "wind_deg": 203,
    //                 "wind_gust": 4.67,
    //                 "weather": [
    //                     {
    //                         "id": 500,
    //                         "main": "Rain",
    //                         "description": "light rain",
    //                         "icon": "10d"
    //                     }
    //                 ],
    //                 "pop": 0.2,
    //                 "rain": {
    //                     "1h": 0.12
    //                 }
    //             },
    //             {
    //                 "dt": 1719597600,
    //                 "temp": 306.66,
    //                 "feels_like": 311.46,
    //                 "pressure": 1010,
    //                 "humidity": 53,
    //                 "dew_point": 295.93,
    //                 "uvi": 10.66,
    //                 "clouds": 82,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.97,
    //                 "wind_deg": 207,
    //                 "wind_gust": 4.29,
    //                 "weather": [
    //                     {
    //                         "id": 500,
    //                         "main": "Rain",
    //                         "description": "light rain",
    //                         "icon": "10d"
    //                     }
    //                 ],
    //                 "pop": 0.2,
    //                 "rain": {
    //                     "1h": 0.13
    //                 }
    //             },
    //             {
    //                 "dt": 1719601200,
    //                 "temp": 306.57,
    //                 "feels_like": 310.61,
    //                 "pressure": 1010,
    //                 "humidity": 51,
    //                 "dew_point": 295.21,
    //                 "uvi": 5.85,
    //                 "clouds": 96,
    //                 "visibility": 10000,
    //                 "wind_speed": 2.78,
    //                 "wind_deg": 204,
    //                 "wind_gust": 4.03,
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
    //                 "dt": 1719604800,
    //                 "temp": 304.81,
    //                 "feels_like": 310.02,
    //                 "pressure": 1009,
    //                 "humidity": 62,
    //                 "dew_point": 296.71,
    //                 "uvi": 2.42,
    //                 "clouds": 98,
    //                 "visibility": 10000,
    //                 "wind_speed": 1.17,
    //                 "wind_deg": 214,
    //                 "wind_gust": 1.39,
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
    //                 "dt": 1719608400,
    //                 "temp": 306.02,
    //                 "feels_like": 311.65,
    //                 "pressure": 1009,
    //                 "humidity": 58,
    //                 "dew_point": 296.64,
    //                 "uvi": 2.69,
    //                 "clouds": 99,
    //                 "visibility": 10000,
    //                 "wind_speed": 0.78,
    //                 "wind_deg": 335,
    //                 "wind_gust": 1.57,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "pop": 0
    //             }
    //         ],
    //         "daily": [
    //             {
    //                 "dt": 1719424800,
    //                 "sunrise": 1719400097,
    //                 "sunset": 1719451786,
    //                 "moonrise": 0,
    //                 "moonset": 1719417420,
    //                 "moon_phase": 0.67,
    //                 "summary": "Expect a day of partly cloudy with rain",
    //                 "temp": {
    //                     "day": 307.14,
    //                     "min": 296.39,
    //                     "max": 307.14,
    //                     "night": 296.39,
    //                     "eve": 303.25,
    //                     "morn": 297.35
    //                 },
    //                 "feels_like": {
    //                     "day": 311.86,
    //                     "night": 297.33,
    //                     "eve": 306.81,
    //                     "morn": 298.25
    //                 },
    //                 "pressure": 1011,
    //                 "humidity": 51,
    //                 "dew_point": 295.82,
    //                 "wind_speed": 4.63,
    //                 "wind_deg": 162,
    //                 "wind_gust": 8.79,
    //                 "weather": [
    //                     {
    //                         "id": 502,
    //                         "main": "Rain",
    //                         "description": "heavy intensity rain",
    //                         "icon": "10d"
    //                     }
    //                 ],
    //                 "clouds": 47,
    //                 "pop": 1,
    //                 "rain": 16.18,
    //                 "uvi": 9.93
    //             },
    //             {
    //                 "dt": 1719511200,
    //                 "sunrise": 1719486517,
    //                 "sunset": 1719538190,
    //                 "moonrise": 1719465600,
    //                 "moonset": 1719507900,
    //                 "moon_phase": 0.71,
    //                 "summary": "Expect a day of partly cloudy with rain",
    //                 "temp": {
    //                     "day": 304.14,
    //                     "min": 295.32,
    //                     "max": 306.5,
    //                     "night": 298.3,
    //                     "eve": 305.02,
    //                     "morn": 296.09
    //                 },
    //                 "feels_like": {
    //                     "day": 307.02,
    //                     "night": 298.67,
    //                     "eve": 309.34,
    //                     "morn": 296.97
    //                 },
    //                 "pressure": 1011,
    //                 "humidity": 56,
    //                 "dew_point": 294.6,
    //                 "wind_speed": 4.47,
    //                 "wind_deg": 102,
    //                 "wind_gust": 12.27,
    //                 "weather": [
    //                     {
    //                         "id": 501,
    //                         "main": "Rain",
    //                         "description": "moderate rain",
    //                         "icon": "10d"
    //                     }
    //                 ],
    //                 "clouds": 35,
    //                 "pop": 1,
    //                 "rain": 3.04,
    //                 "uvi": 9.43
    //             },
    //             {
    //                 "dt": 1719597600,
    //                 "sunrise": 1719572938,
    //                 "sunset": 1719624592,
    //                 "moonrise": 1719553740,
    //                 "moonset": 1719598320,
    //                 "moon_phase": 0.75,
    //                 "summary": "Expect a day of partly cloudy with rain",
    //                 "temp": {
    //                     "day": 306.66,
    //                     "min": 294.91,
    //                     "max": 307.63,
    //                     "night": 299.64,
    //                     "eve": 305.92,
    //                     "morn": 295.75
    //                 },
    //                 "feels_like": {
    //                     "day": 311.46,
    //                     "night": 299.64,
    //                     "eve": 311.41,
    //                     "morn": 296.36
    //                 },
    //                 "pressure": 1010,
    //                 "humidity": 53,
    //                 "dew_point": 295.93,
    //                 "wind_speed": 3.58,
    //                 "wind_deg": 162,
    //                 "wind_gust": 9.99,
    //                 "weather": [
    //                     {
    //                         "id": 500,
    //                         "main": "Rain",
    //                         "description": "light rain",
    //                         "icon": "10d"
    //                     }
    //                 ],
    //                 "clouds": 82,
    //                 "pop": 0.2,
    //                 "rain": 0.37,
    //                 "uvi": 10.66
    //             },
    //             {
    //                 "dt": 1719684000,
    //                 "sunrise": 1719659361,
    //                 "sunset": 1719710992,
    //                 "moonrise": 1719641880,
    //                 "moonset": 1719688680,
    //                 "moon_phase": 0.78,
    //                 "summary": "Expect a day of partly cloudy with clear spells",
    //                 "temp": {
    //                     "day": 307.28,
    //                     "min": 297.66,
    //                     "max": 307.49,
    //                     "night": 302.73,
    //                     "eve": 304.19,
    //                     "morn": 297.9
    //                 },
    //                 "feels_like": {
    //                     "day": 311.49,
    //                     "night": 305.57,
    //                     "eve": 309.4,
    //                     "morn": 298.73
    //                 },
    //                 "pressure": 1016,
    //                 "humidity": 49,
    //                 "dew_point": 295.29,
    //                 "wind_speed": 5.46,
    //                 "wind_deg": 231,
    //                 "wind_gust": 11.74,
    //                 "weather": [
    //                     {
    //                         "id": 802,
    //                         "main": "Clouds",
    //                         "description": "scattered clouds",
    //                         "icon": "03d"
    //                     }
    //                 ],
    //                 "clouds": 30,
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
    //                 "summary": "There will be partly cloudy today",
    //                 "temp": {
    //                     "day": 305.68,
    //                     "min": 299.44,
    //                     "max": 309.36,
    //                     "night": 299.44,
    //                     "eve": 302.37,
    //                     "morn": 299.45
    //                 },
    //                 "feels_like": {
    //                     "day": 310.22,
    //                     "night": 299.44,
    //                     "eve": 306.56,
    //                     "morn": 299.45
    //                 },
    //                 "pressure": 1019,
    //                 "humidity": 56,
    //                 "dew_point": 295.97,
    //                 "wind_speed": 3.78,
    //                 "wind_deg": 78,
    //                 "wind_gust": 9.12,
    //                 "weather": [
    //                     {
    //                         "id": 804,
    //                         "main": "Clouds",
    //                         "description": "overcast clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "clouds": 100,
    //                 "pop": 0,
    //                 "uvi": 9.75
    //             },
    //             {
    //                 "dt": 1719856800,
    //                 "sunrise": 1719832209,
    //                 "sunset": 1719883788,
    //                 "moonrise": 1719818460,
    //                 "moonset": 1719869700,
    //                 "moon_phase": 0.85,
    //                 "summary": "There will be partly cloudy today",
    //                 "temp": {
    //                     "day": 306.54,
    //                     "min": 297.17,
    //                     "max": 308.24,
    //                     "night": 302.7,
    //                     "eve": 306.97,
    //                     "morn": 297.51
    //                 },
    //                 "feels_like": {
    //                     "day": 312.21,
    //                     "night": 305.51,
    //                     "eve": 313.64,
    //                     "morn": 298.33
    //                 },
    //                 "pressure": 1015,
    //                 "humidity": 56,
    //                 "dew_point": 296.78,
    //                 "wind_speed": 3.69,
    //                 "wind_deg": 122,
    //                 "wind_gust": 8.58,
    //                 "weather": [
    //                     {
    //                         "id": 802,
    //                         "main": "Clouds",
    //                         "description": "scattered clouds",
    //                         "icon": "03d"
    //                     }
    //                 ],
    //                 "clouds": 44,
    //                 "pop": 0,
    //                 "uvi": 0.23
    //             },
    //             {
    //                 "dt": 1719943200,
    //                 "sunrise": 1719918634,
    //                 "sunset": 1719970184,
    //                 "moonrise": 1719907140,
    //                 "moonset": 1719960360,
    //                 "moon_phase": 0.89,
    //                 "summary": "Expect a day of partly cloudy with clear spells",
    //                 "temp": {
    //                     "day": 309.69,
    //                     "min": 297.65,
    //                     "max": 311.9,
    //                     "night": 303.89,
    //                     "eve": 308.17,
    //                     "morn": 297.65
    //                 },
    //                 "feels_like": {
    //                     "day": 314.57,
    //                     "night": 306.55,
    //                     "eve": 312.02,
    //                     "morn": 298.4
    //                 },
    //                 "pressure": 1013,
    //                 "humidity": 43,
    //                 "dew_point": 295.39,
    //                 "wind_speed": 5.22,
    //                 "wind_deg": 181,
    //                 "wind_gust": 12.3,
    //                 "weather": [
    //                     {
    //                         "id": 800,
    //                         "main": "Clear",
    //                         "description": "clear sky",
    //                         "icon": "01d"
    //                     }
    //                 ],
    //                 "clouds": 4,
    //                 "pop": 0,
    //                 "uvi": 1
    //             },
    //             {
    //                 "dt": 1720029600,
    //                 "sunrise": 1720005061,
    //                 "sunset": 1720056578,
    //                 "moonrise": 1719996180,
    //                 "moonset": 1720050780,
    //                 "moon_phase": 0.92,
    //                 "summary": "There will be partly cloudy today",
    //                 "temp": {
    //                     "day": 307.8,
    //                     "min": 298.51,
    //                     "max": 309.72,
    //                     "night": 303.6,
    //                     "eve": 306.8,
    //                     "morn": 298.51
    //                 },
    //                 "feels_like": {
    //                     "day": 310.93,
    //                     "night": 305.62,
    //                     "eve": 310.79,
    //                     "morn": 299.27
    //                 },
    //                 "pressure": 1016,
    //                 "humidity": 44,
    //                 "dew_point": 294.01,
    //                 "wind_speed": 3.98,
    //                 "wind_deg": 189,
    //                 "wind_gust": 9.22,
    //                 "weather": [
    //                     {
    //                         "id": 803,
    //                         "main": "Clouds",
    //                         "description": "broken clouds",
    //                         "icon": "04d"
    //                     }
    //                 ],
    //                 "clouds": 59,
    //                 "pop": 0,
    //                 "uvi": 1
    //             }
    //         ]
    //     }
    // })
    return axios.get(`${WEATHER_CURRENT_BASE}lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)

}


