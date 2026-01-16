import "./Footer.css"
import { Link } from "react-router"

export default function Footer() {
    return (
        <div className="FooterBox">
            <h2> Our policies </h2>
            <div className="Linkarea1">
                <nav className=" textLine">
                    <Link to="/" className="LinkText">  Privacy  </Link>
                    <Link to="/" className="LinkText"> | Terms and Conditions | </Link>
                    <Link to="/" className="LinkText"> Accessibillity  </Link>
                </nav>
                <nav className=" textLine2">
                    <Link to="/" className="LinkText"> Legal | </Link>
                    <Link to="/" className="LinkText"> Cookie </Link>
                </nav>
            </div>
            <h2> Useful Links </h2>
            <nav className=" textLine3">
                    <Link to="/" className="LinkText"> Accounts Page | </Link>
                    <Link to="/" className="LinkText"> Home Page </Link>
                </nav>


        </div>
    )
}