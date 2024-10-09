import React from 'react';
import Header from "../../components/Header/Header";
import locationMapImg from '../../resources/img/locationMap.svg'
import Icon from "../../components/Icon/Icon";
import manIcon from '../../resources/img/humanIcon.svg'
import carIcon from '../../resources/img/carIcon.svg'
import './locationPage.css'

const LocationPage = () => {
    return (
        <div className="location-page-wrapper">
            <Header />
            <h1 className="location-title">ЛОКАЦИЯ</h1>
            <img src={locationMapImg} alt="" className="location-map-img"/>
            <div className="location-content-wrapper">
                <div className="location-content-title">ВСЕ ЧТО НУЖНО ДЛЯ ЖИЗНИ</div>
                <div className="location-item">
                    <div className="location-item-text">
                        <div className="location-item-name">Школы</div>
                        <div className="location-item-option">Школа №27 (4,3 км)</div>
                        <div className="location-item-option">Школа №26 (3,5 км)</div>
                    </div>
                    <div className="location-item-time">
                        <Icon url={carIcon}/> 7 мин
                    </div>
                </div>
                <div className="location-item">
                    <div className="location-item-text">
                        <div className="location-item-name">Плавательный клуб сочи и спортивная школа</div>
                    </div>
                    <div className="location-item-time">
                        <Icon url={carIcon}/> 10 мин
                    </div>
                </div>
                <div className="location-item">
                    <div className="location-item-text">
                        <div className="location-item-name">Остановка общественного транспорта</div>
                    </div>
                    <div className="location-item-time">
                        <Icon url={manIcon}/> 5 мин
                    </div>
                </div>
                <div className="location-item">
                    <div className="location-item-text">
                        <div className="location-item-name">Детский сад</div>
                        <div className="location-item-option">Детский сад №140</div>
                    </div>
                    <div className="location-item-time">
                        <Icon url={carIcon}/> 5 мин
                    </div>
                </div>
                <div className="location-item">
                    <div className="location-item-text">
                        <div className="location-item-name">Частный детский сад на территории комплекса</div>
                    </div>
                    <div className="location-item-time">
                        <Icon url={manIcon}/> 1 мин
                    </div>
                </div>
                <div className="location-item">
                    <div className="location-item-text">
                        <div className="location-item-name">Поликлиника</div>
                        <div className="location-item-option">4 км</div>
                    </div>
                    <div className="location-item-time">
                        <Icon url={carIcon}/> 7 мин
                    </div>
                </div>
                <div className="location-item">
                    <div className="location-item-text">
                        <div className="location-item-name">Торговые центры</div>
                        <div className="location-item-option">«Апельсин», «Плаза», «Новый век»</div>
                    </div>
                    <div className="location-item-time">
                        <Icon url={carIcon}/> 9 мин
                    </div>
                </div>
                <div className="location-item">
                    <div className="location-item-text">
                        <div className="location-item-name">Рынок</div>
                        <div className="location-item-option">2,5 км</div>
                    </div>
                    <div className="location-item-time">
                        <Icon url={carIcon}/> 5 мин
                    </div>
                </div>
                <div className="non-location-item">
                    Более 10 ресторанов в шаговой доступности
                </div>
            </div>
        </div>
    );
};

export default LocationPage;