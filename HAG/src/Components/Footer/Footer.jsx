import "./Footer.css"
import { Link } from "react-router"

export default function Footer() {
    return (
        <div className="FooterBox">
            <h2> Our Policies </h2> 
            <div className="Linkarea1">
                <nav className=" textLine">
                    <Link to="/TNC" className="LinkText">  Privacy  </Link>
                    <Link to="/TNC" className="LinkText"> | Terms and Conditions | </Link>
                    <Link to="/TNC" className="LinkText"> Accessibillity  </Link>
                </nav>
                <nav className=" textLine2">
                    <Link to="/TNC" className="LinkText"> Legal | </Link>
                    <Link to="/TNC" className="LinkText"> Cookie </Link>
                </nav>
            </div>
            <h2> Useful Links </h2>
            <nav className=" textLine3">
                    <Link to="/accounts" className="LinkText"> Accounts Page | </Link>
                    <Link to="/" className="LinkText"> Home Page </Link>
                </nav>


        </div>
    )
}