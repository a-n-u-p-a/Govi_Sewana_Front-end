import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import commonConfig from '../config/commonConfig.json';

const TableComponent = () => {

    const data = [
        { weakNo: 4, yield: "Table Body", demand: "Table Body", excess: "4000T" },
        { weakNo: 5, yield: "Table Body", demand: "Table Body", excess: "4000T" },
        { weakNo: 6, yield: "Table Body", demand: "Table Body", excess: "600T" },
        { weakNo: 7, yield: "Table Body", demand: "Table Body", excess: "10T" },
    ];

    const getColorClass = (excess) => {
        const excessValue = parseInt(excess);
        if (excessValue > 600) {
            return 'excess-green';
        } else if (excessValue === 600) {
            return 'excess-red';
        } else if (excessValue === 10) {
            return 'excess-blue';
        } else {
            return '';
        }
    };

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
        <table className="table">
            <thead className="table-header">
            <tr>
                <th className="table-cell">{commonConfig[selectedLanguage].TB_WEEKNO}</th>
                <th className="table-cell">{commonConfig[selectedLanguage].TB_TOTAL_YIELD}</th>
                <th className="table-cell">{commonConfig[selectedLanguage].TB_TOTAL_DEMAND}</th>
                <th className="table-cell">{commonConfig[selectedLanguage].TB_INEXCESS}</th>
            </tr>
            </thead>
            <tbody className="table-body">
            {data.map((item, index) => (
                <tr key={index}>
                    <td className="table-cell">{item.weakNo}</td>
                    <td className="table-cell">{item.yield}</td>
                    <td className="table-cell">{item.demand}</td>
                    <td className="table-cell">
                            <span className={`excess-badge ${getColorClass(item.excess)}`}>
                                {parseInt(item.excess) > 600
                                    ? <FontAwesomeIcon icon={faArrowUp} className="arrow-icon" />
                                    : <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
                                }
                                {item.excess}
                            </span>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
