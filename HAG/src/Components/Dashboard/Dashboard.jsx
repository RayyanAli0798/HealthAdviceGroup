import { useEffect, useState } from "react"
import "./Dashboard.css"


export default function Dashboard() {

    const [airQualityClassName, setAirQualityClassName] = useState("")
    const [airQualityRatingInWords, SetAirQualityRatingInWords] = useState("")
    const [airQualityTitleClassname, setAirQualityTitleClassname] = useState("")

    const AirQualityRating = "2"
    useEffect(() => {

        if (AirQualityRating == 1) {
            setAirQualityClassName("green")
            SetAirQualityRatingInWords("Very Good")
            setAirQualityTitleClassname("Green")
        }
        else if (AirQualityRating == 2) {
            setAirQualityClassName("yellow")
            SetAirQualityRatingInWords("Moderate")
            setAirQualityTitleClassname("Yellow")
        }
        else if (AirQualityRating == 3) {
            setAirQualityClassName("orange")
            SetAirQualityRatingInWords("Unhealthy")
            setAirQualityTitleClassname("Orange")
        }
        else if (AirQualityRating == 4) {
            setAirQualityClassName("red")
            SetAirQualityRatingInWords("Very Unhealthy")
            setAirQualityTitleClassname("Red")
        }
        else if (AirQualityRating == 5) {
            setAirQualityClassName("purple")
            SetAirQualityRatingInWords("Hazardous")
            setAirQualityTitleClassname("Purple")
        }
    }, [])

    let AirQualityIndicator = "AirQualityCircle" + " " + airQualityClassName
    let AirQualityTitle = airQualityTitleClassname + " " + "AirQualityTitleInBox"
    

    return (

        <div className="DashboardContainer">
            <span className="DashboardTitle">
                <h2> Today’s Conditions </h2>
            </span>

            <div className="MainDashboardContent">
                <div className="LeftDashboard">
                    <div className="DashboardBox">

                        <h3 className="ConditionsTitles"> Air Quality </h3>
                        <div className="AirQualityContent">
                            <p className={AirQualityIndicator}> {AirQualityRating} </p>

                            <div className="AirQualityInfo">
                                <h3 className={AirQualityTitle}> {airQualityRatingInWords}</h3>
                                <p> CO: 201 µg/m³</p>
                                <p> PM10: 0.54 µg/m³</p>
                                <p> PM2.5: 0.5 µg/m³</p>
                            </div>

                        </div>


                    </div>
                </div>

                <div className="rightDashboard">
                    <div className="DashboardBox">
                        <h3 className="ConditionsTitles"> Wind Speed</h3>
                        <p className="BoxContents"> 10MPH </p>
                    </div>

                    <div className="DashboardBox">
                        <h3 className="ConditionsTitles"> Humidity</h3>
                        <p className="BoxContents"> 25% </p>
                    </div>
                </div>
            </div>



        </div>

    )
}


