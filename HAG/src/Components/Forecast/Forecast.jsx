import "./Forecast.css"
import RainIcon from "../../assets/RainIcon.png"


function WeatherBox() {
    return (
        <div className="WeatherBoxDaily">
            <h3> Day </h3>
            <img src={RainIcon} className="WeatherIcon"/>
            <p> 1-23c </p>

        </div>
    )
}

export default function Forecast() {


    return (
        <>

            <div className="ForecastContainer">
                <div className="WeeklyForecast">
                    <WeatherBox />
                    <WeatherBox />
                    <WeatherBox />
                    <WeatherBox />
                    <WeatherBox />
                    <WeatherBox />
                    <WeatherBox />
                    
                </div>
                <div className="HourlyForecast">
                    <WeatherBox />
                    <WeatherBox />
                    <WeatherBox />
                    <WeatherBox />
                    <WeatherBox />
                    <WeatherBox />
                    <WeatherBox />
                    <WeatherBox />
                    
                </div>
            </div>

        </>
    )
}






