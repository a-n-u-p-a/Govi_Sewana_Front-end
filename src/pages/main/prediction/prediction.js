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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


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

    // Initialize the useStates
    const [cropType, setCropType] = useState("");
    const [yearMonth, setYearMonth] = useState("");
    const [priceData, setPriceData] = useState("");

    
    // Initialize an empty array to store the data
    const weekPrices = [];

    // Iterate over each table row and push the data to the array
    for (const price of Object.values(priceData)) {
        weekPrices.push(price);
    }

    // const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const labels = commonConfig[selectedLanguage].WEEK;

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Price (Rs.) ',
                data: weekPrices,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,  // Set the radius of data points
                pointHoverRadius: 7, // Set the hover radius of data points
                pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Color of data points 
            },    
        ],
    };

    const getChartTitle = () => {
        // Get the crop type translation
        const cropTranslation = commonConfig[selectedLanguage][cropType] || cropType; // Fallback to the English name if no translation exists
        // Get the fully translated title template and replace the placeholder
        const titleTemplate = commonConfig[selectedLanguage].HISTORIC_FORECAST;
        return titleTemplate.replace("{cropType}", cropTranslation);
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: getChartTitle(),
            },
        },
        scales: {
            y: {
                beginAtZero: true
            },
        },
    };



    let userInputData = {
        "Crop_Type": cropType,
        "Year_Month": yearMonth
    };

    function handleButtonClick() {
        fetchData();
        async function fetchData() {
            try {
                let url = 'https://govi-sewana-back-end-final-3yc5uvvuza-uc.a.run.app/pricePrediction/predictor/';
                let response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInputData)
                });

                // 'GET' response from Back-end 
                if (response.ok) {
                    let result = await response.json();
                    setPriceData(result);
                    //console.log(priceData);
                } else {
                    console.error('Error sending data:',response.status);
                };
            } catch (err) {
                console.error('Network error:',err);
            }
        }
    }

    
    return (
        <div className={"container pre_main_section flex_col"}>

            <div className={"pre_header flex_center"}>
                <h2>{commonConfig[selectedLanguage].PRICE_PAGE_TITLE}</h2>
            </div>

            <div className={"pre_search_section flex_center"}>

                {/* drop down and submit button */}
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
                        <label className="crop-label">{commonConfig[selectedLanguage].YEAR_MONTH}</label>
                        <input type="month" className="crop-input"
                        onChange={(e) => setYearMonth(e.target.value)}/>
                    </div>

                    <button className="crop-button crop_space1" onClick={handleButtonClick}>{commonConfig[selectedLanguage].BTN_SUBMIT}</button>

                </div>
  
            </div>

            <div className={"pre_tbl_section flex_center"}>
                <Line options={options} data={chartData} className={"res_chart"} />

            </div>

        </div>
    )
}


export default Prediction;


// export default Prediction;

// import React from "react";
// import './prediction.css';
// // import {useState} from "react";
// import commonConfig from '../../../config/commonConfig.json';
//
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
//
// import { Line } from 'react-chartjs-2';
// import faker from 'faker';
//
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// );
//
// const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'top',
//         },
//         title: {
//             display: true,
//             text: 'Potato Prices (Historical + Forecasted)',
//         },
//     },
// };
//
// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
// // const labels = {commonConfig.ENG.MONTHS.split(",")}
//
// const data = {
//     labels,
//     datasets: [
//         {
//             label: 'Dataset 1',
//             data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//         {
//             label: 'Dataset 2',
//             data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//             borderColor: 'rgb(53, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         },
//     ],
// }
//
// const Prediction = () => {
//
//     // const [selectedLanguage, setSelectedLanguage] = useState(() => {
//     //     return localStorage.getItem('selectedLanguage') || 'ENG';
//     // });
//
//     return (
//         <div className={"container pre_main_section flex_col"}>
//
//             <div className={"pre_header flex_center"}>
//                 <h2>{commonConfig.ENG.PRICE_PAGE_TITLE}</h2>
//             </div>
//
//             <div className={"pre_search_section flex_center"}>
//                 <form className="search-form">
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         className="search-input"
//                     />
//                 </form>
//             </div>
//
//             <div className={"pre_tbl_section flex_center"}>
//                 <Line options={options} data={data} className={"res_chart"} />
//
//             </div>
//
//         </div>
//     )
// }
//
//
// export default Prediction;


