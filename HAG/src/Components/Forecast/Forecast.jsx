import "./Forecast.css"
// import cloudIcon from "../../assets/cloudIcon"


export default function Forecast() {


    return (
        <>

            <div className="ForecastContainer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, est facilis? Architecto consequuntur natus aliquid illo? Recusandae fugiat doloremque omnis eligendi ratione minus! Ad veritatis, dolores dolorem animi tempora nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, et quia corporis quis quas cupiditate nam inventore asperiores, illum fugit in dicta consequuntur. Nemo iusto consequatur eaque molestiae, eos excepturi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quas vero iusto quia voluptatem praesentium fugit tempore veritatis dolorum? Quibusdam nam omnis dolor, sed ea quod aliquam error labore reiciendis.
                {/* <WeatherBox/> */}
            </div>

        </>
    )
}


function WeatherBox() {

    return (
        <>
            <div className="WeatherBoxDaily">

                <h3> Day </h3>
                <img src={cloudIcon} className="weatherImage" />
                <p> Tempreture </p>

            </div>
        </>
    )
}