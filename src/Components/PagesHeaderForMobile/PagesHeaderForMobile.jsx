import "./PagesHeaderForMobile.css"
import { Link, NavLink } from 'react-router'
import Logo from "../../assets/Logo.png"
import MenuIcon from "../../assets/MenuIcon.svg"
import { useState } from "react"
import { useUser } from "../../Contexts/UserContexts"


export default function PagesHeaderForMobile() {
    const [openMenu, setOpenMenu] = useState(false) // controls the button which opens the buttons menu


    const { LoggedIn, SetLoggedIn } = useUser(); // This is so when user is logged in, the value changes which changes the header

    function toggleOpen() {
        setOpenMenu(!openMenu)
    }

    // controls classname which rotates button onclick
    let menuClassName = "menu-icon";
    if (openMenu) {
        menuClassName = "menu-icon open"
    }

    // Displays onclick of button
    const navMenu = <nav className="NavButtonsforMobile">
        <li> <Link to="/" className="NavBtn"> Home </Link> </li>
        { LoggedIn ? <li onClick={()=> SetLoggedIn(false)}> <Link to="/accounts" className="NavBtn"> Log out </Link> </li> : <li> <Link to="/accounts" className="NavBtn"> Sign up </Link></li>}
        <li> <Link to="/HAP" className="NavBtn"> Health Advice </Link></li>
    </nav>

    
    return (
        <header className="MobileHeaderBox">
            <img src={Logo} className="headerLogo" />

            <img onClick={toggleOpen} src={MenuIcon} className={menuClassName} />
            {openMenu ? navMenu : null}
        </header>

    )
}