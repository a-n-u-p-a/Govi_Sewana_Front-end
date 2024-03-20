import React, {useEffect} from 'react';
import {useState} from "react";
import commonConfig from '../config/commonConfig.json';

const CropYieldPrediction = () => {

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
        <div className="crop-container">
            <div className="crop-form flex_align flex_row">

                <div className="crop-input-group flex_col flex_justify">
                    <label className="crop-label">{commonConfig[selectedLanguage].CROP_NAME}</label>
                    <select className="crop-select crop_select_custom">
                        <option value="crop2">{commonConfig[selectedLanguage].DROPDOWN_CAR}</option>
                        <option value="crop3">{commonConfig[selectedLanguage].DROPDOWN_POTA}</option>
                    </select>
                </div>

                <div className="crop-input-group crop_space1 flex_col flex_justify">
                    <label className="crop-label">{commonConfig[selectedLanguage].DATE_SELEC}</label>
                    <input type="date" className="crop-input"/>
                </div>

                <div className="crop-input-group crop_space1 flex_col flex_justify">
                    <label className="crop-label">{commonConfig[selectedLanguage].ACRE_SELEC}</label>
                    <input type="number" className="crop-input"/>
                </div>

                <button className="crop-button crop_space1">{commonConfig[selectedLanguage].BTN_SUBMIT}</button>

            </div>
            <div className="flex_row flex_center res_crop_yie">

                <div className="crop-result">
                    <label>{commonConfig[selectedLanguage].PRED_YIELD}</label>
                </div>

                <div className={"crop_space"}/>

                <div className="crop-result">
                    <label>{commonConfig[selectedLanguage].CROP_HARV}</label>
                </div>

                <div className={"crop_space"}/>

                <div className="crop-result">
                    <label>{commonConfig[selectedLanguage].WEEK_NO}</label>
                </div>

            </div>
        </div>
    );
};

export default CropYieldPrediction;
