import React from 'react';
import leftArrow from '../../resources/img/leftArrow.svg'
import rightArrow from '../../resources/img/rightArrow.svg'
import './arrow.css'

const Arrow = ({disabled, direction, callback}) => {
    return (
        <button className={disabled ? "disabled-arrow-btn" : "arrow-btn"} onClick={callback}>
            <img src={direction === 'right' ? rightArrow : leftArrow} alt="" className="arrow"/>
        </button>
    );
};

export default Arrow;