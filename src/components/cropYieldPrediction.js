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

    // Set input and output data using useState
    const [cropType, setCropType] = useState("");
    const [plantingDate, setPlantingDate] = useState("");
    const [cropExtent, setCropExtent] = useState("");
    const [predictedYield, setPredictedYield] = useState("");
    const [harvestDate, setHarvestDate] = useState("");
    const [weekNumber, setWeekNumber] = useState("");

    let formData = {
        "User_Tel.": "0719887805",
        "Crop_Type": cropType,
        "Date_of_Planting": plantingDate,
        "Date_of_Harvest": "",
        "Harvest_Week_No.": "",
        "crop_Extent(Acres)": cropExtent
    };


    // function handleButtonClick() {
    
    //     sendFormData();
        async function sendFormData() {
            try {
                let url = 'https://govi-sewana-back-end-final-3yc5uvvuza-uc.a.run.app/yieldPrediction/predictor/';
                let response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                // 'GET' response from Back-end 
                if (response.ok) {
                    let result = await response.json();
                    setPredictedYield(parseInt(result.predictedYield));
                    setHarvestDate(result.harvestDate)
                    setWeekNumber(result.weekNumber)
                    console.log(result);
                    
                } else {
                    console.error('Error sending data:',response.status);
                }
            } catch (err) {
                console.error('Network error:',err);
            }
        }
    // }

    return (
        <div className="crop-container">
            <div className="crop-form flex_align flex_row">

                <div className="crop-input-group flex_col flex_justify">
                    <label className="crop-label">{commonConfig[selectedLanguage].CROP_NAME}</label>
                    <select className="crop-select crop_select_custom"
                        onChange={(e) => setCropType(e.target.value)}>
                            <option value="">...</option>
                            <option value="Carrot">{commonConfig[selectedLanguage].DROPDOWN_CAR}</option>
                            <option value="Potato">{commonConfig[selectedLanguage].DROPDOWN_POTA}</option>
                    </select>
                </div>

                <div className="crop-input-group crop_space1 flex_col flex_justify">
                    <label className="crop-label">{commonConfig[selectedLanguage].DATE_SELEC}</label>
                    <input type="date" className="crop-input"
                        onChange={(e) => setPlantingDate(e.target.value)}/>
                </div>

                <div className="crop-input-group crop_space1 flex_col flex_justify">
                    <label className="crop-label">{commonConfig[selectedLanguage].ACRE_SELEC}</label>
                    <input type="number" className="crop-input"
                    onChange={(e) => setCropExtent(e.target.value)}/>
                </div>

                <button className="crop-button crop_space1" onClick={sendFormData}>{commonConfig[selectedLanguage].BTN_SUBMIT}</button>

            </div>
            <div className="flex_row flex_center res_crop_yie">

                <div className="crop-result">
                    <label>{commonConfig[selectedLanguage].PRED_YIELD} {predictedYield}</label>
                </div>

                <div className={"crop_space"}/>

                <div className="crop-result">
                    <label>{commonConfig[selectedLanguage].CROP_HARV} {harvestDate}</label>
                </div>

                <div className={"crop_space"}/>

                <div className="crop-result">
                    <label>{commonConfig[selectedLanguage].WEEK_NO} {weekNumber}</label>
                </div>

            </div>
        </div>
    );
};

export default CropYieldPrediction;
