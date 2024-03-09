import React from "react";
import './signUp.css';
import '../auth/authentication.css';
import CustomButton from "../../components/customButton";
import CustomInput from "../../components/customInput";
import {FaUser} from "react-icons/fa";
import {FaIdCard} from "react-icons/fa";
import {FaMobileAlt} from "react-icons/fa";

const SignUp = ({goToSignIn}) => {
    return (
        <div className={"container sign_main_section flex_col"}>
            <h1> Sign Up to GoviSewana</h1>

            <div className={"sign_text_section flex_center"}>
                <CustomInput LABEL_NAME={"Full Name"} PLACEHOLDER={"Full Name"} icon={FaUser}/>
            </div>

            <div className={"sign_text_section flex_center"}>
                <CustomInput LABEL_NAME={"NIC"} PLACEHOLDER={"NIC"} icon={FaIdCard}/>
            </div>

            <div className={"sign_text_section flex_center"}>
                <CustomInput LABEL_NAME={"Mobile Number"} PLACEHOLDER={"Mobile Number"} icon={FaMobileAlt}/>
            </div>

            <div className={"signUp_button_section"}>
                <CustomButton BTN_NAME={"Sign Up"} CLASS_NAME={"customButton"}/>
            </div>

            <p className={"sign_p"}>Already Have An Account?
                <span onClick={goToSignIn} className={"sign_span"}> SIGN IN</span>
            </p>

        </div>
    )
}

export default SignUp;
