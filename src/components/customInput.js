import React from "react";

const CustomInput = ({LABEL_NAME, PLACEHOLDER, icon, STYLE}) => {

    const IconComponent = icon;

    return (
        <div className={"customInput flex_center flex_col res_custom_input"}>

            <div className={"customInputLabel"}>
                <p className={"customInputLabelName"} style={STYLE}>{LABEL_NAME}</p>
            </div>

            <div className="customInputSection flex_center">
                <input type="text" placeholder={PLACEHOLDER} className={"customInputField"}/>
                <IconComponent className="customInputIcon"/>
            </div>

        </div>

    )
}

export default CustomInput;