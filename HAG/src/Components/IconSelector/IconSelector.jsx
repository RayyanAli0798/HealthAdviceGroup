import { useState, useEffect } from "react";
import Cloud from "../../assets/CloudIcon.png"
import Rain from "../../assets/RainIcon.png"
import Snow from "../../assets/SnowIcon.png"
import Sun from "../../assets/SunIcon.png"
import Thunder from "../../assets/ThunderstormIcon.png"
import Wind from "../../assets/WindIcon.png"
import Night from "../../assets/NightIcon.png"
import PartiallyCLoudy from "../../assets/PartiallyCloudyIcon.png"


export default function IconSelector({temp}) {

    const [CurrentIcon, SetIcon] = useState()


    // This use effect and conditional statements assign icons based on what he prop (in this case weather condition) is
    useEffect(() => {
        if (temp === "Sunny") {
            SetIcon(Sun);
        }
        else if (temp == "Partly cloudy") {
            SetIcon(PartiallyCLoudy)
        }
        else if (temp == "Cloudy") {
            SetIcon(Cloud)  
        }
        else if (temp == "Mist") {
            SetIcon(Cloud)
        }
        else if (temp == "Overcast ") {
            SetIcon(Cloud)
        }
        else if (temp == "Patchy rain possible") {
            SetIcon(Rain)
        }
        else if (temp == "Patchy snow possible") {
            SetIcon(Snow)
        }
        else if (temp == "Patchy sleet possible") {
            SetIcon(Snow)
        }
        else if (temp == "Patchy freezing drizzle possible") {
            SetIcon(Rain)
        }
        else if (temp == "Thundery outbreaks possible") {
            SetIcon(Thunder)
        }
        else if (temp == "Blowing snow") {
            SetIcon(Snow)
        }
        else if (temp == "Blizzard") {
            SetIcon(Snow)
        }
        else if (temp == "Fog") {
            SetIcon(Wind)
        }
        else if (temp == "Freezing fog") {
            SetIcon(Wind)
        }
        else if (temp == "Patchy light drizzle") {
            SetIcon(Rain)
        }
        else if (temp == "Light drizzle") {
            SetIcon(Rain)
        }
        else if (temp == "Freezing drizzle") {
            SetIcon(Rain)
        }
        else if (temp == "Heavy freezing drizzle") {
            SetIcon(Rain)
        }
        else if (temp == "Patchy light rain") {
            SetIcon(Rain)
        }
        else if (temp == "Light rain") {
            SetIcon(Rain)
        }
        else if (temp == "Moderate rain at times") {
            SetIcon(Rain)
        }
        else if (temp == "Moderate rain") {
            SetIcon(Rain)
        }
        else if (temp == "Heavy rain at times") {
            SetIcon(Rain)
        }
        else if (temp == "Heavy rain") {
            SetIcon(Rain)
        } else if (temp == "Light freezing rain") {
            SetIcon(Rain)
        }
        else if (temp == "Moderate or heavy freezing rain") {
            SetIcon(Rain)
        }
        else if (temp == "Light sleet") {
            SetIcon(Snow)
        }
        else if (temp == "Moderate or heavy sleet") {
            SetIcon(Snow)
        }
        else if (temp == "Patchy light snow") {
            SetIcon(Snow)
        } else if (temp == "Light snow") {
            SetIcon(Snow)
        }
        else if (temp == "Patchy moderate snow") {
            SetIcon(Snow)
        }
        else if (temp == "Moderate snow") {
            SetIcon(Snow)
        }
        else if (temp == "Patchy heavy snow") {
            SetIcon(Snow)
        }
        else if (temp == "Heavy snow") {
            SetIcon(Snow)
        } else if (temp == "Ice pellets") {
            SetIcon(Snow)
        }
        else if (temp == "Light rain shower") {
            SetIcon(Rain)
        }
        else if (temp == "Moderate or heavy rain shower") {
            SetIcon(Rain)
        }
        else if (temp == "Torrential rain shower") {
            SetIcon(Rain)
        }
        else if (temp == "Light sleet showers") {
            SetIcon(Snow)
        }
        else if (temp == "Moderate or heavy sleet showers") {
            SetIcon(Snow)
        }
        else if (temp == "Light snow showers") {
            SetIcon(Snow)
        }
        else if (temp == "Moderate or heavy snow showers") {
            SetIcon(Snow)
        }
        else if (temp == "Light showers of ice pellets") {
            SetIcon(Snow)
        }
        else if (temp == "Moderate or heavy showers of ice pellets") {
            SetIcon(Snow)
        }
        else if (temp == "Patchy light rain with thunder") {
            SetIcon(Thunder)
        }
        else if (temp == "Moderate or heavy rain with thunder") {
            SetIcon(Thunder)
        }
        else if (temp == "Patchy light snow with thunder") {
            SetIcon(Thunder)
        }
        else if (temp == "Moderate or heavy snow with thunder") {
            SetIcon(Thunder)
        }
        else if(temp == "Patchy rain nearby"){
            SetIcon(Rain)
        }
        else{
            SetIcon(Night) 
        }
    }, [temp]);

    
    return (
        <>
        {/* returns the respective image */}
            <img className="WeatherIcon" src={CurrentIcon} alt={temp}/>
        </>
    )
}
