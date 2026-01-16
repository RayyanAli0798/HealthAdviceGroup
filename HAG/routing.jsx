import { Routes, Route } from "react-router";
import HomePage from "./src/Pages/HomePage/HomePage";
import AccountsPage from "./src/Pages/AccountsPage/AccountsPage";
import TermsAndConditionsPage from "./src/Pages/TermsAndConditionsPage/TermsAndConditionsPage";
import HealthAdvicePage from "./src/Pages/HealthAdvicePage/HealthAdvicePage";

export default function Pages() {

    return (
        // setting up our pages 
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="TNC" element={<TermsAndConditionsPage/>} />
            <Route path="accounts" element={<AccountsPage />} />
            <Route path="HAP" element={<HealthAdvicePage />} />
        </Routes>
    )

}