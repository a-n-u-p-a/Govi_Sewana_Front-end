import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars,
    faUserPen,
    faHome,
    faBrain,
    faGaugeHigh,
    faDollar,
    faLightbulb,
    faRightFromBracket,
    faGear
} from '@fortawesome/free-solid-svg-icons';
import navTitleLogo from '../assets/images/govisewana.png'
import nav_accountImg from '../assets/images/account_img.png'
import CustomIconButton from "./customIconButton";

const NavBar = ({PROFILE_ON_CLICK, PRE_ON_CLICK, REC_ON_CLICK, PRI_ON_CLICK, CUL_ON_CLICK, HOME_ON_CLICK}) => {


    return (
        <div className={"container nav_main_section flex_col"}>

            <div className={"nav_icon_section"}>
                <FontAwesomeIcon icon={faBars}/>
            </div>

            <div className={"nav_title_section flex_center"}>
                <img src={navTitleLogo} alt={navTitleLogo} className={"nav_title_logo"}/>
            </div>

            <div className={"nav_profile_section flex_center flex_col"}>
                <img src={nav_accountImg} alt={nav_accountImg} className={"nav_profile_img"}/>
                <p className={"nav_profile_p"}> hello <br/> 071 234 5678 </p>
            </div>

            <div className={"nav_separator"}/>
            <div className={"nav_account_section"}>

                <div className={"nav_account_button"}>
                    <CustomIconButton ICON={faUserPen} TITLE={"Profile"} ON_CLICK={PROFILE_ON_CLICK}/>
                </div>

                <div className={"nav_account_button"}>
                    <CustomIconButton ICON={faHome} TITLE={"Home"} ON_CLICK={HOME_ON_CLICK}/>
                </div>

                <div className={"nav_account_button"}>
                    <CustomIconButton ICON={faBrain} TITLE={"Prediction"} ON_CLICK={PRE_ON_CLICK}/>
                </div>

                <div className={"nav_account_button"}>
                    <CustomIconButton ICON={faGaugeHigh} TITLE={"Recommendation"} ON_CLICK={REC_ON_CLICK}/>
                </div>

                <div className={"nav_account_button"}>
                    <CustomIconButton ICON={faDollar} TITLE={"Price"} ON_CLICK={PRI_ON_CLICK}/>
                </div>

                <div className={"nav_account_button"}>
                    <CustomIconButton ICON={faLightbulb} TITLE={"Cultivation Tips"}  ON_CLICK={CUL_ON_CLICK}/>
                </div>

            </div>
            <div className={"nav_separator"}/>
            <div className={"nav_bottom_section"}>

                <div className={"nav_account_bottom_button"}>
                    <CustomIconButton ICON={faRightFromBracket} TITLE={"LogOut"}/>
                </div>

                <div className={"nav_account_bottom_button"}>
                    <CustomIconButton ICON={faGear} TITLE={"Settings"}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
