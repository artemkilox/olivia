import React, {useState} from 'react';
import './galleryComponent.css'
import {images} from '../../data/data'
import Arrow from "../Arrow/Arrow";

const GalleryComponent = () => {
    const [curImg, setCurImg] = useState(0)
    const [canNext, setCanNext] = useState(true)
    const [canPrev, setCanPrev] = useState(false)

    const nextImg = () => {
        if(curImg >= 0)
            setCanPrev(true)
        if(curImg === images.length - 2)
            setCanNext(false)
        if(curImg < images.length - 1)
            setCurImg(curImg + 1)
    }

    const prevImg = () => {
        if(curImg <= images.length - 1)
            setCanNext(true)
        if(curImg === 1)
            setCanPrev(false)
        if(curImg > 0)
            setCurImg(curImg - 1)
    }

    return (
        <div className="gallery-component">
            <div className="slider-mask">
                <div
                    className="slider"
                    style={{marginLeft: -(curImg * 160) + "vw" }}
                >
                    {images.map((image) =>
                        <img key={image.id} src={image.img} alt="" className="slider-img"/>
                    )}
                </div>
            </div>
            <div className="slider-controls">
                <Arrow disabled={!canPrev} direction="left" callback={prevImg}/>
                <Arrow disabled={!canNext} direction="right" callback={nextImg}/>
            </div>
        </div>
    );
};

export default GalleryComponent;