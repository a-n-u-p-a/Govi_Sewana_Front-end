import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

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

    return (
        <table className="table">
            <thead className="table-header">
            <tr>
                <th className="table-cell">Weak No</th>
                <th className="table-cell">Total Yield of Farmers /mt</th>
                <th className="table-cell">Total Demand Required/mt</th>
                <th className="table-cell">In Excess</th>
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
