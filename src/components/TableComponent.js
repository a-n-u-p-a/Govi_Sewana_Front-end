import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';


const TableComponent = () => {

    const data = [
        {weakNo: 4, yield: "Table Body", demand: "Table Body", excess: "4000T"},
        {weakNo: 5, yield: "Table Body", demand: "Table Body", excess: "4000T"},
        {weakNo: 6, yield: "Table Body", demand: "Table Body", excess: "600T"},
        {weakNo: 7, yield: "Table Body", demand: "Table Body", excess: "10T"},
    ];

    const getColorClass = (excess) => {
        const excessValue = parseInt(excess);
        if (excessValue > 600) {
            return 'bg-green-500 text-green-700 bg-opacity-30';
        } else if (excessValue === 600) {
            return 'bg-red-500 text-white bg-opacity-86';
        } else if (excessValue === 10) {
            return 'bg-blue-500 text-blue-700 bg-opacity-30';
        } else {
            return '';
        }
    };

    return (
        <table className="table-auto mx-auto w-full mt-3">
            <thead className={"bg-gray-300"}>
            <tr>
                <th className="px-4 py-2">Weak No</th>
                <th className="px-4 py-2">Total Yield of Farmers /mt</th>
                <th className="px-4 py-2">Total Demand Required/mt</th>
                <th className="px-4 py-2">In Excess</th>
            </tr>
            </thead>
            <tbody className={"text-center bg-white"}>
            {data.map((item, index) => (
                <tr key={index}>
                    <td className="border px-4 py-2">{item.weakNo}</td>
                    <td className="border px-4 py-2">{item.yield}</td>
                    <td className="border px-4 py-2">{item.demand}</td>
                    <td className="border px-4 py-2">
                <span className={`inline-flex items-center justify-center px-2 py-1 rounded ${getColorClass(item.excess)}`} style={{borderRadius: '20px', width: '90px'}}>
                  {parseInt(item.excess) > 600
                      ? <FontAwesomeIcon icon={faArrowUp} className="text-green-500 mr-2"/>
                      : <FontAwesomeIcon icon={faArrowDown} className="text-white-500 mr-2"/>
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
