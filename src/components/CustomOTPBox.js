import React from "react";
import '../pages/OtpPage/OtpPage.css'

const CustomOTPBox = ({NAME, VALUE}) => {
    return (
        <input type="text" maxLength="1" name={NAME} value={VALUE}/>
    )
}

export default CustomOTPBox;
