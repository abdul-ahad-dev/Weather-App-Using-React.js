import { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import backgroundImage from './assets/background.jpg'
import Swal from 'sweetalert2'


export default function App() {
	const [weatherData, setWeatherData] = useState(null)
	const [getLocation, setLocation] = useState(false)

	useEffect(() => getUserLocation(), [])

	const getWeatherData = async (lat, lon) => {
		const apiKey = 'aa73e86ed7565d95c864ff8041401bbb'
		const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
		setWeatherData(response.data)
	}

	const getUserLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords
					getWeatherData(latitude, longitude);
					setLocation(true);
				},
				(error) => {
					console.error('Error getting user location:', error)
					console.log("error message ==> ", error.message);
				}
			)
		}
	}

	const handleUserLocation = () => {
		Swal.fire({
			title: "Allow Location!",
			text: "We need access to your location to fetch the weather data.",
			icon: "info",
		});
		getUserLocation();
	}

	return ( 
		<div className="relative min-h-screen py-10 px-5 flex items-center overflow-hidden">
			<div
				className="w-full scale-110 absolute top-0 left-0 right-0 bottom-0 z-0 "
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					filter: 'blur(4px)',
				}}
			></div>

			<div className="w-full z-10 relative">
				<h1
					style={{ textShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)' }}
					className="text-6xl text-white font-bold italic text-center underline mb-8"
				>
					Weather App
				</h1>

				{getLocation ? <WeatherCard weatherData={weatherData} />
					:
					<div className="md:w-1/2 p-6 mx-auto my-14 bg-white flex flex-col justify-center text-center shadow-2xl rounded-2xl">
						<p className="mb-6 text-xl text-black">
							This app needs access to your location for weather data.
						</p>
						<button
							onClick={handleUserLocation}
							className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
						>
							Allow Location Access
						</button>
					</div>}
				<p
					style={{ textShadow: '1px 1px 10px rgba(255, 255, 255, 0.5)' }}
					className="text-gray-900 text-center font-semibold mt-12"
				>
					Developed by Abdul Ahad
				</p>
			</div>
		</div>
	);
}