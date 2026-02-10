import "./HealthAdvicePage.css"

import PagesHeader from "../../Components/PagesHeader/PagesHeader"
import PagesHeaderForMobile from "../../Components/PagesHeaderForMobile/PagesHeaderForMobile"
import Footer from "../../Components/Footer/Footer"
import ArticleBox from "../../Components/ArticleBox/ArticleBox"

export default function HealthAdvicePage() {
    return (
        <>

            <PagesHeader />
            <PagesHeaderForMobile />
            <main className='Main-Content'>

                <h1 className="HealthPageTitle">    Health Advice Group’s <br /> Health Advice Page</h1>

                <div className="HealthAdvicePageContent">
                    <div className="ContentBoxArea">

                        <div className="ContentsBox">
                            <h2> Contents</h2>
                            <a href="#HayfeverBox"> Hayfever Article </a>
                            <a href="#AsthmaBox"> Asthma Article</a>
                            <a href="#PollenBox"> Pollen Article</a>
                            <a href="#MouldBox"> Mould Article</a>
                            <a href="#AirPollutionBox"> Air Pollution Article</a>
                            <a href="#LinksBox"> Links Article</a>
                        </div>
                    </div>


                    {/* Uses the articles box framework and displays article data */}
                    <div className="ArticlesSection">
                        <ArticleBox ID="HayfeverBox" name={"Hayfever"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitationem a. Odio iste, expedita itaque natus quo."} Symptons={["Symptons1", "Symptons2", "Symptons3"]} Treatments={["Medicine", "rest"]} Link={"/"} className="ArticlesBoxOnHAP" />
                        <ArticleBox ID="AsthmaBox" name={"Asthma"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitationem a. Odio iste, expedita itaque natus quo."} Symptons={["Symptons1", "Symptons2", "Symptons3"]} Treatments={["Medicine", "rest"]} Link={"/"} className="ArticlesBoxOnHAP" />
                        <ArticleBox ID="PollenBox" name={"Pollen"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitationem a. Odio iste, expedita itaque natus quo."} Symptons={["Symptons1", "Symptons2", "Symptons3", "Sympton 4"]} Treatments={["Medicine", "rest"]} Link={"/"} className="ArticlesBoxOnHAP" />
                        <ArticleBox ID="AirPollutionBox" name={"Air Pollution"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitationem a. Odio iste, expedita itaque natus quo."} Symptons={["Symptons1", "Symptons2", "Symptons3"]} Treatments={["Medicine", "rest"]} Link={"/"} className="ArticlesBoxOnHAP" />
                        <ArticleBox ID="MouldBox" name={"Mould"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitationem a. Odio iste, expedita itaque natus quo."} Symptons={["Symptons1", "Symptons2", "Symptons3", "  Sympton 4"]} Treatments={["Medicine", "rest"]} Link={"/"} className="ArticlesBoxOnHAP" />
                        <LinkBox />
                    </div>


                </div>

            </main>
            <Footer />

        </>
    )
}

function LinkBox() {

    // Box component made to hold links
    return (
        <div className="HealthAdviceBox" id="LinksBox">
            <h2 className="HealthAdviceBoxTitle"> Useful Links </h2>
            <h3> Here are some useful Links you can use!</h3>
            <a href="https://www.gov.uk/check-long-term-flood-risk" className="UsefulLinkButton"> Check the long term flood risk for an area in England, Click Here! </a>
            <a href="https://www.gov.uk/check-coastal-erosion-management-in-your-area" className="UsefulLinkButton"> Check coastal erosion risk for an area in England, Click Here! </a>
        </div>
    )
}