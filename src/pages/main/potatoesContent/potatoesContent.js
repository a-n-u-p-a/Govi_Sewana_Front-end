import React, {useEffect, useState} from "react";
import './potatoesContent.css';
import commonConfig from '../../../config/commonConfig.json';

const PotatoesContent = ({onChangePage}) => {

    const [pageTitle, setPageTitle] = useState('');

    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        return localStorage.getItem('selectedLanguage') || 'ENG';
    });


    useEffect(() => {
        const cultivationContent = sessionStorage.getItem('cultivationContent')
        setPageTitle(cultivationContent)
    }, []);

    const selectSoil = () => {
        onChangePage('PotatoesDetail');
        sessionStorage.setItem('selectTips', 'SOIL');
    }

    const selectPlanting = () => {
        onChangePage('PotatoesDetail');
        sessionStorage.setItem('selectTips', 'PLANTING');
    }

    const selectFer = () => {
        onChangePage('PotatoesDetail');
        sessionStorage.setItem('selectTips', 'FERTILIZING');
    }

    const selectRECOMMEND = () => {
        onChangePage('PotatoesDetail');
        sessionStorage.setItem('selectTips', 'RECOMMEND');
    }

    const selectDISEASES = () => {
        onChangePage('PotatoesDetail');
        sessionStorage.setItem('selectTips', 'DISEASES');
    }

    const selectHARVESTING = () => {
        onChangePage('PotatoesDetail');
        sessionStorage.setItem('selectTips', 'HARVESTING');
    }

    return (

        <div className={"container pot_content_main_section flex_col"}>

            <div className={"pot_content_header flex_center"}>
                <h1> {pageTitle} </h1>
            </div>

            <div className={"pot_content_section"}>

                <h2 className={"pot_content_txt"} style={{marginTop: "3%"}} onClick={selectSoil}> - {commonConfig[selectedLanguage].SOIL} </h2>
                <h2 className={"pot_content_txt"} onClick={selectPlanting}> - {commonConfig[selectedLanguage].DISTANCE_PLANTS_AND_PLANTING_SEEDS } </h2>
                <h2 className={"pot_content_txt"} onClick={selectFer}> - {commonConfig[selectedLanguage].FERTILIZING}</h2>
                <h2 className={"pot_content_txt"} onClick={selectRECOMMEND}> -{commonConfig[selectedLanguage].RECOMMENDED_SPECIES}  </h2>
                <h2 className={"pot_content_txt"} onClick={selectDISEASES}> -{commonConfig[selectedLanguage].DISEASES_AND_PESTICIDES}   </h2>
                <h2 className={"pot_content_txt"} onClick={selectHARVESTING}> - {commonConfig[selectedLanguage].HARVESTING} </h2>

            </div>

        </div>
    )
}

export default PotatoesContent;
