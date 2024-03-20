import React from "react";
import './prediction.css';
import {useState,useEffect} from "react";
import commonConfig from '../../../config/commonConfig.json';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Potato Prices (Historical + Forecasted)',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
// const labels = {commonConfig.ENG.MONTHS.split(",")}

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
}

const Prediction = () => {

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
        <div className={"container pre_main_section flex_col"}>

            <div className={"pre_header flex_center"}>
                <h2>{commonConfig.ENG.PRICE_PAGE_TITLE}</h2>
            </div>

            <div className={"pre_search_section flex_center"}>

                {/* drop down and submit button */}
                <div className="crop-form flex_align flex_row">

                    <div className="crop-input-group flex_col flex_justify">
                        <label className="crop-label">{commonConfig[selectedLanguage].CROP_NAME}</label>
                        <select className="crop-select crop_select_custom">
                            <option value="crop2">{commonConfig[selectedLanguage].DROPDOWN_CAR}</option>
                            <option value="crop3">{commonConfig[selectedLanguage].DROPDOWN_POTA}</option>
                        </select>
                    </div>


                    <div className="crop-input-group crop_space1 flex_col flex_justify">
                        <label className="crop-label">{commonConfig[selectedLanguage].ACRE_SELEC}</label>
                        <input type="month" className="crop-input"/>
                    </div>

                    <button className="crop-button crop_space1">{commonConfig[selectedLanguage].BTN_SUBMIT}</button>

                </div>
                {/* end drop down and submit button */}
{/* 
                <form className="search-form">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                    />
                </form> */}
            </div>

            <div className={"pre_tbl_section flex_center"}>
                <Line options={options} data={data} className={"res_chart"} />

            </div>

        </div>
    )
}


export default Prediction;
