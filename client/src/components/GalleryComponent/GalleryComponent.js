import React, {useEffect, useState} from 'react';
import './galleryComponent.css'
import {images} from '../../data/data'
import Arrow from "../Arrow/Arrow";

const GalleryComponent = () => {
    const [imagesArr, setImagesArr] = useState([])
    const [curImg, setCurImg] = useState(1)
    const [transitionEnabled, setTransitionEnabled] = useState(true)

    useEffect(() => {
        let outputArr = []
        outputArr.push(images[images.length - 1])
        images.map(item => {
            outputArr.push(item)
        })
        outputArr.push(images[0])
        setImagesArr(outputArr)
    }, [])

    const nextImg = () => {
        setTransitionEnabled(true)
        if(curImg < imagesArr.length - 1)
            setCurImg(curImg + 1)
    }

    const prevImg = () => {
        setTransitionEnabled(true)
        if(curImg > 0)
            setCurImg(curImg - 1)
    }

    const handleTransitionEnd = () => {
        if (curImg === 0) {
            setTransitionEnabled(false)
            setCurImg(imagesArr.length - 2)
        } else if (curImg === imagesArr.length - 1) {
            setTransitionEnabled(false)
            setCurImg(1)
        }
    }

    return (
        <div className="gallery-component">
            <div className="slider-mask">
                <div
                    className="slider"
                    style={{
                        marginLeft: -(curImg * 160) + "vw",
                        transition: !transitionEnabled ? 'none' : '0.2s',
                    }}
                    onTransitionEnd={() => handleTransitionEnd()}
                >
                    {imagesArr !== [] && imagesArr.map((image) =>
                        <img src={image.img} alt="" className="slider-img"/>
                    )}
                </div>
            </div>
            <div className="slider-controls">
                <Arrow direction="left" callback={prevImg}/>
                <Arrow direction="right" callback={nextImg}/>
            </div>
        </div>
    );
};

export default GalleryComponent;