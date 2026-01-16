import "./PagesHeader.css"
import { Link, NavLink } from 'react-router'
import Logo from "../../assets/Logo.png"


export default function PagesHeader() {
    return (
        <div className="headerBox">
            <img src={Logo} className="headerLogo" />

            <nav className="NavButtons">
                <li> <Link to="/" className="NavBtn"> Home </Link> </li>
                <li> <Link to="/accounts" className="NavBtn"> Sign up </Link></li>
                <li> <Link to="/HAP" className="NavBtn"> Health Advice </Link></li>
            </nav>
        </div>

    )
}