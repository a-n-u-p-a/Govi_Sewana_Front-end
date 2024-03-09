import React from "react";

const CustomOtpBox = ({NAME, VALUE}) => {
    return(
        <div className={"container customOtpBoxMainSection"}>
            <input type="number" className={"customOtpBox"} name={NAME} value={VALUE}/>
        </div>
    )
}

export default CustomOtpBox;