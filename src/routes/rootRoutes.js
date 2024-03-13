import React from "react";
import Authentication from "../pages/auth/authentication";
import Footer from "../components/footer";
import YieldPrediction from "../pages/main/yieldPrediction/yieldPrediction";
import PricePrediction from "../pages/main/pricePrediction/pricePrediction";
import Otp from "../pages/otp/otp";

const RootRoutes = () => {
    return (
        <>
            {/* <Otp/> */}
            <Authentication/>
            {/* <Footer/> */}
            {/* <YieldPrediction/> */}
            {/* <PricePrediction/> */}
        </>
    )
}

export default RootRoutes;
