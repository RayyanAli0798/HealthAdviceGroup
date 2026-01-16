import { Routes, Route } from "react-router";
import HomePage from "./src/Pages/HomePage/HomePage";
import AccountsPage from "./src/Pages/AccountsPage/AccountsPage";

export default function Pages() {

    return (

        <Routes>
            <Route index element={<HomePage />} />
            <Route path="accounts" element={<AccountsPage />} />
        </Routes>
    )

}