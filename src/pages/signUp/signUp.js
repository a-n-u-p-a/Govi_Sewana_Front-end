import React, {useEffect, useState} from "react";
import './signUp.css';
import '../auth/authentication.css';
import CustomButton from "../../components/customButton";
import CustomInput from "../../components/customInput";
import {FaIdCard, FaMobileAlt, FaUser} from "react-icons/fa";
import commonConfig from '../../config/commonConfig.json';

const SignUp = ({goToSignIn}) => {

    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        return localStorage.getItem('selectedLanguage') || 'ENG';
    });

    useEffect(() => {
        const langValue = localStorage.getItem('selectedLanguage');
        if (langValue !== null) {
            setSelectedLanguage(langValue)
        }
    }, []);


    return (
        <div className={"container sign_main_section flex_col"}>
            <h1>  {commonConfig[selectedLanguage].SIGNUP_TITLE} </h1>

            <div className={"sign_text_section flex_center"}>
                <CustomInput LABEL_NAME={commonConfig[selectedLanguage].FULL_NAME} PLACEHOLDER={commonConfig[selectedLanguage].ENTER_NAME}  icon={FaUser}/>
            </div>

            <div className={"sign_text_section flex_center"}>
                <CustomInput LABEL_NAME={commonConfig[selectedLanguage].NIC} PLACEHOLDER={commonConfig[selectedLanguage].NIC} icon={FaIdCard}/>
            </div>

            <div className={"sign_text_section flex_center"}>
                <CustomInput LABEL_NAME={commonConfig[selectedLanguage].MOBILE_NO} PLACEHOLDER={commonConfig[selectedLanguage].ENTER_NO}  icon={FaMobileAlt}/>
            </div>

            <div className={"signUp_button_section"}>
                <CustomButton BTN_NAME={commonConfig[selectedLanguage].BTN_SIGNUP} CLASS_NAME={"customButton"}/>
            </div>

            <p className={"sign_p"}>{commonConfig[selectedLanguage].HAVE_ACC}
                <span onClick={goToSignIn} className={"sign_span"}>  {commonConfig[selectedLanguage].BTN_SIGNIN} </span>
            </p>

        </div>
    )
}

export default SignUp;
