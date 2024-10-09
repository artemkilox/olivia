import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import './layoutPage.css'
import { layouts } from '../../data/data'
import LayoutModal from "../../components/layoutModal/LayoutModal";

const LayoutPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [curLay, setCurLay] = useState(layouts[0])

    const openModal = (layout) => {
        setCurLay(layout)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <div className="layout-page-wrapper">
            <LayoutModal curLay={curLay} showModal={showModal} closeModal={closeModal} />
            <Header />
            <h1 className="layout-title">ПЛАНИРОВКИ</h1>
            <div className="layouts-wrapper">
                {layouts.map((layout) =>
                    <div
                        className="layout-card"
                        onClick={() => openModal(layout)}
                    >
                        <img src={layout.img} alt="" className="layout-img"/>
                        <div className="layout-info">
                            {layout.type}
                            <div className="layout-dot"></div>
                            {layout.area}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LayoutPage;