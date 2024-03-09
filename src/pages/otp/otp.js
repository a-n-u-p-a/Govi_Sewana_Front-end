import React from "react";
import './otp.css'
import otpImage from '../../assets/images/otp_img.jpg'
import CustomOtpBox from "../../components/customOtpBox";
import CustomButton from "../../components/customButton";
import {useNavigate} from "react-router-dom";

const Otp = () => {

    const navigate = useNavigate();

    const navigateMainForm = () => {
        navigate('/main', {replace: true})
    }

    return (
        <div className={"container flex_col otp_main_section"}>
            <h2> OTP Verification </h2>

            <div className={"ot_top_section flex_center"}>

                <div className={"otp_side_section flex_center"}>
                    <img src={otpImage} alt={otpImage} className={"ot_img"}/>
                </div>

                <div className={"otp_side_section flex_col flex_center"}>
                    <p className={"otp_p"}>Enter your 4 pin OTP we have sent to your mobile, <br/>
                        Once done click "verify OTP"</p>
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
                        <CustomButton CLASS_NAME={"customButton"} BTN_NAME={"Verify"} ON_CLICK={navigateMainForm}/>
                    </div>

                    <p className={"otp_p2"}>
                        Didn't receive OTP? <span className={"otp_span"}>Resend OTP</span>
                    </p>

                </div>
            </div>

            <div className={"otp_footer_section flex_center flex_col"}>
                <p className='otp_p1'>Unable To Get The OTP?</p>
                <p className='otp_call'>CALL US <span className={"otp_span1"}>011-234 5678</span></p>
            </div>


        </div>
    )
}

export default Otp;
