import React, {useEffect, useState} from "react";
import './account.css';
import acc_logo from '../../../assets/images/logo.png';
import CustomInput from "../../../components/customInput";
import {FaIdCard} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {FaMobileAlt} from "react-icons/fa";
import CustomButton from "../../../components/customButton";
import accImg from '../../../assets/images/account_img.png';
import commonConfig from '../../../config/commonConfig.json';


const Account = () => {

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
        <div className={"container acc_main_section res_acc_main"}>
            <div className={"acc_side_section flex_center res_acc_main_top"}>
                <div className={"acc_form_section flex_center flex_col res_acc_main_top_form"}>

                    <div className={"acc_header_section flex_center"}>
                        <img src={acc_logo} alt={acc_logo} className={"acc_logo"}/>
                        <h2>  {commonConfig[selectedLanguage].GOVI_NAME} </h2>
                    </div>
                    <div className={"acc_text_section flex_center"}>
                        <CustomInput
                            LABEL_NAME={commonConfig[selectedLanguage].FULL_NAME}
                            PLACEHOLDER={commonConfig[selectedLanguage].ENTER_NAME}
                            icon={FaUser}
                            STYLE={{marginTop: '2%'}}
                        />
                    </div>
                    <div className={"acc_space"}/>
                    <div className={"acc_text_section flex_center"}>
                        <CustomInput
                            LABEL_NAME={commonConfig[selectedLanguage].NIC}
                            PLACEHOLDER={commonConfig[selectedLanguage].ENTER_NIC}
                            icon={FaIdCard}
                            STYLE={{marginTop: '2%'}}
                        />
                    </div>
                    <div className={"acc_space"}/>
                    <div className={"acc_text_section flex_center"}>
                        <CustomInput
                            LABEL_NAME={commonConfig[selectedLanguage].MOBILE_NO}
                            PLACEHOLDER={commonConfig[selectedLanguage].ENTER_NO}
                            icon={FaMobileAlt}
                            STYLE={{marginTop: '2%'}}
                        />
                    </div>
                    <div className={"acc_select_lang"}>
                        <p className={"acc_p"}>{commonConfig[selectedLanguage].SELECT_LAN} </p>
                    </div>
                    <div className={"acc_select_lang flex_center"}>
                        <select className={"acc_combo_box"}>
                            <option value="english">{commonConfig[selectedLanguage].ENGLISH}</option>
                            <option value="sinhala">{commonConfig[selectedLanguage].SINHALA}</option>
                            <option value="tamil">{commonConfig[selectedLanguage].TAMIL}</option>
                        </select>
                    </div>
                    <div className={"acc_space"}/>
                    <div className={"acc_button_section"}>
                        <CustomButton BTN_NAME={commonConfig[selectedLanguage].SAVE_CHANGES} CLASS_NAME={"customButton"}/>
                    </div>

                </div>
            </div>
            <div className={"acc_line"}/>
            <div className={"acc_side_section flex_center flex_col"}>

                <h2> {commonConfig[selectedLanguage].ACCOUNT} </h2>

                <div className={"acc_view_section flex_col flex_center"}>
                    <div className={"acc_top_section flex_center flex_row"}>
                        <div className={"acc_top_side flex_center"}>
                            <img src={accImg} alt={accImg} className={"accImg"}/>
                        </div>
                        <div className={"acc_top_side1"}>
                            <h4 className={"acc_text"}> YOUR NAME </h4>
                            <h4 className={"acc_text"}> 20001023 </h4>
                            <h4 className={"acc_text"}> 071234567 </h4>
                        </div>
                    </div>
                    <div className={"acc_bottom_section flex_center"}>
                        <div className={"acc_bottom_side"}/>
                        {/* <div className={"acc_bottom_side1 flex_center"}>
                            <CustomButton BTN_NAME={commonConfig[selectedLanguage].SAVE_CHANGES} CLASS_NAME={"customButton"} STYLE={{marginTop: '5%'}}/>
                        </div> */}
                    </div>
                </div>

                <div className={"acc_space3"}/>

                <div className={"acc_bottom_button_section flex_row flex_center"}>

                    <div className={"acc_bottom_button "}>
                        <CustomButton BTN_NAME={commonConfig[selectedLanguage].TERMS_CONDITIONS}  CLASS_NAME={"customButton"}/>
                    </div>

                    <div className={"acc_space2"}/>

                    {/* <div className={"acc_bottom_button flex_row flex_center"}>
                        <CustomButton BTN_NAME={commonConfig[selectedLanguage].SETTINGS} CLASS_NAME={"customButton"}/>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Account;
