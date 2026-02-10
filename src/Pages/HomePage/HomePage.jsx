import "./HomePage.css"
import PagesHeader from "../../Components/PagesHeader/PagesHeader"
import PagesHeaderForMobile from "../../Components/PagesHeaderForMobile/PagesHeaderForMobile"
import skyBackgroundHomePage from "../../assets/skyBackgroundHomePage.jpg"
import Footer from "../../Components/Footer/Footer"
import SelectorMenu from "../../Components/SelectorMenu/SelectorMenu"
import Forecast from "../../Components/Forecast/Forecast"
import Dashboard from "../../Components/Dashboard/Dashboard"
import IconSelector from "../../Components/IconSelector/IconSelector"

export default function HomePage() {
    return (
        <>
            <PagesHeader />
            <PagesHeaderForMobile />

            <main className='Main-Content'>
                {/* The background image for the page */}
                <img src={skyBackgroundHomePage} className="BackgroundImageHomePage" />

                <div className="HomeContent">

                    <h1 className="HealthPageTitle">    Health Advice Group’s <br /> Home Page</h1>
                    <SelectorMenu ItemsList={["London"]} className="LocationSelector" />

                    <Forecast />
                    <Dashboard />
                </div>

            </main>


            <Footer />
        </>
    )
}