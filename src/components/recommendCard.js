import React from "react";
// import {useState} from "react";
// import commonConfig from '../config/commonConfig.json';
import CustomRecCardInput from "./customRecCardInput";
import CustomButton from "./customButton";

const RecommendCard = ({SOURCE_IMG, ALT_IMG, ITEM_NAME}) => {

    // const [selectedLanguage, setSelectedLanguage] = useState(() => {
    //     return localStorage.getItem('selectedLanguage') || 'ENG';
    // });
    //
    // useEffect(() => {
    //     const langValue = localStorage.getItem('selectedLanguage');
    //     if (langValue !== null) {
    //         setSelectedLanguage(langValue)
    //     }
    // }, []);

    return (
        <div className={"container custom_rec_card_section"}>
            <div className={"custom_rec_card_mini flex_center flex_col"}>

                <div className={"custom_rec_card_img_section flex_center"}>
                    <img src={SOURCE_IMG} alt={ALT_IMG} className={"custom_rec_card_img"}/>
                </div>
                <h2> {ITEM_NAME} </h2>
                <div className={"custom_rec_card_separator"}/>
                <CustomRecCardInput TITLE={"Market Demand :-"} VALUE={"9"}/>
                <CustomRecCardInput TITLE={"Current Crop Yield :-"} VALUE={"3"}/>
                <CustomRecCardInput TITLE={"Required Crop Yield :-"} VALUE={"7"}/>
                <div className={"custom_rec_button_section"}>
                    <CustomButton CLASS_NAME={"customButton"} BTN_NAME={"Select the Crop"}
                                  STYLE={{backgroundColor: 'white', color: 'green'}}/>
                </div>

            </div>
        </div>
    )
}

export default RecommendCard;
