import React from 'react';
import Header from "../../components/Header/Header";
import sideImg from '../../resources/img/aboutImg.jpg'
import './abuotPage.css'

const AboutPage = () => {
    return (
        <div className="about-page-wrapper">
            <Header />
            <h1 className="title">О КОМПЛЕКСЕ</h1>
            <div className="content">
                <div className="img-side">
                    <img src={sideImg} alt=""/>
                </div>
                <div className="info-side">
                    <div className="text-block">
                        <div className="title">
                            «OLIVIA» — <br/>
                            ваша квартира <br/>
                            на берегу моря
                        </div>
                        <div className="info-items">
                            <article className="info-item">
                                <div className="title">Концепция "Город в городе"</div>
                                <div className="description">Обширная территория комплекса позволяет удовлетворить
                                    все потребности наших жильцов - здесь есть все необходимое
                                    для отличного отдыха и комфортного проживания. Мы предоставляем высококлассные услуги и удобства для того,
                                    чтобы жильцы могли наслаждаться своим временем, не отходя далеко от дома.</div>
                            </article>
                            <article className="info-item">
                                <div className="title">Современный стиль</div>
                                <div className="description">Наши дома выполнены в едином стиле, что придает целостность
                                    и гармоничность комплексу. Кроме того, на первых этажах наших домов расположены кафе и рестораны. Мы активно использовали премиальные материалы в строительстве, чтобы обеспечить собственникам высокое качество жизни и комфортное проживание.</div>
                            </article>
                            <article className="info-item">
                                <div className="title">Прекрасная локация</div>
                                <div className="description">Одним из ключевых преимуществ нашего жилого комплекса является его расположение. Комплекс находится
                                    в туристическом районе города Сочи на расстоянии
                                    1300 метров от моря и обладает богатой инфраструктурой.</div>
                            </article>
                            <article className="info-item">
                                <div className="title">Бизнес-класс</div>
                                <div className="description">Наш жилой комплекс относится к категории бизнес-класса
                                    и занимает большую территорию. Количество квартир
                                    в комплексе минимально, что в свою очередь обеспечивает
                                    нашим жильцам комфорт и приватность.</div>
                            </article>
                        </div>
                    </div>
                    <div className="features">
                        <div
                            className="feature"
                            style={{background: "#567D72"}}
                        >
                            <div className="feature-title">от моря</div>
                            <div className="feature-value">1300 м</div>
                        </div>
                        <div
                            className="feature"
                            style={{background: "#CFA859"}}
                        >
                            <div className="feature-title">студии</div>
                            <div className="feature-value">от 12,1 млн.</div>
                        </div>
                        <div
                            className="feature"
                            style={{background: "#CFA859"}}
                        >
                            <div className="feature-title">евро-двухкомнатные</div>
                            <div className="feature-value">от 12,9 млн</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;