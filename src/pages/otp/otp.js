import React, {useEffect, useState} from "react";
import './otp.css'
import otpImage from '../../assets/images/otp_img.jpg'
import CustomOtpBox from "../../components/customOtpBox";
import CustomButton from "../../components/customButton";
import {useNavigate} from "react-router-dom";
import commonConfig from '../../config/commonConfig.json';

const Otp = () => {

    const navigate = useNavigate();

    const navigateMainForm = () => {
        navigate('/main', {replace: true})
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
        <div className={"container flex_col otp_main_section"}>
            <h2> {commonConfig[selectedLanguage].OTP_TITLE}</h2>

            <div className={"ot_top_section flex_center"}>

                <div className={"otp_side_section flex_center"}>
                    <img src={otpImage} alt={otpImage} className={"ot_img"}/>
                </div>

                <div className={"otp_side_section flex_col flex_center"}>
                    <p className={"otp_p"}>{commonConfig[selectedLanguage].OTP_P1} <br/>
                        {commonConfig[selectedLanguage].OTP_P2}</p>
                    <p> 071 234 5678 </p>
                    <div className={"otp_box_section flex_center"}>
                        <div className={"otp_box_sub flex_center"}>
                            <CustomOtpBox/>
                        </div>
                        <div className={"otp_box_sub flex_center"}>
                            <CustomOtpBox/>
                        </div>
                        <div className={"otp_box_sub flex_center"}>
                            <CustomOtpBox/>
                        </div>
                        <div className={"otp_box_sub flex_center"}>
                            <CustomOtpBox/>
                        </div>
                    </div>

                    <div className={"otp_button_section"}>
                        <CustomButton CLASS_NAME={"customButton"} BTN_NAME={commonConfig[selectedLanguage].BTN_VERIFY} ON_CLICK={navigateMainForm}/>
                    </div>

                    <p className={"otp_p2"}>
                        {commonConfig[selectedLanguage].NOT_RECEIVE} <span className={"otp_span"}>{commonConfig[selectedLanguage].RESEND}</span>
                    </p>

                </div>
            </div>

            <div className={"otp_footer_section flex_center flex_col"}>
                <p className='otp_p1'>{commonConfig[selectedLanguage].UNABLE_OTP}</p>
                <p className='otp_call'>{commonConfig[selectedLanguage].CALL_US} <span className={"otp_span1"}>011-234 5678</span></p>
            </div>


        </div>
    )
}

export default Otp;
