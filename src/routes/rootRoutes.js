import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Welcome from "../pages/welcome/welcome";




const RootRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome/>}/>

            </Routes>
        </Router>
    )
}

export default RootRoutes;
