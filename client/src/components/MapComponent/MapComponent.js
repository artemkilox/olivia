import React, {useState} from 'react';
import './mapComponent.css'
import map from '../../resources/img/oliviaMainPlan.jpg'
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";
import {INSTRUCTION_ROUTE, LOCATION_ROUTE} from "../../utils/consts";
import {buildings} from "../../data/data";
import Number from "../Number/Number";
import Icon from "../Icon/Icon";
import lightIcon from '../../resources/img/lightIcon.svg'
import {$host} from "../../http";

const MapComponent = () => {
    const navigate = useNavigate()
    const [lightMode, setLightMode] = useState(1)

    const changeLightMode = (mode) => {
        const info = "light" + mode.toString()
        $host.post('/', {info})
        console.log("light mode " + mode)
        setLightMode(mode)
    }

    const buildingClick = (number) => {
        const info = number.toString()
        $host.post('/', {info})
        console.log("building number " + number)
    }

    return (
        <div className="map-component-wrapper">
            <img src={map} alt="" className="map"/>
            <div className="numbers-wrapper">
                {buildings.map(building =>
                    <Number
                        marginTop={building.marginTop}
                        marginLeft={building.marginLeft}
                        key={building.id}
                        number={building.id}
                        callback={() => buildingClick(building.id)}
                    />
                )}
            </div>
            <div className="btn-wrapper">
                <div className="top-btn">
                    <Button
                        type="pointer"
                        primary={false}
                        text="Инструкция по управлению"
                        callback={() => navigate(INSTRUCTION_ROUTE)}
                    />
                    <Button
                        type="pointer"
                        primary={true}
                        text="Вся инфраструктура ЖК"
                        callback={() => navigate(LOCATION_ROUTE)}
                    />
                </div>
                <div className="bot-btn">
                    <div className="title">
                        <Icon url={lightIcon} /> Настройка подсветки макета
                    </div>
                    <div className="bot-btn-wrapper">
                        <Button
                            primary={lightMode === 1}
                            text="Уличная"
                            callback={() => changeLightMode(1)}
                            big={true}
                        />
                        <Button
                            primary={lightMode === 2}
                            text="Общая"
                            callback={() => changeLightMode(2)}
                            big={true}
                        />
                        <Button
                            primary={lightMode === 3}
                            text="Корпуса"
                            callback={() => changeLightMode(3)}
                            big={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapComponent;