
import axios from 'axios'
import { useEffect, useState } from 'react'
import WeatherCard from './components/WeatherCard'


function App() {

	const [weatherData, setWeatherData] = useState(null)

	useEffect(() => {
		getUserLocation()
	}, [])

	const getWeatherData = async (lat, lon) => {
		const apiKey = 'aa73e86ed7565d95c864ff8041401bbb'
		const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
		setWeatherData(response.data)
	}

	const getData = () => {
		console.log("weather data ====>", weatherData);
		console.log("weather data lon ====>", weatherData?.coord.lon);
		console.log("weather data lat ====>", weatherData?.coord.lat);
		console.log("weather data id ====>", weatherData?.weather[0].id);
		console.log("weather data main ====>", weatherData?.weather[0].main);
		console.log("weather data description ====>", weatherData?.weather[0].description);
		console.log("weather data temp ====>", weatherData?.main.temp);
		console.log("weather data feels_like ====>", weatherData?.main.feels_like);
		console.log("weather data temp_min ====>", weatherData?.main.temp_min);
		console.log("weather data temp_max ====>", weatherData?.main.temp_max);
		console.log("weather data pressure ====>", weatherData?.main.pressure);
		console.log("weather data humidity ====>", weatherData?.main.humidity);
		console.log("weather data dt ====>", weatherData?.dt);
		console.log("weather data country ====>", weatherData?.sys.country);
		console.log("weather data sunrise ====>", weatherData?.sys.sunrise);
		console.log("weather data sunset ====>", weatherData?.sys.sunset);
		console.log("weather data timezone  ====>", weatherData?.timezone);
		console.log("weather data name  ====>", weatherData?.name);
	}

	getData()


	const getUserLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords
					getWeatherData(latitude, longitude)
				},
				(error) => {
					console.error('Error getting user location:', error)
				}
			)
		}
	}

	return (
		<div className="p-6 bg-blue-50">
			<h1>Weather App</h1>
			<WeatherCard weatherData={weatherData} />
		</div>
	)
}

export default App
