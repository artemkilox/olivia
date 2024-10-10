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
        const newImg = {
            id: 0,
            img: images[images.length - 1].img
        }
        const lastImg = {
            id: images.length + 1,
            img: images[0].img
        }
        outputArr.push(newImg)
        images.map(item => {
            outputArr.push(item)
        })
        outputArr.push(lastImg)
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
                    {imagesArr.map((image) =>
                        <img key={image.id} src={image.img} alt="" className="slider-img"/>
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