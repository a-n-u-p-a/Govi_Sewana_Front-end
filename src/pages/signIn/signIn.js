import React, {useEffect, useState} from "react";
import '../auth/authentication.css';
import '../../assets/css/responsive.css';
import './signIn.css';
import CustomButton from "../../components/customButton";
import CustomInput from "../../components/customInput";
import {FaMobileAlt} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import commonConfig from '../../config/commonConfig.json';

const SignIn = ({goToSignUp}) => {

    const navigate = useNavigate();

    const goToOtp = () => {
        navigate('/otp', {replace: true})
    }

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
            <h1> {commonConfig[selectedLanguage].SIGNIN_TITLE}</h1>

            <div className={"sign_text_section flex_center"}>
                <CustomInput LABEL_NAME={commonConfig[selectedLanguage].MOBILE_NO}
                             PLACEHOLDER={commonConfig[selectedLanguage].ENTER_NO} icon={FaMobileAlt}/>
            </div>

            <div className={"signIn_button_section flex_center"}>
                <CustomButton BTN_NAME={commonConfig[selectedLanguage].BTN_SIGNIN} CLASS_NAME={"customButton"}
                              ON_CLICK={goToOtp}/>
            </div>

            <div className={"signUp_button_section"}>
                <CustomButton BTN_NAME={commonConfig[selectedLanguage].BTN_SIGNUP} ON_CLICK={goToSignUp}
                              CLASS_NAME={"customButton"}/>
            </div>

            <p className={"sign_p"}>{commonConfig[selectedLanguage].NO_ACC}
                {/*<span onClick={goToSignUp} className={"sign_span"}>{commonConfig[selectedLanguage].BTN_SIGNUP}</span>*/}
            </p>

        </div>
    )
}

export default SignIn;
