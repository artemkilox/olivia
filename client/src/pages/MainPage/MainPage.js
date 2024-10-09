import React from 'react';
import Header from "../../components/Header/Header";
import MapComponent from "../../components/MapComponent/MapComponent";
import './mainPage.css'

const MainPage = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <div className="title-wrapper">
                <div className="description">
                    Интерактивная карта
                </div>
                <div className="title">
                    ЖК "OLIVIA"
                </div>
            </div>
            <MapComponent />
        </div>
    );
};

export default MainPage;