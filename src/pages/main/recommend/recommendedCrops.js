
import React, {useEffect, useState} from "react";
import './recommendedCrops.css';
import potatoImg from '../../../assets/images/potato.png';
import carrotImg from '../../../assets/images/carrot.png';
import beetRootImg from '../../../assets/images/beetroot.png';
import RecommendCard from "../../../components/recommendCard";
import commonConfig from '../../../config/commonConfig.json';



const RecommendedCrops = () => {
    

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
        <div className={"container rec_main_section"}>
            <div className={"rec_sub_main_section flex_col flex_justify"}>

                <div className={"rec_top_section flex_align"}>
                    <h1>{commonConfig[selectedLanguage].RECOMMENDED} <br/> {commonConfig[selectedLanguage].CROP_DES}</h1> 
                </div>
                <div className={"rec_separator"}/>
                <div className={"flex_align"}>
                    <h3>{commonConfig[selectedLanguage].WEEK_NO} : </h3>
                    <h3 className={"rec_week_number"}>00</h3>
                </div>
                <div className={"rec_card_section flex_col"}>
                    <div className={"rec_card_sub_section flex_align"}>
                        <RecommendCard SOURCE_IMG={potatoImg} ALT_IMG={potatoImg} ITEM_NAME={commonConfig[selectedLanguage].POTATO} />
                        <RecommendCard SOURCE_IMG={carrotImg} ALT_IMG={carrotImg} ITEM_NAME={commonConfig[selectedLanguage].CARROT} />
                        <RecommendCard SOURCE_IMG={beetRootImg} ALT_IMG={beetRootImg} ITEM_NAME={commonConfig[selectedLanguage].BEETROOT} />
                    </div>
                    {/* <div className={"rec_card_sub_section flex_align"}>
                        <RecommendCard SOURCE_IMG={carrotImg} ALT_IMG={carrotImg} ITEM_NAME={commonConfig[selectedLanguage].POTATO}/>
                        <RecommendCard SOURCE_IMG={potatoImg} ALT_IMG={potatoImg} ITEM_NAME={commonConfig[selectedLanguage].CARROT}/>
                        <RecommendCard SOURCE_IMG={beetRootImg} ALT_IMG={beetRootImg} ITEM_NAME={commonConfig[selectedLanguage].BEETROOT}/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default RecommendedCrops;
