import React, { useEffect, useState } from 'react'
import Loading from './Loading';

export default function WeatherCard({ weatherData }) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (weatherData != null) setIsLoading(false);
    }, [weatherData]);

    const kelvinToCelsius = (temp) => {
        return (temp - 273.15).toFixed(2);
    }

    return (
        <div className="md:w-1/2 mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
            <div className="bg-blue-400 text-white text-center py-4">
                {isLoading ? <Loading size='large' />
                    : <h1 className="text-5xl font-bold ">{weatherData?.name}, {weatherData?.sys?.country}</h1>}
                <p className="text-md flex justify-center gap-2">
                    <span>Latitude:</span>
                    {isLoading ? <Loading size='small' />
                        : (<span className='font-semibold'>{weatherData?.coord?.lat}</span>)}
                    <span>, Longitude:</span>
                    {isLoading ? <Loading size='small' />
                        : <span className='font-semibold'>{weatherData?.coord?.lon}</span>}
                </p>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between">
                    {isLoading ? <Loading size='medium' color='bg-black' />
                        : <h2 className="text-xl font-semibold">{weatherData?.weather[0]?.main}</h2>}

                    {isLoading ? (<div role="status">
                        <svg aria-hidden="true" class="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>) : (<img
                        src={`http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
                        alt="Weather Icon"
                        className="w-12 h-12"
                    />)}
                </div>

                <div className="flex justify-start">
                    {isLoading ? <Loading size='small' color='bg-gray-500' padding='py-4' />
                        : <p className=" text-gray-500">{weatherData?.weather[0]?.description}</p>}
                </div>

                <div className="mt-4">

                    <p className="text-lg flex gap-2">
                        <span className="font-semibold">Temperature:</span>
                        {isLoading ? <Loading size='small' color='bg-black' />
                            : `${kelvinToCelsius(weatherData?.main?.temp)}°C`}
                    </p>

                    <p className="text-sm text-gray-600 flex gap-2">
                        <span>Feels like:</span>
                        {isLoading ? <Loading size='small' color='bg-gray-600' />
                            : `${kelvinToCelsius(weatherData?.main?.feels_like)}°C`}
                        <span>| Min:</span>
                        {isLoading ? <Loading size='small' color='bg-gray-600' />
                            : `${kelvinToCelsius(weatherData?.main?.temp_min)}°C`}
                        <span>| Max:</span>
                        {isLoading ? <Loading size='small' color='bg-gray-600' />
                            : `${kelvinToCelsius(weatherData?.main?.temp_max)}°C`}
                    </p>

                    <p className="text-sm text-gray-600 flex gap-2">
                        <span>Humidity:</span>
                        {isLoading ? <Loading size='small' color='bg-gray-600' />
                            : `${weatherData?.main?.humidity}% `}
                        <span>| Pressure:</span>
                        {isLoading ? <Loading size='small' color='bg-gray-600' />
                            : `${weatherData?.main?.pressure} hPa`}
                    </p>

                </div>

                <div className="mt-4">
                    <p className="text-sm flex gap-2">
                        <span className="font-semibold">Sunrise:</span>
                        {isLoading ? <Loading size='small' color='bg-black' />
                            : `${new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString()}`}
                    </p>
                    <p className="text-sm flex gap-2">
                        <span className="font-semibold">Sunset:</span>
                        {isLoading ? <Loading size='small' color='bg-black' />
                            : `${new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString()}`}
                    </p>
                </div>

                <div className="mt-4">
                    <p className="text-sm text-gray-500 flex gap-2">
                        <span className="font-semibold">Timezone:</span>
                        {isLoading ? <Loading size='small' color='bg-gray-500' />
                            : `${weatherData?.timezone / 3600}`} hours from UTC
                    </p>
                    <p className="text-sm text-gray-500 flex gap-2">
                        <span className="font-semibold">Timestamp:</span>
                        {isLoading ? <Loading size='small' color='bg-gray-500' />
                            : `${new Date(weatherData?.dt * 1000).toLocaleString()}`}
                    </p>
                </div>
            </div>
        </div>
    )
}