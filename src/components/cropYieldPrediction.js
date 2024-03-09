import React from 'react';

const CropYieldPrediction = () => {
    return (
        <div className="crop-container">
            <div className="crop-form flex_align flex_row">

                <div className="crop-input-group flex_col flex_justify">
                    <label className="crop-label">Crop:</label>
                    <select className="crop-select crop_select_custom">
                        <option value="crop1">Crop 1</option>
                        <option value="crop2">Crop 2</option>
                        <option value="crop3">Crop 3</option>
                    </select>
                </div>

                <div className="crop-input-group crop_space1 flex_col flex_justify">
                    <label className="crop-label">Date Picker:</label>
                    <input type="date" className="crop-input"/>
                </div>

                <div className="crop-input-group crop_space1 flex_col flex_justify">
                    <label className="crop-label">No Of Acres:</label>
                    <input type="number" className="crop-input"/>
                </div>

                <button className="crop-button crop_space1">Submit</button>

            </div>
            <div className="flex_row flex_center">

                <div className="crop-result">
                    <label>Predicted Yield:</label>
                </div>

                <div className={"crop_space"}/>

                <div className="crop-result">
                    <label>Crop Harvested at:</label>
                </div>

                <div className={"crop_space"}/>

                <div className="crop-result">
                    <label>Week No:</label>
                </div>

            </div>
        </div>
    );
};

export default CropYieldPrediction;
