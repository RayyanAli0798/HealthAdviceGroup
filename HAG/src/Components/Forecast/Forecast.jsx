import "./Forecast.css"
import RainIcon from "../../assets/RainIcon.png"
import { useState, useEffect } from "react"
import axios from "axios"



function WeatherBox({ Day, Icon, Temp }) {
    return (
        <div className="WeatherBoxDaily">
            <h3> {Day} </h3>
            <img src={Icon} className="WeatherIcon" />
            <p> {Temp} </p>

        </div>
    )
}


export default function Forecast() {


    return (
        <DisplayTemp />
    )
}



function DisplayTemp() {

    const [ForecastLoading, setForecastLoading] = useState(true)
    const [ForecastLoadingError, setForecastLoadingError] = useState("")
    const [rawForecastData, setRawForecastData] = useState()
    const [HourlyWeather, setHourlyWeather] = useState()
    const [CurrentForecast, setCurrentForecast] = useState()    
    const [NextDay , setNextDay] = useState()
    const [dayAfter , setDayAfter] = useState()

    function loadTemp() {

        let query = `https://api.weatherapi.com/v1/forecast.json?key=c7d1b9c8de5745baa89152929260502&q=London&days=3&aqi=no&alerts=no`

        setForecastLoadingError("")
        setForecastLoading(true)

        axios.get(query)
            .then(res => {

                let hours = res.data.forecast.forecastday[0].hour;
                let setNextDay = res.data.forecast.forecastday[1].hour;
                let setDayAfter = res.data.forecast.forecastday[1].hour;

                let HourlyData = hours.map(hour => ({
                    time: hour.time,
                    temp_c: hour.temp_c,
                    temp_f: hour.temp_f,
                    is_day: hour.is_day,
                    condition: hour.condition
                }));
                
                setCurrentForecast(res.data.current)
                setHourlyWeather(HourlyData)
                

            })
            .catch(err => {
                setForecastLoadingError("Something went wrong")
            })
            .finally(() => {
                setForecastLoading(false)
            })
    }

    useEffect(() => {
        loadTemp();
    }, [])


    if (ForecastLoading) {
        return (
            <>

                <div className="ForecastContainer">
                    <div className="WeeklyForecast">
                        UNABLE TO LOAD
                    </div>
                    <div className="HourlyForecast">
                        UNABLE TO LOAD
                    </div>
                </div>

            </>
        )
    }

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

    console.log(HourlyWeather)
    return (
        <>

            <div className="ForecastContainer">
                <div className="WeeklyForecast">
                    <WeatherBox Day={"Today"} Icon={RainIcon} Temp={`${CurrentForecast.temp_c}°`} />
                    <WeatherBox Day={"Tomorow"} Icon={RainIcon} Temp={`${CurrentForecast.temp_c}°`} />
                    <WeatherBox Day={"Day After"} Icon={RainIcon} Temp={`${CurrentForecast.temp_c}°`} />

                </div>
                <div className="HourlyForecast">
                    <WeatherBox Day={"12 AM"} Icon={RainIcon} Temp={`${HourlyWeather[0].temp_c}°C`} />
                    <WeatherBox Day={"3 AM"} Icon={RainIcon} Temp={`${HourlyWeather[3].temp_c}°C`} />
                    <WeatherBox Day={"6 AM"} Icon={RainIcon} Temp={`${HourlyWeather[6].temp_c}°C`} />
                    <WeatherBox Day={"9 AM"} Icon={RainIcon} Temp={`${HourlyWeather[9].temp_c}°C`} />
                    <WeatherBox Day={"12 PM"} Icon={RainIcon} Temp={`${HourlyWeather[12].temp_c}°C`} />
                    <WeatherBox Day={"3 PM"} Icon={RainIcon} Temp={`${HourlyWeather[15].temp_c}°C`} />
                    <WeatherBox Day={"6 PM"} Icon={RainIcon} Temp={`${HourlyWeather[18].temp_c}°C`} />
                    <WeatherBox Day={"9 PM"} Icon={RainIcon} Temp={`${HourlyWeather[21].temp_c}°C`} />

                </div>
            </div>

        </>

    )
}




