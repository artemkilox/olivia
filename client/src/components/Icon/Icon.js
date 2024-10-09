import React from 'react';
import './icon.css'

const Icon = ({url}) => {
    return (
        <div className="icon-wrapper">
            <img src={url} alt="" className="icon"/>
        </div>
    );
};

export default Icon;