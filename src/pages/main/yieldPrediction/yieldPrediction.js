import React from "react";
import './yieldPrediction.css';
import CropYieldPrediction from "../../../components/cropYieldPrediction";
import TableComponent from "../../../components/tableComponent";
import carrotImage from '../../../assets/images/carrot.png';
import potatoImage from '../../../assets/images/potato.png';
import CustomButton from "../../../components/customButton";

const YieldPrediction = () => {
    return (
        <div className={"container flex_col yie_main_section"}>
            <div className={"yie_sub_main flex_center flex_col"}>
                <div className={"yie_sub_section flex_justify flex_col"}>
                    <h2> Crop Yield Prediction </h2>
                    <div className={"yie_top_section flex_center"}>
                        <CropYieldPrediction/>
                    </div>
                </div>
                <div className={"yie_sub_section flex_justify flex_col"}>
                    <h2> Crop Excess Check Table </h2>
                    <div className={"yie_top_section flex_center"}>
                        <div className="crop-container">
                            <div className="tblHeader">
                                <div className="flex items-center">
                                    <p>Carrot</p>
                                </div>
                                <div>
                                    <img src={carrotImage} alt="Carrot"/>
                                </div>
                            </div>
                            <div className={"yie_table_space"}/>
                            <TableComponent/>
                        </div>
                    </div>

                    <div className={"yie_space"}/>
                    <div className={"yie_button_section flex_center"}>
                        <div className={"yie_yes_no_section flex_center"}>
                            <div className={"yie_text_section flex_align"}>
                                <p className="yie_p">Would you be planting the latest prediction? </p>
                            </div>
                            <div className={"yie_button_sub1 flex_center"}>
                                <CustomButton BTN_NAME={"Yes"} CLASS_NAME={"customButton"}
                                              STYLE={{height: '75%', width: '70%', border: '1px solid white'}}/>
                            </div>
                            <div className={"yie_button_sub1 flex_center"}>
                                <CustomButton BTN_NAME={"No"} CLASS_NAME={"customButton"}
                                              STYLE={{height: '75%', width: '70%', border: '1px solid white'}}/>
                            </div>
                        </div>
                        <div className={"yie_crop_section flex_center"}>
                            <CustomButton BTN_NAME={"Crop recommendations available"} CLASS_NAME={"customButton"}
                                          STYLE={{height: '90%', width: '80%', border: '1px solid white'}}/>
                        </div>
                    </div>
                    <div className={"yie_space"}/>
                    <div className={"yie_separator"}/>
                    <div className={"yie_space"}/>
                    <div className={"yie_top_section flex_center"}>
                        <div className="crop-container">
                            <div className="tblHeader">
                                <div className="flex items-center">
                                    <p>Potato</p>
                                </div>
                                <div>
                                    <img src={potatoImage} alt="potatoImage"/>
                                </div>
                            </div>
                            <div className={"yie_table_space"}/>
                            <TableComponent/>
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
