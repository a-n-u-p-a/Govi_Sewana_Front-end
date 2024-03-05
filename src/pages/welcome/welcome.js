import React from "react";
import './welcome.css';
import wel_Logo from '../../assets/images/logo.png';
import wel_Name_Logo from '../../assets/images/govisewana.png';
import CustomTitle from "../../components/customTitle";
import commonConfig from '../../config/commonConfig.json';
import CustomButton from "../../components/customButton";

const Welcome = () => {

    return (
        <div className={"container  wel_main_section flex_center"}>

            {/*LEFT SITE SECTION ====================================================================================*/}
            <div className={"wel_side_section wel_img flex_center flex_col wel_bg_color1"}>

                <img src={wel_Logo} alt={wel_Logo} className={"wel_logo"}/>
                <img src={wel_Name_Logo} alt={wel_Name_Logo} className={"wel_name_logo"}/>

                <div className={"wel_space"}/>

                <CustomTitle TITLE={commonConfig.ENG.WELCOME}/>
                <CustomTitle TITLE={commonConfig.SIN.WELCOME}/>
                <CustomTitle TITLE={commonConfig.TAM.WELCOME}/>

            </div>

            {/*RIGHT SITE SECTION ===================================================================================*/}
            <div className={"wel_side_section wel_bg_color1 flex_center flex_col"}>

                <div className={"wel_select_lang flex_center"}>
                    <p>Select Language :</p>
                    <select className={"wel_combo_box"}>
                        <option value="english">English</option>
                        <option value="sinhala">Sinhala</option>
                        <option value="tamil">Tamil</option>
                    </select>
                </div>

                <h1 className={"wel_title_1"}>Step into the Future of Agriculture </h1>

                <p className={"wel_title_2"}>
                    Explore Your Crop Yield Forecast Technologies
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>

                <div className={"wel_button_section"}>
                    <CustomButton BTN_NAME={"Explore!!"} CLASS_NAME={"customButton wel_button"}/>
                </div>


            </div>

        </div>
    )
}

export default Welcome;
