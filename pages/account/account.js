import React from "react";
import './account.css';
import acc_logo from '../../assets/images/logo.png';
import CustomInput from "../../components/customInput";
import {FaIdCard} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {FaMobileAlt} from "react-icons/fa";
import CustomButton from "../../components/customButton";
import accImg from '../../assets/images/account_img.png';

const Account = () => {
    return (
        <div className={"container acc_main_section"}>
            <div className={"acc_side_section flex_center"}>
                <div className={"acc_form_section flex_center flex_col"}>
                    <div className={"acc_header_section flex_center"}>
                        <img src={acc_logo} alt={acc_logo} className={"acc_logo"}/>
                        <h2> GoviSewana </h2>
                    </div>
                    <div className={"acc_text_section flex_center"}>
                        <CustomInput
                            LABEL_NAME={"Full Name"}
                            PLACEHOLDER={"Full Name"}
                            icon={FaUser}
                            STYLE={{marginTop: '2%'}}
                        />
                    </div>
                    <div className={"acc_space"}/>
                    <div className={"acc_text_section flex_center"}>
                        <CustomInput
                            LABEL_NAME={"NIC Number"}
                            PLACEHOLDER={"NIC Number"}
                            icon={FaIdCard}
                            STYLE={{marginTop: '2%'}}
                        />
                    </div>
                    <div className={"acc_space"}/>
                    <div className={"acc_text_section flex_center"}>
                        <CustomInput
                            LABEL_NAME={"Mobile Number"}
                            PLACEHOLDER={"Mobile Number"}
                            icon={FaMobileAlt}
                            STYLE={{marginTop: '2%'}}
                        />
                    </div>
                    <div className={"acc_select_lang"}>
                        <p className={"acc_p"}>Select Language : </p>
                    </div>
                    <div className={"acc_select_lang flex_center"}>
                        <select className={"acc_combo_box"}>
                            <option value="english">English</option>
                            <option value="sinhala">Sinhala</option>
                            <option value="tamil">Tamil</option>
                        </select>
                    </div>
                    <div className={"acc_space"}/>
                    <div className={"acc_button_section"}>
                        <CustomButton BTN_NAME={"Update"} CLASS_NAME={"customButton"}/>
                    </div>
                </div>
            </div>
            <div className={"acc_line"}/>
            <div className={"acc_side_section flex_center flex_col"}>

                <h2> ACCOUNT </h2>

                <div className={"acc_view_section flex_col flex_center"}>
                    <div className={"acc_top_section flex_center flex_row"}>
                        <div className={"acc_top_side flex_center"}>
                            <img src={accImg} alt={accImg} className={"accImg"}/>
                        </div>
                        <div className={"acc_top_side1"}>
                            <h4 className={"acc_text"}>Full Name : </h4>
                            <h4 className={"acc_text"}>NIC Number : </h4>
                            <h4 className={"acc_text"}>Mobile Number : </h4>
                        </div>
                    </div>
                    <div className={"acc_bottom_section flex_center"}>
                        <div className={"acc_bottom_side"}/>
                        <div className={"acc_bottom_side1 flex_center"}>
                            <CustomButton BTN_NAME={"Update"} CLASS_NAME={"customButton"} STYLE={{marginTop: '5%'}}/>
                        </div>
                    </div>
                </div>

                <div className={"acc_space3"}/>

                <div className={"acc_bottom_button_section flex_row flex_center"}>

                    <div className={"acc_bottom_button "}>
                        <CustomButton BTN_NAME={"Terms & Conditions"} CLASS_NAME={"customButton"}/>
                    </div>

                    <div className={"acc_space2"}/>

                    <div className={"acc_bottom_button flex_row flex_center"}>
                        <CustomButton BTN_NAME={"Settings"} CLASS_NAME={"customButton"}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Account;
