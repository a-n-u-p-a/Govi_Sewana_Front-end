import React from 'react';

const CropYieldPrediction = () => {
    return (
        <div className="p-5 border rounded-xl" style={{backgroundColor: '#5c8b7b', borderWidth: '1px', borderColor: '#1e7355'}}>
            

            <div className="flex items-center justify-between mb-4">

                <div className="mr-4" style={{width:"250px"}}>
                    <label className="block mb-2 font-medium">Crop:</label>
                    <select className='border rounded-lg p-2 w-full max-w-xs' style={{borderWidth: '1px',border:'1.5px solid #027A48'}}>
                        <option value="carrot">Carrot</option>
                        <option value="carrot">Potato</option>
                    </select>     
                </div>

                <div className="mr-4" style={{width:"250px"}}>
                    <label className='block mb-2 font-medium'>Date Picker:</label>
                    <input type='date' className='border rounded-lg p-2 w-full max-w-xs' style={{borderWidth: '1px',border:'1.5px solid #027A48'}}/>    
                </div>  

                <div className='mr-4' style={{width:'250px'}}>
                    <label className='block mb-2 font-medium'>No Of Acres:</label>
                    <input type='number' className='border rounded-lg p-2 w-full max-w-xs' style={{borderWidth: '1px',border:'1.5px solid #027A48'}}/> 
                </div>

                <button className="text-white rounded-lg mt-6 px-4 py-2 border-2 border-white bg-[#5c8b7b] w-64 shadow-[0_4px_0_0_#2c5c4b] hover:shadow-[0_2px_0_0_#2c5c4b] focus:outline-none focus:shadow-[0_2px_0_0_#2c5c4b] transition-shadow duration-150 ease-in-out">
                Submit
                </button>


            </div>


            <div className='flex items-center'>

                <div
                        className="flex items-center justify-center mt-7 text-white rounded-lg px-4 py-2 shadow-xl" style={{backgroundColor: '#5c8b7b', borderWidth: '1px', borderColor: '#ffffff', width: "600px"}}>

                        <div style={{width: "35%"}}>
                            <label className="flex">Predicted Yield: </label>
                        </div>
                        <div style={{width: "35%"}}>
                            <label className="block m-2">Crop Harvested at: </label>
                        </div>

                        <div style={{width: "30%"}}>
                            <label className="block m-2">Week No: </label>
                        </div>
                </div>

            </div>
           
        </div>
    );
};

export default CropYieldPrediction;
