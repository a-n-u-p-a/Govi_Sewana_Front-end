import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Welcome from "../pages/welcome/welcome";
import Account from "../pages/account/account";

const RootRoutes = () => {
    return (
        <Router>
            <Routes>
                                          
                <Route path="/account" element={<account/>}/>
            </Routes>
        </Router>
    )
}

export default RootRoutes;
