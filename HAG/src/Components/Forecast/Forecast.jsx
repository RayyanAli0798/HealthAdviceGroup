import "./Forecast.css"


function WeatherBox() {
    return (
        <div className="WeatherBoxDaily">
            <h3> Day </h3>
            <img src="../../assets/SunIcon.png" className="WeatherIcon" />
            <p> Temp </p>

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


