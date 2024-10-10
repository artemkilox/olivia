import React from 'react';
import './number.css'

const Number = ({active, number, callback, marginTop, marginLeft}) => {
    return (
        <button
            className={active ? "active-btn" : "number-btn"}
            style={{marginTop: marginTop, marginLeft: marginLeft}}
            onClick={callback && callback}
        >
            {number}
        </button>
    );
};

export default Number;