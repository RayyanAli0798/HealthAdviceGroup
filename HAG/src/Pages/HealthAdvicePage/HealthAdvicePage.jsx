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

                    </div>
                </div>

                <div className="ArticlesSection">
                    <ArticleBox name={"Hayfever"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitationem a. Odio iste, expedita itaque natus quo."} Symptons={["booddm", "another one", "another one"]} Treatments={["Medicine", "rest"]} Link={"/"} className="ArticlesBoxOnHAP" />
                    <ArticleBox name={"Hayfever"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitationem a. Odio iste, expedita itaque natus quo."} Symptons={["booddm", "another one", "another one"]} Treatments={["Medicine", "rest"]} Link={"/"} className="ArticlesBoxOnHAP" />
                    <ArticleBox name={"Hayfever"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitationem a. Odio iste, expedita itaque natus quo."} Symptons={["booddm", "another one", "another one"]} Treatments={["Medicine", "rest"]} Link={"/"} className="ArticlesBoxOnHAP" />
                    <ArticleBox name={"Hayfever"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitationem a. Odio iste, expedita itaque natus quo."} Symptons={["booddm", "another one", "another one"]} Treatments={["Medicine", "rest"]} Link={"/"} className="ArticlesBoxOnHAP" />
                    <ArticleBox name={"Hayfever"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitationem a. Odio iste, expedita itaque natus quo."} Symptons={["booddm", "another one", "another one"]} Treatments={["Medicine", "rest"]} Link={"/"} className="ArticlesBoxOnHAP" />
                    <ArticleBox name={"Hayfever"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitationem a. Odio iste, expedita itaque natus quo."} Symptons={["booddm", "another one", "another one"]} Treatments={["Medicine", "rest"]} Link={"/"} className="ArticlesBoxOnHAP" />
                </div>
            </div>

            </main>
            <Footer />

        </>
    )
}