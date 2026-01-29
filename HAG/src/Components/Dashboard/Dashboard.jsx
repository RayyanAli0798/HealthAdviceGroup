import "./Dashboard.css"


export default function Dashboard() {



    return (
        <div className="DashboardBoxs">
            <h1 className="DashboardTitle"> Today's Conditions </h1>

            <div className="DashboardInformations">
                <div className="leftsideofDashboard">
                    <div className="DashboardBox">
                        <h2 className="DashboardBoxTitle"> Air Quality </h2>
                        
                        <AirQualityImage/>

                        
                    </div>
                </div>

                <div className="RightSideOfDashboard">
                    <div className="DashboardBox">
                        <h2 className="DashboardBoxTitle"> Humidity </h2>
                        <p className="DashboardBoxContent"> 58%</p>
                    </div>


                    <div className="DashboardBox">
                        <h2 className="DashboardBoxTitle"> Wind </h2>
                        <p className="DashboardBoxContent"> 12 MPH</p>
                    </div>
                </div>
            </div>
        </div>



    )
}


function AirQualityImage({AirQualityRating}){


    return(
        {AirQualityRating}
    )
}