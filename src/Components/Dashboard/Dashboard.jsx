import { useEffect, useState } from "react"
import "./Dashboard.css"
import axios from "axios";

export default function Dashboard() {

    return (
        // This is where Dashboard components are displayed
        <div className="DashboardContainer">
            <span className="DashboardTitle">
                <h2> Today's Conditions </h2>
            </span>

            <div className="MainDashboardContent">
                <div className="LeftDashboard">
                    <AirQualityDisplay />
                </div>

                <div className="rightDashboard">
                    <HumidityWindSpeedDisplay />
                </div>
            </div>



        </div>

    )
}


function AirQualityDisplay() {

    // Use state to help store data from api
    const [airQualityClassName, setAirQualityClassName] = useState("")
    const [airQualityRatingInWords, SetAirQualityRatingInWords] = useState("")
    const [airQualityTitleClassname, setAirQualityTitleClassname] = useState("")

    const [AirQualityRating, setAirQualityRating] = useState();


    // Use effect handles all the conditions, conditions are needed so that the dashboard is more customized based on api response
    useEffect(() => {

        if (AirQualityRating == 1) {
            setAirQualityClassName("green")
            SetAirQualityRatingInWords("Very Good")
            setAirQualityTitleClassname("Green")
        }
        else if (AirQualityRating == 2.0) {
            setAirQualityClassName("yellow")
            SetAirQualityRatingInWords("Moderate")
            setAirQualityTitleClassname("Yellow")
        }
        else if (AirQualityRating == 3) {
            setAirQualityClassName("orange")
            SetAirQualityRatingInWords("Unhealthy")
            setAirQualityTitleClassname("Orange")
        }
        else if (AirQualityRating == 4.0) {
            setAirQualityClassName("red")
            SetAirQualityRatingInWords("Very Unhealthy")
            setAirQualityTitleClassname("Red")
        }
        else if (AirQualityRating == 5) {
            setAirQualityClassName("purple")
            SetAirQualityRatingInWords("Hazardous")
            setAirQualityTitleClassname("Purple")
        }
    }, [AirQualityRating])

    // Use states that control what is displayed on the screen
    const [airData, setAirData] = useState();
    const [airDataLoading, setAirDataLoading] = useState(true);
    const [airDataError, setAirDataError] = useState("");


    // Uses axios to call an API
    function loadAir() {
        let query = `http://api.openweathermap.org/data/2.5/air_pollution?lat=51.52&lon=-0.127&appid=1dad6eab579ab34721c82203b48d18f5`

        setAirDataLoading(true)
        setAirDataError("")

        axios.get(query)
            .then(res => {
                setAirData(res.data.list[0]);
                setAirQualityRating(res.data.list[0].main.aqi)
            }).catch(err => {
                setAirDataError("something went wrong")
            }).finally(() => {
                setAirDataLoading(false)
            })
    }

    // calls the function here
    useEffect(() => {
        loadAir();
    }, [])


    // Returned before api data is called
    if (airDataLoading) {
        return (
            <div className="DashboardBox">

                <h3 className="ConditionsTitles"> Air Quality </h3>
                <p>Loading...</p>
            </div>
        )
    }
    // Returned After error
    if (airDataError) {
        return (
            <div className="DashboardBox">

                <h3 className="ConditionsTitles"> Air Quality </h3>
                <p>Error: {airDataError}</p>
            </div>
        )
    }

    // creates classnames
    let AirQualityIndicator = "AirQualityCircle" + " " + airQualityClassName
    let AirQualityTitle = airQualityTitleClassname + " " + "AirQualityTitleInBox"


    return (
        <div className="DashboardBox">
            <h3 className="ConditionsTitles"> Air Quality </h3>
            <div className="AirQualityContent">
                <p className={AirQualityIndicator}> {AirQualityRating} </p>

                <div className="AirQualityInfo">
                    <h3 className={AirQualityTitle}> {airQualityRatingInWords}</h3>
                    <p> CO: {airData.components.co} µg/m³ </p>
                    <p> PM10: {airData.components.pm2_5} µg/m³</p>
                    <p> PM2.5: {airData.components.pm10} µg/m³</p>
                </div>

            </div>


        </div>
    )
}


function HumidityWindSpeedDisplay() {

    // api data will store here
    const [humidity, setHumidity] = useState();
    const [WindSpeed, setWindSpeed] = useState();
    const [HumidityWindSpeedDataLoading, setHumidityWindSpeedDataLoading] = useState(true);
    const [HumidityWindSpeedDataError, setHumidityWindSpeedDataError] = useState("");

    //uses axios to call the api
    function loadHumidityWindSpeed() {
        let query = `https://api.openweathermap.org/data/2.5/weather?lat=51.52&lon=-0.127&appid=1dad6eab579ab34721c82203b48d18f5`

        setHumidityWindSpeedDataLoading(true)
        setHumidityWindSpeedDataError("")

        axios.get(query)
            .then(res => {
                setHumidity(res.data.main.humidity)
                setWindSpeed(res.data.wind.speed)
            }).catch(err => {
                setAirDataError("something went wrong")
            }).finally(() => {
                setHumidityWindSpeedDataLoading(false)
            })
    }

    //calls the api calling function
    useEffect(() => {
        loadHumidityWindSpeed();
    }, [])

    // handles what the users see pre api data load
    if (HumidityWindSpeedDataLoading) {
        return (
            <>
                <div className="DashboardBox">
                    <h3 className="ConditionsTitles"> Wind Speed</h3>
                    <p className="BoxContents"> Loading... </p>
                </div>

                <div className="DashboardBox">
                    <h3 className="ConditionsTitles"> Humidity</h3>
                    <p className="BoxContents"> Loading... </p>
                </div>

            </>
        )
    }
    //handles what users see when data cannot be loaded
    if (HumidityWindSpeedDataError) {
        return (
            <>
                <div className="DashboardBox">
                    <h3 className="ConditionsTitles"> Wind Speed</h3>
                    <p className="BoxContents"> Error... </p>
                </div>

                <div className="DashboardBox">
                    <h3 className="ConditionsTitles"> Humidity</h3>
                    <p className="BoxContents"> Error... </p>
                </div>

            </>
        )
    }

    //returns after data is loaded
    return (
        <>
            <div className="DashboardBox">
                <h3 className="ConditionsTitles"> Wind Speed</h3>
                <p className="BoxContents"> {WindSpeed} MPH </p>
            </div>

            <div className="DashboardBox">
                <h3 className="ConditionsTitles"> Humidity</h3>
                <p className="BoxContents"> {humidity}% </p>
            </div>
        </>
    )


}