import React from "react";
import foLogo from '../assets/images/logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="container fo_main_section flex_col">

            <div className={"fo_top_section flex_center"}>
                <div className={"fo_mid_section flex_align"}>
                    <div className={"fo_sub_section1 flex_center"}>
                        <img src={foLogo} alt={foLogo} className={"foLogo"}/>
                    </div>
                    <h2 className={"fo_p"}>GoviSewana</h2>
                </div>
                <div className={"fo_mid_section"}>
                    <p className="fo_p"><FontAwesomeIcon icon={faMapMarkerAlt} className="fo_icons"/>&nbsp;&nbsp;345
                        Faulconer Drive, Suite 4 •
                        Bambalapitiya, Sri Lanka
                    </p>

                    <p className="fo_p">
                        <FontAwesomeIcon icon={faPhone} className="fo_icons"/>&nbsp;+94 766 760 760
                    </p>
                </div>
                <div className={"fo_mid_section flex_center flex_col"}>
                    <div className={"fo_social_section flex_center"}>

                        <div className={"fo_social_title flex_align"}>
                            <p className="">Social Media : </p>
                        </div>

                        <div className={"fo_social_content flex_align"}>
                            <p className="fo_social_icon"><FaFacebookF/></p>
                            <p className="fo_social_icon"><FaTwitter/></p>
                            <p className="fo_social_icon"><FaLinkedinIn/></p>
                            <p className="fo_social_icon"><FaYoutube/></p>
                        </div>
                    </div>
                    <div className={"fo_social_section flex_center"}>

                        <div className={"fo_social_title flex_align"}>
                            <p className="">Email Us : </p>
                        </div>

                        <div className={"fo_social_content flex_align"}>
                            <p className="fo_social_icon">govisewana@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"fo_bottom_section flex_center"}>

                <div className={"fo_bottom_sub1 flex_align"}>
                    <p className={"fo_btn"}>ABOUT US</p>
                    <p className={"fo_btn"}>CONTACT US</p>
                    <p className={"fo_btn"}>HELP</p>
                    <p className={"fo_btn"}>PRIVACY POLICY</p>
                    <p className={"fo_btn"}>DISCLAIMER</p>
                </div>
                <div className={"fo_bottom_sub2 flex_center"}>
                    <p className="fo_btn">Copyright © 2023. GoviSewana.ltd</p>
                </div>

            </div>
        </div>
    )
}

export default Footer;