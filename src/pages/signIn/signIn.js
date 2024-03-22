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

    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        return localStorage.getItem('selectedLanguage') || 'ENG';
    });

    useEffect(() => {
        const langValue = localStorage.getItem('selectedLanguage');
        if (langValue !== null) {
            setSelectedLanguage(langValue)
        }
    }, []);


    const [mobileNumber, setMobileNumber] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setMobileNumber("+94"+e.target.value);
    }

    let postData ={
        "Mobile-Number": mobileNumber,
    };

    // const goToOtp = () => {
    //     handleButtonClick()
    // }

    const handleButtonClick = async () => {
        try {
            const url = 'https://govi-sewana-back-end-final-3yc5uvvuza-uc.a.run.app/login/send_otp/';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData) 
        });

        alert(postData["Mobile-Number"])
    
        if(response.ok){
        console.log("OTP sent successfully!");
        navigate('/otp', { replace: true, state: { mobileNumber: mobileNumber } }); 
        }else{
        alert('user is not registered')
        }

        } catch (err) {
        console.error('Network error:', err);
        alert("Network error. Please try again."); 
        }
    }

    const signInFunction = () => {

        const mobileNumberRegex = /^(?:\+?94)?(?:0|94)?[1-9]\d{8}$/;
            if (mobileNumberRegex.test(mobileNumber)) {
                handleButtonClick()
            } else {
                alert('InValid MobileNumber')
            }
           
    }

    return (
        <div className={"container sign_main_section flex_col"}>
            <h1> {commonConfig[selectedLanguage].SIGNIN_TITLE}</h1>

            <div className={"sign_text_section flex_center"}>
                <CustomInput LABEL_NAME={commonConfig[selectedLanguage].MOBILE_NO}
                             PLACEHOLDER={commonConfig[selectedLanguage].ENTER_NO} icon={FaMobileAlt} ON_CHANGE={handleInputChange}/>
            </div>

            <div className={"signIn_button_section flex_center"}>
                <CustomButton BTN_NAME={commonConfig[selectedLanguage].BTN_SIGNIN} CLASS_NAME={"customButton"}
                              ON_CLICK={signInFunction}/>
            </div>

            <div className={"signUp_button_section"}>
                <CustomButton BTN_NAME={commonConfig[selectedLanguage].BTN_SIGNUP} ON_CLICK={goToSignUp}
                              CLASS_NAME={"customButton"}/>
            </div>

            <p className={"sign_p"}>{commonConfig[selectedLanguage].NO_ACC} ?
                {/*<span onClick={goToSignUp} className={"sign_span"}>{commonConfig[selectedLanguage].BTN_SIGNUP}</span>*/}
            </p>

        </div>
    )
}

export default SignIn;
