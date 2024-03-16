import React from "react";
import './recommendedCrops.css';
import potatoImg from '../../../assets/images/potato.png';
import carrotImg from '../../../assets/images/carrot.png';
import beetRootImg from '../../../assets/images/beetroot.png';
import RecommendCard from "../../../components/recommendCard";

const RecommendedCrops = () => {
    return (
        <div className={"container rec_main_section"}>
            <div className={"rec_sub_main_section flex_col flex_justify"}>

                <div className={"rec_top_section flex_align"}>
                    <h1>Recommended <br/> Crops For Your Cultivation</h1>
                </div>
                <div className={"rec_separator"}/>
                <div className={"flex_align"}>
                    <h3>Week Number : </h3>
                    <h3 className={"rec_week_number"}>00</h3>
                </div>
                <div className={"rec_card_section flex_col"}>
                    <div className={"rec_card_sub_section flex_align"}>
                        <RecommendCard SOURCE_IMG={potatoImg} ALT_IMG={potatoImg} ITEM_NAME={"Potato"}/>
                        <RecommendCard SOURCE_IMG={carrotImg} ALT_IMG={carrotImg} ITEM_NAME={"Carrot"}/>
                        <RecommendCard SOURCE_IMG={beetRootImg} ALT_IMG={beetRootImg} ITEM_NAME={"BeetRoot"}/>
                    </div>
                    <div className={"rec_card_sub_section flex_align"}>
                        <RecommendCard SOURCE_IMG={carrotImg} ALT_IMG={carrotImg} ITEM_NAME={"Carrot"}/>
                        <RecommendCard SOURCE_IMG={potatoImg} ALT_IMG={potatoImg} ITEM_NAME={"Potato"}/>
                        <RecommendCard SOURCE_IMG={beetRootImg} ALT_IMG={beetRootImg} ITEM_NAME={"BeetRoot"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedCrops;
