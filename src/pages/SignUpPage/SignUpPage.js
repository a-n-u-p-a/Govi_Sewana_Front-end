import React from "react";
import './signUpStyles.css';
import '../../App.css';
import '../../assets/css/components.css';
import LOGO from '../../assets/images/logo.png';
import SIGN_UP_LEFT_IMG from '../../assets/images/signup_left_img.png';
import {FaUser} from 'react-icons/fa';
import {FaIdCard} from "react-icons/fa";
import {FaMobileAlt} from "react-icons/fa";
import CustomTextField from "../../components/CustomTextField";
import CustomButton from "../../components/CustomButton";

const SignUpPage = () => {
    return (
        <div className={"container2"}>

            {/*==================================================================================== LEFT SIDE SECTION*/}
            <div className={"side-container2 flex-center"}>
                <div className={"left_side_top_section"}>
                    <img src={LOGO} alt={"Logo"}/>
                    <h1 className={"space"}> GoviSewana </h1>
                </div>
                <p> Revolutionizing Agriculture </p>

                <div className={"sign_up_img_section"}>
                    <img src={SIGN_UP_LEFT_IMG} alt={"SIGN_UP_LEFT_IMG"}/>
                </div>

            </div>

            {/*=================================================================================== RIGHT SIDE SECTION*/}
            <div className={"side-container2 flex-center"}>

                <h1>Sign Up to GoviSewana</h1>

                <div className={"form_section"}>

                    <CustomTextField
                        LABEL_NAME={"Full Name"}
                        PLACEHOLDER={"Enter Your Full Name"}
                        icon={FaUser}
                    />

                    <CustomTextField
                        LABEL_NAME={"NIC"}
                        PLACEHOLDER={"Enter Your NIC"}
                        icon={FaIdCard}
                    />

                    <CustomTextField
                        LABEL_NAME={"Mobile Number"}
                        PLACEHOLDER={"Enter Your Mobile Number"}
                        icon={FaMobileAlt}
                    />


                    <CustomButton BTN_NAME={"SIGN UP"}/>

                    <p> Already Have An Account? <a href={"./"} className={"link_txt"}>SIGN IN</a></p>

                </div>


            </div>

            {/*<div style={{width: '50px'}}/>*/}

        </div>
    )
}

export default SignUpPage;
