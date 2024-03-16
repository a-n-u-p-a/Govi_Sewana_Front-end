import React, {useState} from "react";
import './mainForm.css';
import NavBar from "../../components/navBar";
import YieldPrediction from "./yieldPrediction/YieldPrediction";
import RecommendedCrops from "./recommend/recommendedCrops";
import Footer from "../../components/footer";
import Prediction from "./prediction/prediction";
import CultivationTips from "./cultivationTips/cultivationTips";
import Account from "./account/account";
import PotatoesContent from "./potatoesContent/potatoesContent";
import PotatoesDetail from "./potatoesDetail/potatoesDetail";

const MainForm = () => {

    const [currentPage, setCurrentPage] = useState(null);

    const handleButtonClick = (page) => {
        setCurrentPage(page);
    };

    const clickCultivationTipsPot = () => {
        setCurrentPage('PotatoesContent')
        sessionStorage.setItem('cultivationContent', 'POTATOES');
    }

    const clickCultivationTipsCar = () => {
        setCurrentPage('PotatoesContent')
        sessionStorage.setItem('cultivationContent', 'CARROT');
    }

    const clickCultivationTipsBeet = () => {
        setCurrentPage('PotatoesContent')
        sessionStorage.setItem('cultivationContent', 'BEETROOT');
    }


    const renderPage = () => {
        switch (currentPage) {
            case 'Profile':
                return <Account/>;

            case 'YieldPrediction':
                return <YieldPrediction/>;

            case 'Prediction':
                return <Prediction/>;

            case 'RecommendedCrops':
                return <RecommendedCrops/>;

            case 'PotatoesDetail':
                return <PotatoesDetail/>;

            case 'PotatoesContent':
                return <PotatoesContent onChangePage={handleButtonClick}/>;

            case 'CultivationTips':
                return <CultivationTips
                    BTN_POTATO={clickCultivationTipsPot}
                    BTN_CARROT={clickCultivationTipsCar}
                    BTN_BEET={clickCultivationTipsBeet}
                />;

            default:
                return <Account/>;
        }
    };

    return (
        <div className={"main_form_section"}>
            <div className={"main_form_nav_bar_section"}>
                <NavBar
                    PROFILE_ON_CLICK={() => handleButtonClick('Profile')}
                    PRE_ON_CLICK={() => handleButtonClick('YieldPrediction')}
                    PRI_ON_CLICK={() => handleButtonClick('Prediction')}
                    REC_ON_CLICK={() => handleButtonClick('RecommendedCrops')}
                    CUL_ON_CLICK={() => handleButtonClick('CultivationTips')}
                />
            </div>
            <div className={"main_form_content_section"}>
                {renderPage()}

                <div className={"main_form_footer"}>
                    <Footer/>
                </div>

            </div>
        </div>
    )
}

export default MainForm;
