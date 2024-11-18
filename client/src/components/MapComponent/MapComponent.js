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
    const [lightStreet, setLightStreet] = useState(false)
    const [lightMain, setLightMain] = useState(false)
    const [lightCorpus, setLightCorpus] = useState(false)
    const [activeBuilding, setActiveBiulding] = useState(-1)

    const changeStreetMode = (mode) => {
        const info = mode.toString() + (lightStreet ? " off" : " on")
        $host.post('/', {info})
        console.log("light mode " + mode)
        setLightStreet(!lightStreet)
    }

    const changeMainMode = (mode) => {
        const info = mode.toString() + (lightMain ? " off" : " on")
        $host.post('/', {info})
        console.log("light mode " + mode)
        setLightMain(!lightMain)
    }

    const changeCorpusMode = (mode) => {
        setActiveBiulding(0)
        const info = mode.toString() + (lightCorpus ? " off" : " on")
        $host.post('/', {info})
        console.log("light mode " + mode)
        setLightCorpus(!lightCorpus)
    }

    const buildingClick = (number) => {
        if(activeBuilding === 0){
            changeCorpusMode("Корпус")
        }
        setActiveBiulding(number)
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
                        active={activeBuilding === building.id}
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
                            primary={lightStreet}
                            text="Уличная"
                            callback={() => changeStreetMode("Уличная")}
                            big={true}
                        />
                        {/*<Button*/}
                        {/*    primary={lightMain}*/}
                        {/*    text="Общая"*/}
                        {/*    callback={() => changeMainMode("Общая")}*/}
                        {/*    big={true}*/}
                        {/*/>*/}
                        <Button
                            primary={lightCorpus}
                            text="Корпуса"
                            callback={() => changeCorpusMode("Корпуса")}
                            big={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapComponent;