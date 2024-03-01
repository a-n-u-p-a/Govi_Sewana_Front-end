import React from "react";
// import './App.css';
import TableComponent from "../../components/TableComponent";
import CropYieldPrediction from "../../components/CropYieldPrediction";
import carrotImage from "../../assets/images/carrot.png";
import potatoImage from "../../assets/images/potato.png";
import CustomButton from "../../components/CustomButton";
import Footer from "../../components/Footer";

function App() {


    return (
        <>
            <div className="border border-green-500 rounded-lg p-8 m-14" style={{backgroundColor: '#cde3b2', borderWidth: '2px', borderColor: '#1e7355'}}>

                <h2 className="text-2xl mb-4 p-4">Crop Yield Prediction</h2>

                <CropYieldPrediction/>

                <h2 className="text-2xl mt-6 p-4">Crop Yield Prediction</h2>

                <div className={"flex-col p-5 border rounded-xl mt-3"} style={{backgroundColor: '#5c8b7b', borderWidth: '2px', borderColor: '#1e7355'}}>

                    <div className='flex items-center justify-between p-2 bg-gray-600 rounded-lg' style={{width:'150px'}}>
                        <p className='mr-2 text-white'>Carrot</p>
                        <img src={carrotImage} alt='Carrot' className='w-8 h-8'/>
                    </div>

                    <TableComponent/>

                    <div className={"flex flex-row w-full items-center justify-between p-1"}>

                        <div className="flex items-center justify-between p-1 rounded-lg mt-5"
                             style={{width: '550px', backgroundColor: '#4e724a'}}>

                            <div className="flex items-center">
                                <p className="mr-2 text-white">Would you be planting the latest prediction? </p>
                            </div>

                            <div className={"m-1 gap-2" }>
                                <CustomButton BTN_NAME={"Yes"} STYLE={{width:"80px"}}/>
                                <CustomButton BTN_NAME={"No"} STYLE={{width:"80px"}}/>
                            </div>
                        </div>

                        <div className={"flex mt-3"}>
                            <CustomButton BTN_NAME={"Crop recommendations available"}/>
                        </div>
                    </div>

                    <div className="w-full bg-white mt-3" style={{height: '2px'}}/>

                    <div className='flex items-center justify-between p-2 my-4 bg-gray-600 rounded-lg' style={{width:'150px'}}>
                        <p className='mr-2 text-white'>Carrot</p>
                        <img src={carrotImage} alt='Carrot' className='w-8 h-8'/>
                    </div>

                    <TableComponent/>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default App;