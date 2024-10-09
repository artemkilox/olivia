import React from 'react';
import './button.css'
import crossIcon from '../../resources/img/crossIcon.svg'
import arrowIcon from '../../resources/img/btnArrowIcon.svg'
import arrowIconWhite from '../../resources/img/btnArrowIconWhite.svg'

const Button = ({text, primary, type, callback, big}) => {

    return (
        <button
            className={primary ? "primary-btn" : "secondary-btn"}
            onClick={callback && callback}
            style={big ? {padding: "35px"} : {padding: "10px 20px"}}
        >
            {text}
            {type && <img src={type === 'cross' ? crossIcon : (type === 'pointer' && !primary) ? arrowIcon : arrowIconWhite} alt="" className="img"/>}
        </button>
    );
};

export default Button;