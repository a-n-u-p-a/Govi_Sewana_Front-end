import React from "react";
import '../assets/css/components.css';

const CustomTextField = ({LABEL_NAME, PLACEHOLDER, icon}) => {

    const IconComponent = icon;

    return (
        <>
            <div className={"input-label"}>
                <p className={"input-label-text"}>{LABEL_NAME}</p>
            </div>
            <div className="input-container">
                <input type="text" placeholder={PLACEHOLDER}/>
                <IconComponent className="icon"/>
            </div>
        </>
    )
}

export default CustomTextField;
