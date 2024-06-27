// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import React from 'react';

const MetegramChart = ({ weatherInfo,cityName })=>{


    const temData = weatherInfo["hourly"].map(d=>Math.round(d.temp)).slice(0,12)
    const humidityData = weatherInfo["hourly"].map(d=>Math.round(d.humidity)).slice(0,12)
    const xAxisData = weatherInfo["hourly"].map(d=>new Date(d.dt*1000).getUTCHours()+":00").slice(0,12)

    const options = {
        title: {
          text: `${cityName} Hourly Forecast`
        },
        xAxis: {
            categories: xAxisData,
            title: {
                text: 'UTC hours'
            }
        },
        yAxis: {
            title: {
                text: 'Temperature (°C) / Humidity (%)'
            }
        },
        series: [
          {
            name:"temperature",
            data: temData,
            type:'column'
          },
          {
            name:"humidity",
            data: humidityData,
            type:'line'
          }
        ]
      };

    return <div className='mx-5'><HighchartsReact highcharts={Highcharts} options={options} /></div>
}

export default MetegramChart


