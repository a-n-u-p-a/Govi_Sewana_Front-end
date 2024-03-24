import React, {useEffect, useState} from "react";
import './yieldPrediction.css';
import CropYieldPrediction from "../../../components/cropYieldPrediction";
import TableComponentCarrot from "../../../components/tableComponentCarrot";
import TableComponentPotato from "../../../components/tableComponentPotato";
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

    // const [userTel, setUserTel] = useState("");
    // const [cropType, setCropType] = useState("");
    // const [plantingDate, setPlantingDate] = useState("");
    // const [cropExtent, setCropExtent] = useState("");
    // const [displayStatus, setDisplayStatus] = useState("");

    // setUserTel("0719882805");
    // setCropType("Carrot");
    // setPlantingDate("2024-03-21");
    // setCropExtent(18);

    function handleButtonClick_Yes() {
        alert("You can grow the selected crop type and extent !");
    }

    let inputData = {
        "Username": "@user0717773481",
        "Crop_Type": "Potato",
        "Date_of_Planting": "2024-03-21",
        "crop_Extent(Acres)": 18
    } 

    

    function handleButtonClick_No() {
    
        deleteData();
        async function deleteData() {
            try {
                let url = 'https://govi-sewana-back-end-final-3yc5uvvuza-uc.a.run.app/yieldPrediction/delete/';
                let response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inputData)
                });

                // 'GET' response from Back-end 
                if (response.ok) {
                    let result = await response.json();
                    alert(result.message);
                    // setDisplayStatus(result.displayStatus);
                    console.log(result);
                } else {
                    console.error('Error sending data:',response.status);
                }
            } catch (err) {
                console.error('Network error:',err);
            }
        }
    }


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
                                <TableComponentCarrot/>
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
                                              STYLE={{height: '75%', width: '70%', border: '1px solid white'}}
                                              ON_CLICK={handleButtonClick_Yes}
                                              />
                            </div>
                            <div className={"yie_button_sub1 flex_center"}>
                                <CustomButton BTN_NAME={commonConfig[selectedLanguage].BTN_NO}
                                              CLASS_NAME={"customButton"}
                                              STYLE={{height: '75%', width: '70%', border: '1px solid white'}}
                                              ON_CLICK={handleButtonClick_No}
                                              />
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
                                <TableComponentPotato/>
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
