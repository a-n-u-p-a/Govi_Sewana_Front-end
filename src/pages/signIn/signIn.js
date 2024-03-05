import React from "react";
import '../auth/authentication.css';
import '../../assets/css/responsive.css';
import './signIn.css';
import CustomButton from "../../components/customButton";
import CustomInput from "../../components/customInput";
import {FaMobileAlt} from "react-icons/fa";

const SignIn = ({goToSignUp}) => {
    return (
        <div className={"container sign_main_section flex_col"}>
            <h1> Sign In to GoviSewana</h1>

            <div className={"sign_text_section flex_center"}>
                <CustomInput LABEL_NAME={"Mobile Number"} PLACEHOLDER={"Mobile Number"} icon={FaMobileAlt}/>
            </div>

            <div className={"signIn_button_section flex_center"}>
                <CustomButton BTN_NAME={"Sign In"} CLASS_NAME={"customButton"}/>
            </div>

            <div className={"signUp_button_section"}>
                <CustomButton BTN_NAME={"Sign Up"} ON_CLICK={goToSignUp} CLASS_NAME={"customButton"}/>
            </div>

            <p className={"sign_p"}>Don't have Any Account?
                {/*<span onClick={goToSignUp} className={"sign_span"}> SIGN UP</span>*/}
            </p>

        </div>
    )
}

export default SignIn;
