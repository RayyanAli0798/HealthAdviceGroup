import { Routes, Route } from "react-router-dom";
import HomePage from "./src/Pages/HomePage/HomePage";
import AccountsPage from "./src/Pages/AccountsPage/AccountsPage";
import TermsAndConditionsPage from "./src/Pages/TermsAndConditionsPage/TermsAndConditionsPage";
import HealthAdvicePage from "./src/Pages/HealthAdvicePage/HealthAdvicePage";
import ScrollToTop from "./src/Components/ScrollToTop";


export default function Pages() {

    return (
        // setting up our pages 
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/TNC" element={<TermsAndConditionsPage />} />
                <Route path="/accounts" element={<AccountsPage />} />
                <Route path="/HAP" element={<HealthAdvicePage />} />
            </Routes>
        </>
    )

}