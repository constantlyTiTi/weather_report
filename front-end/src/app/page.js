
import { SearchResultContext } from '@/app/context/createContext'
import Link from 'next/link'
import WeatherDisplayCanvas from '@/app/pages/weather/WeatherDisplayCanvas'

export default function Home() {
  return (
    <div className='h-screen max-w-lg mx-auto my-3'>
        <WeatherDisplayCanvas city_id='1'/>
    </div>
  );
}
