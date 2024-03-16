import React from "react";
import CustomButton from "./customButton";

const CultivationCard = ({SOURCE_IMG, ALT_IMG, TITLE, BTN_READ_MORE}) => {
    return (
        <div className={"custom_cultivation_main flex_center flex_col"}>

            <div className={"custom_cul_img_section flex_center"}>
                <img src={SOURCE_IMG} alt={ALT_IMG} className={"custom_cul_img"}/>
            </div>

            <h3> {TITLE} </h3>

            <div className={"custom_cul_separator"}/>

            <p className={"custom_cul_p"}>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit elit.
            </p>

            <div className={"custom_cul_button_section flex_center"}>
                <CustomButton BTN_NAME={"Read more"} CLASS_NAME={"customButton custom_cul_button"} ON_CLICK={BTN_READ_MORE}/>
            </div>

        </div>
    )
}

export default CultivationCard;
