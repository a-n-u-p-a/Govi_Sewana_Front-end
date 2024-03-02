import React from 'react';
import './OtpPage.css'; // This imports the CSS file for styling
import LOGO from '../../assets/images/signup_left_img.png'
import CustomOTPBox from "../../components/CustomOTPBox";
import CustomButton from '../../components/CustomButton';

const OtpPage = () => {
  return (
    <div className="otp-verification-container">
        <div className='heading'>
            <h2>OTP Verification</h2>
        </div>
        <div className="green-container">
            <div className="image-side">
                <img src={LOGO} alt={"Logo"} className={"otp-img"}/>
            </div>
            <div className="form-side">
                <div className='form-top-text'>
                    <p className='para-l1'>Enter your 4 pin OTP we have sent to your mobile,</p>
                    <p className='para-l2'>Once done click "verify OTP"</p>
                </div>
                <div className='phone-num'>( 077 - 457 9385 )</div>
                <div className="input-group">
                    <CustomOTPBox/>
                    <CustomOTPBox/>
                    <CustomOTPBox/>
                    <CustomOTPBox/>
                </div>
                <CustomButton BTN_NAME={"VERIFY"}/>
                <p>Didn't receive OTP? <a href="./">Resend OTP</a></p>
            </div>
        </div>
        <div className="help-text">
            <p className='unable-otp-text'>Unable To Get The OTP?</p>
            <p className='call-us'>CALL US <span className='green_number'>011-234 5678</span></p>
        </div>
    </div>
  );
}

export default OtpPage;
