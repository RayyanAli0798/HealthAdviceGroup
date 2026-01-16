import "./PagesHeaderForMobile.css"
import { Link, NavLink } from 'react-router'
import Logo from "../../assets/Logo.png"
import MenuIcon from "../../assets/MenuIcon.svg"
import { useState } from "react"


export default function PagesHeaderForMobile() {
    const [openMenu, setOpenMenu] = useState(false)

    function toggleOpen() {
        setOpenMenu(!openMenu)
    }

    let menuClassName = "menu-icon";
    if (openMenu) {
        menuClassName = "menu-icon open"
    }
    const navMenu = <nav className="NavButtonsforMobile">
                <li> <Link to="/" className="NavBtn"> Home </Link> </li>
                <li> <Link to="/accounts" className="NavBtn"> Sign up </Link></li>
                <li> <Link to="/HAP" className="NavBtn"> Health Advice </Link></li>
            </nav>
    
    return (
        <header className="MobileHeaderBox">
            <img src={Logo} className="headerLogo" />

            <img onClick={toggleOpen} src={MenuIcon} className={menuClassName}  />
            {openMenu ? navMenu : null}
        </header>

    )
}