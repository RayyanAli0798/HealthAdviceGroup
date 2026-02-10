import "./SelectorMenu.css"
import { useState } from "react"

export default function SelectorMenu({ ItemsList }) {

    const [location, setLocation] = useState(
        ItemsList.length ? ItemsList[0] : "no location"
    );

    return (
        <div className="dropdown">
            <button> Current Location:  {location}  </button>

            <div className="content">
                {ItemsList.map((item, index) => (
                    <p key={index} onClick={()=> (setLocation(item))}>  {item} </p>
                ))}

            </div>
        </div>
    )


    
}