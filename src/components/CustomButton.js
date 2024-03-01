import React from "react";
import '../assets/css/components.css';

const CustomButton = ({BTN_NAME, STYLE}) => {
    return (
        <button className={"custom_button"} style={STYLE}>
            {BTN_NAME}
        </button>
    )
}

export default CustomButton;