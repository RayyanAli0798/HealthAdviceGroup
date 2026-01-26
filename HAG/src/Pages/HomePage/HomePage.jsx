import "./HomePage.css"
import PagesHeader from "../../Components/PagesHeader/PagesHeader"
import PagesHeaderForMobile from "../../Components/PagesHeaderForMobile/PagesHeaderForMobile"
import skyBackgroundHomePage from "../../assets/skyBackgroundHomePage.jpg"
import Footer from "../../Components/Footer/Footer"
import SelectorMenu from "../../Components/SelectorMenu/SelectorMenu"

export default function HomePage() {
    return (
        <>
            <PagesHeader />
            <PagesHeaderForMobile />
            <img src={skyBackgroundHomePage} className="BackgroundImageHomePage" />
            <div className="HomeContent">

                <h1 className="HealthPageTitle">    Health Advice Group’s <br /> Health Advice Page</h1>
                <SelectorMenu ItemsList={["London"]} className="LocationSelector" />

            </div>
            <Footer />
        </>
    )
}