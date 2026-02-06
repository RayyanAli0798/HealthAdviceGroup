import "./Footer.css"
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
    return (
        <div className="FooterBox">
            <h2> Our Policies </h2> 
            <div className="Linkarea1">
                <nav className=" textLine">
                    {/* Hash link is used to onclick, user is redirected goes to a specific part of the page */}
                    <HashLink smooth to="/TNC#PrivacyPolicyBox" className="LinkText">  Privacy  </HashLink>
                    <HashLink smooth to="/TNC#TermsAndConditionsBox" className="LinkText"> | Terms and Conditions | </HashLink>
                    <HashLink smooth to="/TNC#AccessibillityStatementBox" className="LinkText"> Accessibillity  </HashLink>
                </nav>
                <nav className=" textLine2">
                    <HashLink smooth to="/TNC#LegalPolicyBox" className="LinkText"> Legal |</HashLink>
                    <HashLink smooth to="/TNC#CookiePolicyBox" className="LinkText"> Cookie </HashLink>
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