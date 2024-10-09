import React from 'react';
import Header from "../../components/Header/Header";
import backArrow from '../../resources/img/backBtnArrow.svg'
import './instructionPage.css'
import {useNavigate} from "react-router-dom";
import {MAIN_PAGE_ROUTE} from "../../utils/consts";

const InstructionPage = () => {
    const navigate = useNavigate()

    return (
        <div className="instruction-wrapper">
            <Header />
            <button
                className="instruction-back-btn"
                onClick={() => navigate(MAIN_PAGE_ROUTE)}
            >
                <img src={backArrow} alt="" className="back-img-item"/>
                Назад на главный экран
            </button>
            <h1 className="instruction-title">ИНСТРУКЦИЯ ПО УПРАВЛЕНИЮ</h1>
            <div className="instruction-actions-wrapper">
                <article className="instruction-action">
                    <div className="instruction-action-title">
                        <div className="instruction-action-dot"></div>
                        Подсветка дома на карте:
                    </div>
                    <div className="instruction-action-description">
                        1. Найдите карту парка, расположенную посередине на экране моноблока. <br/>
                        2. Выберите нужный вам дом, нажав на соответствующую область.
                    </div>
                </article>
                <article className="instruction-action">
                    <div className="instruction-action-title">
                        <div className="instruction-action-dot"></div>
                        Подсветка домов:
                    </div>
                    <div className="instruction-action-description">
                        Этот режим активирует подсветку всех домов, расположенных на макете. <br/>
                        Чтобы включить его, выберите соответствующую кнопку под картой.
                    </div>
                </article>
                <article className="instruction-action">
                    <div className="instruction-action-title">
                        <div className="instruction-action-dot"></div>
                        Уличная подсветка:
                    </div>
                    <div className="instruction-action-description">
                        Этот режим активирует подсветку улиц, расположенных на макете. <br/>
                        Чтобы включить его, выберите соответствующую кнопку под картой.
                    </div>
                </article>
                <article className="instruction-action">
                    <div className="instruction-action-title">
                        <div className="instruction-action-dot"></div>
                        Общая подсветка:
                    </div>
                    <div className="instruction-action-description">
                        Этот режим активирует всю подсветку на макете. <br/>
                        Чтобы включить его, выберите соответствующую кнопку под картой.
                    </div>
                </article>
            </div>
        </div>
    );
};

export default InstructionPage;