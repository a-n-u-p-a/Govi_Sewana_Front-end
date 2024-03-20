import React, {useEffect, useState} from "react";
import './yieldPrediction.css';
import CropYieldPrediction from "../../../components/cropYieldPrediction";
import TableComponent from "../../../components/tableComponent";
import carrotImage from '../../../assets/images/carrot.png';
import potatoImage from '../../../assets/images/potato.png';
import CustomButton from "../../../components/customButton";
import commonConfig from '../../../config/commonConfig.json';

const YieldPrediction = () => {

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
        <div className={"container flex_col yie_main_section"}>
            <div className={"yie_sub_main flex_center flex_col"}>
                <div className={"yie_sub_section flex_justify flex_col"}>
                    <h2 className={"res_yie_h2"}> {commonConfig[selectedLanguage].CROP_YIELD_TITLE} </h2>
                    <div className={"yie_top_section flex_center"}>
                        <CropYieldPrediction/>
                    </div>
                </div>
                <div className={"yie_sub_section flex_justify flex_col"}>
                    <h2 className={"res_yie_h2"}> {commonConfig[selectedLanguage].EXCESS_TB_TITLE} </h2>
                    <div className={"yie_top_section flex_center "}>
                        <div className="crop-container res_yie_table_container">
                            <div className="tblHeader">
                                <div className="flex items-center">
                                    <p>{commonConfig[selectedLanguage].DROPDOWN_CAR}</p>
                                </div>
                                <div>
                                    <img src={carrotImage} alt="Carrot"/>
                                </div>
                            </div>
                            <div className={"yie_table_space"}/>
                            <div className={"res_table_div"}>
                                <TableComponent/>
                            </div>

                        </div>
                    </div>

                    <div className={"yie_space"}/>

                    <div className={"yie_button_section flex_center res_yie_mid_section"}>
                        <div className={"yie_yes_no_section flex_center"}>
                            <div className={"yie_text_section flex_align"}>
                                <p className="yie_p">{commonConfig[selectedLanguage].BTN_Q1_PRED}</p>
                            </div>
                            <div className={"yie_button_sub1 flex_center"}>
                                <CustomButton BTN_NAME={commonConfig[selectedLanguage].BTN_YES}
                                              CLASS_NAME={"customButton"}
                                              STYLE={{height: '75%', width: '70%', border: '1px solid white'}}/>
                            </div>
                            <div className={"yie_button_sub1 flex_center"}>
                                <CustomButton BTN_NAME={commonConfig[selectedLanguage].BTN_NO}
                                              CLASS_NAME={"customButton"}
                                              STYLE={{height: '75%', width: '70%', border: '1px solid white'}}/>
                            </div>
                        </div>
                        <div className={"yie_crop_section flex_center"}>
                            <CustomButton BTN_NAME={commonConfig[selectedLanguage].BTN_Q2_RECCOMED}
                                          CLASS_NAME={"customButton res_yie_crop_btn"}
                                          STYLE={{height: '90%', width: '80%', border: '1px solid white'}}/>
                        </div>
                    </div>

                    <div className={"yie_space"}/>
                    <div className={"yie_separator"}/>
                    <div className={"yie_space"}/>
                    <div className={"yie_top_section flex_center"}>
                        <div className="crop-container res_yie_table_container">
                            <div className="tblHeader">
                                <div className="flex items-center">
                                    <p>{commonConfig[selectedLanguage].DROPDOWN_POTA}</p>
                                </div>
                                <div>
                                    <img src={potatoImage} alt="potatoImage"/>
                                </div>
                            </div>
                            <div className={"yie_table_space"}/>
                            <div className={"res_table_div"}>
                                <TableComponent/>
                            </div>
                        </div>
                    </div>
                    <div className={"yie_space"}/>
                    <div className={"yie_space"}/>
                </div>
            </div>
        </div>
    )
}

export default YieldPrediction;
