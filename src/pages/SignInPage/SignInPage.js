import React from 'react';
import SIGN_UP_LEFT_IMG from '../../assets/images/signup_left_img.png';
import '../../assets/css/components.css';
import LOGO from '../../assets/images/logo.png';
import CustomTextField from '../../components/CustomTextField';
import {FaMobile} from 'react-icons/fa';
import '../../App.css';
import '../SignInPage/signInStyles.css'
import CustomButton from "../../components/CustomButton";

const SignInPage = () => {
    return (

        <div className='container1'>
            {/*<div class="custom-shape"/>*/}

            <div className='side-container1 flex-center'>
                <div className='left-top-section1 flex-center'>
                    <img src={LOGO} alt={'logo'}/>
                    <h1 className="space"> GoviSewana </h1>
                </div>

                <p>Revolutionizing Agriculture</p>
                <div className='img-container1'>
                    <img src={SIGN_UP_LEFT_IMG} alt={'sign-up-left'}/>
                </div>
            </div>

            <div className='side-container1 flex-center'>
                <h1>Sign In to GoviSewana</h1>

                <div className={"form_section"}>
                    <CustomTextField
                        LABEL_NAME={"Mobile No"}
                        PLACEHOLDER={"Enter your mobile no:"}
                        icon={FaMobile}/>
                </div>


                <CustomButton BTN_NAME={"SIGN IN"}/>

                <p style={{marginTop: '7%'}}>Don’t have any account? </p>
                <CustomButton BTN_NAME={"SIGN UP"} STYLE={{width: '200px', marginTop: '1%'}}/>

                {/*    <div class="custom-shape"></div>*/}


            </div>
        </div>
    )
}

export default SignInPage;
