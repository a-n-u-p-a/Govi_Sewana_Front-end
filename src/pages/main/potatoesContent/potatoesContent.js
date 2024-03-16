import React, {useEffect, useState} from "react";
import './potatoesContent.css';
// import PotatoesDetail from "../potatoesDetail/potatoesDetail";

const PotatoesContent = ({onChangePage}) => {

    const [pageTitle, setPageTitle] = useState('');

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

                <h2 className={"pot_content_txt"} style={{marginTop: "3%"}} onClick={selectSoil}> - SOIL </h2>
                <h2 className={"pot_content_txt"} onClick={selectPlanting}> - DISTANCE BETWEEN PLANTS AND PLANTING
                    SEEDS </h2>
                <h2 className={"pot_content_txt"} onClick={selectFer}> - FERTILIZING </h2>
                <h2 className={"pot_content_txt"} onClick={selectRECOMMEND}> - RECOMMENDED SPECIES </h2>
                <h2 className={"pot_content_txt"} onClick={selectDISEASES}> - DISEASES AND PESTICIDES </h2>
                <h2 className={"pot_content_txt"} onClick={selectHARVESTING}> - HARVESTING </h2>

            </div>

        </div>
    )
}

export default PotatoesContent;
