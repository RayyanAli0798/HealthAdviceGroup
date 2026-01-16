import "./PagesHeaderForMobile.css"
import { Link, NavLink } from 'react-router'
import Logo from "../../assets/Logo.png"
import MenuIcon from "../../assets/MenuIcon.svg"
import { useState } from "react"


export default function PagesHeaderForMobile() {
    const [openMenu, setOpenMenu] = useState(false)

    function toggleOpen() {
        setOpenMenu(!open)
    }

    let menuClassName = "menu-icon";
    if (openMenu) {
        menuClassName = "menu-icon open"
    }
    const navMenu = <nav className="NavButtons">
                <li> <Link to="/" className="NavBtn"> Homfffe </Link> </li>
                <li> <Link to="/accounts" className="NavBtn"> Sign up </Link></li>
                <li> <Link to="/" className="NavBtn"> Health Advice </Link></li>
            </nav>
    
    return (
        <div className="MobileHeaderBox">
            <img src={Logo} className="headerLogo" />

            <img onClick={toggleOpen} src={MenuIcon} className={menuClassName}  />
            {open ? navMenu : null}
        </div>

    )
}