import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Welcome from "../pages/welcome/welcome";

import MainForm from "../pages/main/mainForm";


const RootRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/main" element={<MainForm/>}/>
            </Routes>
        </Router>
    )
}

export default RootRoutes;
