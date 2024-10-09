import React from 'react';
import { useNavigate } from "react-router-dom";
import mainLogo from '../../resources/img/oliviaLogo.svg'
import './header.css'
import {ABOUT_ROUTE, GALLERY_ROUTE, LAYOUT_ROUTE, LOCATION_ROUTE, MAIN_PAGE_ROUTE} from "../../utils/consts";

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className="header-wrapper">
            <img src={mainLogo} alt="" className="header-logo" onClick={() => navigate(MAIN_PAGE_ROUTE)}/>
            <nav className="header-nav">
                <div className="header-nav-item" onClick={() => navigate(ABOUT_ROUTE)}>О комплексе</div>
                <div className="header-nav-item" onClick={() => navigate(GALLERY_ROUTE)}>Галерея</div>
                <div className="header-nav-item" onClick={() => navigate(LOCATION_ROUTE)}>Локация</div>
                <div className="header-nav-item" onClick={() => navigate(LAYOUT_ROUTE)}>Планировки</div>
            </nav>
        </div>
    );
};

export default Header;