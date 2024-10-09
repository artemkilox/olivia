import React from 'react';
import Header from "../../components/Header/Header";
import './galleryPage.css'
import GalleryComponent from "../../components/GalleryComponent/GalleryComponent";

const GalleryPage = () => {
    return (
        <div className="gallery-page-wrapper">
            <Header />
            <h1 className="gallery-title">ГАЛЕРЕЯ</h1>
            <GalleryComponent />
        </div>
    );
};

export default GalleryPage;