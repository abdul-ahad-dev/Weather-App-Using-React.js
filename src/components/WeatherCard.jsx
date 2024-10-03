import React, { useEffect, useState } from 'react'
import { ThreeDot } from 'react-loading-indicators';
import Loading from './Loading';

export default function WeatherCard({ weatherData }) {

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (weatherData != null) {
            // setIsLoading(false)
            console.log("Weather Card", weatherData);
        }
        console.log(isLoading);

    }, [weatherData])


    return (
        <div className="md:w-1/2 px mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
            <div className="bg-blue-400 text-white text-center py-4">
                {isLoading ? <Loading size='large' />
                    : <h1 className="text-5xl font-bold ">{weatherData?.name}, {weatherData?.sys?.country}</h1>}
                <p className="text-md flex justify-center gap-2">
                    Latitude:
                    {isLoading ? <Loading size='small' />
                        : (<span className='font-semibold'>{weatherData?.coord?.lat}</span>)}
                    ,
                    Longitude:
                    {isLoading ? <Loading size='small' />
                        : <span className='font-semibold'>{weatherData?.coord?.lon}</span>}
                </p>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between">
                    {isLoading ? <Loading size='medium' color='bg-black' />
                        : <h2 className="text-xl font-semibold">{weatherData?.weather[0]?.main}</h2>}
                    <img
                        src={`http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
                        alt="Weather Icon"
                        className="w-12 h-12"
                    />
                </div>

                <div className="flex justify-start">
                    {isLoading ? <Loading size='small' color='bg-gray-500' padding='py-2' />
                        : <p className=" text-gray-500">{weatherData?.weather[0]?.description}</p>}
                </div>

                <div className="mt-4">
                    <p className="text-lg flex gap-2">
                        <span className="font-semibold">Temperature:</span>
                        {isLoading ? <Loading size='small' color='bg-black' />
                            : `${weatherData?.main?.temp}°C`}
                    </p>

                    <p className="text-sm text-gray-600 flex gap-2">
                        Feels like:
                        {isLoading ? <Loading size='small' color='bg-gray-600' />
                            : `${weatherData?.main?.feels_like}°C`}
                        | Min:
                        {isLoading ? <Loading size='small' color='bg-gray-600' />
                            : `${weatherData?.main?.temp_min}°C`}
                        | Max:
                        {isLoading ? <Loading size='small' color='bg-gray-600' />
                            : `${weatherData?.main?.temp_max}°C`}
                    </p>

                    <p className="text-sm text-gray-600 flex gap-2">
                        Humidity:
                        {isLoading ? <Loading size='small' color='bg-gray-600' />
                            : `${weatherData?.main?.humidity}% `}
                        | Pressure:
                        {isLoading ? <Loading size='small' color='bg-gray-600' />
                            : `${weatherData?.main?.pressure} hPa`}
                    </p>



                </div>

                <div className="mt-4">
                    <p className="text-sm">
                        <span className="font-semibold">Sunrise:</span> {new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString()}
                    </p>
                    <p className="text-sm">
                        <span className="font-semibold">Sunset:</span> {new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString()}
                    </p>
                </div>

                <div className="mt-4">
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Timezone:</span> {weatherData?.timezone / 3600} hours from UTC
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Timestamp:</span> {new Date(weatherData?.dt * 1000).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}