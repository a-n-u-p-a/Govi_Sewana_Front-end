import React from "react";
import '../potatoesContent/potatoesContent.css'
import './potatoesDetail.css'

const PotatoesDetail = () => {
    return(
        <div className={"container pot_content_main_section flex_col"}>

            <div className={"pot_content_header flex_center"}>
                <h1> POTATOES </h1>
            </div>

            <div className={"pot_detail_section flex_center flex_col"}>

                <div className={"flex_align "}>
                    <h1 className={"pot_detail_h1"}> SOIL </h1>
                </div>


                <div className={"pot_detail_content flex_justify flex_col"}>

                    <p>
                        1. Introduction to Soil in Potato /ultivation.<br/>
                        ! Soil quality is a decisive factor in the success of potato cultivation in Sri Lanka
                    </p>

                    <p>
                        2. Ideal Soil /onditions. <br/>
                        ! Type and pH: Well-drained, loose, slightly acidic to neutral soils with a pH range between 5.5
                        and 7.0 are preferred7 <br/>
                        ! Texture: Sandy loam or loamy soils are particularly favorable, ensuring proper aeration and
                        drainage

                    </p>

                    <p>

                        3. Soil Preparation. <br/>
                        ! Plowing and Incorporation: Farmers plow the soil to break up compacted layers, incorporating
                        well-rotted organic matter such as compost7 <br/>
                        ! Raised Beds: /reation of raised beds aids in drainage and provides an optimal environment for
                        potato growth

                    </p>

                   

                </div>

            </div>

        </div>

    )
}

export default PotatoesDetail;
