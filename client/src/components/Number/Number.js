import React from 'react';
import './number.css'

const Number = ({number, callback, marginTop, marginLeft}) => {
    return (
        <button
            className="number-btn"
            style={{marginTop: marginTop, marginLeft: marginLeft}}
            onClick={callback && callback}
        >
            {number}
        </button>
    );
};

export default Number;