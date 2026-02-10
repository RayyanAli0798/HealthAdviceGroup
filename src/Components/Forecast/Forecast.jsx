import "./Forecast.css"
import { useState, useEffect } from "react"
import axios from "axios"
import IconSelector from "../IconSelector/IconSelector"

// This is the basic wireframe for the weather
function WeatherBox({ Day, Icon, Temp }) {
    return (
        <div className="WeatherBoxDaily">
            <h3> {Day} </h3>
            {Icon}
            <p> {Temp} </p>

        </div>
    )
}


export default function Forecast() {


    return (
        // Displays everything
        <DisplayTemp />
    )
}



function DisplayTemp() {

    // handles storing all the api data
    const [ForecastLoading, setForecastLoading] = useState(true)
    const [ForecastLoadingError, setForecastLoadingError] = useState("")
    const [HourlyWeather, setHourlyWeather] = useState()
    const [CurrentForecast, setCurrentForecast] = useState()
    const [NextDay, setNextDay] = useState()
    const [dayAfter, setDayAfter] = useState()

    // calls the api and stores all the data
    function loadTemp() {

        let query = `https://api.weatherapi.com/v1/forecast.json?key=c7d1b9c8de5745baa89152929260502&q=London&days=3&aqi=no&alerts=no`

        setForecastLoadingError("")
        setForecastLoading(true)

        axios.get(query)
            .then(res => {

                let hours = res.data.forecast.forecastday[0].hour;

                // Takes specific data
                let HourlyData = hours.map(hour => ({
                    time: hour.time,
                    temp_c: hour.temp_c,
                    condition: hour.condition
                }));

                setCurrentForecast(res.data.current)
                setHourlyWeather(HourlyData)
                setNextDay(res.data.forecast.forecastday[1].hour)
                setDayAfter(res.data.forecast.forecastday[2].hour)


            })
            .catch(err => {
                setForecastLoadingError("Something went wrong")
            })
            .finally(() => {
                setForecastLoading(false)
            })
    }

    // Calls the api calling function
    useEffect(() => {
        loadTemp();
    }, [])

    // Displays pre api call
    if (ForecastLoading) {
        return (
            <>

                <div className="ForecastContainer">
                    <div className="WeeklyForecast">
                        Loading...
                    </div>
                    <div className="HourlyForecast">
                        Loading...
                    </div>
                </div>

            </>
        )
    }

    // Displays post api call incase of errors
    if (ForecastLoadingError) {
        return (
            <>
                <div className="ForecastContainer">
                    <div className="WeeklyForecast">
                        Something went wrong
                    </div>
                    <div className="HourlyForecast">
                        Something went wrong
                    </div>
                </div>

            </>
        )
    }

    // Displays post api call if success
    return (
        <>

            <div className="ForecastContainer">
                <div className="WeeklyForecast">
                    <WeatherBox Day={"Today"} Icon={<IconSelector temp={CurrentForecast.condition.text} />} Temp={`${CurrentForecast.temp_c}°`} />
                    <WeatherBox Day={"Tomorow"} Icon={<IconSelector temp={NextDay[12].condition.text} />} Temp={`${NextDay[12].temp_c}°`} />
                    <WeatherBox Day={"Day After"} Icon={<IconSelector temp={dayAfter[12].condition.text} />} Temp={`${dayAfter[12].temp_c}°`} />

                </div>
                <div className="HourlyForecast">
                    <WeatherBox Day={"12 AM"} Icon={<IconSelector temp={HourlyWeather[0].condition.text} />} Temp={`${HourlyWeather[0].temp_c}°C`} />
                    <WeatherBox Day={"3 AM"} Icon={<IconSelector temp={HourlyWeather[3].condition.text} />} Temp={`${HourlyWeather[3].temp_c}°C`} />
                    <WeatherBox Day={"6 AM"} Icon={<IconSelector temp={HourlyWeather[6].condition.text} />} Temp={`${HourlyWeather[6].temp_c}°C`} />
                    <WeatherBox Day={"9 AM"} Icon={<IconSelector temp={HourlyWeather[9].condition.text} />} Temp={`${HourlyWeather[9].temp_c}°C`} />
                    <WeatherBox Day={"12 PM"} Icon={<IconSelector temp={HourlyWeather[12].condition.text} />} Temp={`${HourlyWeather[12].temp_c}°C`} />
                    <WeatherBox Day={"3 PM"} Icon={<IconSelector temp={HourlyWeather[15].condition.text} />} Temp={`${HourlyWeather[15].temp_c}°C`} />
                    <WeatherBox Day={"6 PM"} Icon={<IconSelector temp={HourlyWeather[18].condition.text} />} Temp={`${HourlyWeather[18].temp_c}°C`} />
                    <WeatherBox Day={"9 PM"} Icon={<IconSelector temp={HourlyWeather[21].condition.text} />} Temp={`${HourlyWeather[21].temp_c}°C`} />

                </div>
            </div>

        </>

    )
}




