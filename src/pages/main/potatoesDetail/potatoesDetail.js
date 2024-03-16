import React, {useEffect, useState} from "react";
import '../potatoesContent/potatoesContent.css'
import './potatoesDetail.css'
import cultivationTipsConfig from '../../../config/cultivationsData.json';

const PotatoesDetail = () => {

    const [pageTitle, setPageTitle] = useState('');
    const [pageSubTitle, setPageSubTitle] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        return localStorage.getItem('selectedLanguage') || 'ENG';
    });

    useEffect(() => {
        const langValue = localStorage.getItem('selectedLanguage');
        if (langValue !== null) {
            setSelectedLanguage(langValue)
        }
    }, []);


    useEffect(() => {
        const cultivationContent = sessionStorage.getItem('cultivationContent')
        setPageTitle(cultivationContent);
        const pageSubName = sessionStorage.getItem('selectTips')
        setPageSubTitle(pageSubName);

    }, []);

    const getCultivationTipsConfigText = (title, language, subTitle) => {
        if (cultivationTipsConfig[title] && cultivationTipsConfig[title][language] && cultivationTipsConfig[title][language][subTitle]) {
            return cultivationTipsConfig[title][language][subTitle];
        }

        return "Text not available";
    };


    return (
        <div className={"container pot_content_main_section flex_col"}>

            <div className={"pot_content_header flex_center"}>
                <h1> {pageTitle} </h1>
            </div>

            <div className={"pot_detail_section flex_center flex_col res_cul_detail"}>

                <div className={"flex_align "}>
                    <h1 className={"pot_detail_h1"}> {pageSubTitle} </h1>
                </div>

                <div className={"pot_detail_content flex_justify flex_col res_cul_detail_2"}>

                    <p>
                        {getCultivationTipsConfigText(pageTitle, selectedLanguage, pageSubTitle)}
                    </p>

                </div>
            </div>
        </div>

    )
}

export default PotatoesDetail;
