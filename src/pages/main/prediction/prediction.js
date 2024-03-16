import React from "react";
import './prediction.css';
// import {useState} from "react";
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

    // const [selectedLanguage, setSelectedLanguage] = useState(() => {
    //     return localStorage.getItem('selectedLanguage') || 'ENG';
    // });

    return (
        <div className={"container pre_main_section flex_col"}>

            <div className={"pre_header flex_center"}>
                <h2>{commonConfig.ENG.PRICE_PAGE_TITLE}</h2>
            </div>

            <div className={"pre_search_section flex_center"}>
                <form className="search-form">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                    />
                </form>
            </div>

            <div className={"pre_tbl_section flex_center"}>
                <Line options={options} data={data} className={"res_chart"} />

            </div>

        </div>
    )
}


export default Prediction;
