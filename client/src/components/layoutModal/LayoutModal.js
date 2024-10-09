import React from 'react';
import Button from "../Button/Button";
import './layoutModal.css'

const LayoutModal = ({curLay, showModal, closeModal}) => {
    return (
        <div
            className="layout-modal"
            style={showModal ? {display: "flex"} : {display: "none"}}
        >
            <div className="btn-wrapper">
                <Button type="cross" callback={closeModal} primary={true} text="Закрыть"/>
            </div>
            <div className="layout-wrapper">
                <img src={curLay.img} alt="" className="layout-modal-img"/>
                <div className="layout-info">
                    {curLay.type}
                    <div className="layout-dot"></div>
                    {curLay.area}
                </div>
            </div>
        </div>
    );
};

export default LayoutModal;