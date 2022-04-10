import React, { useEffect, useState } from 'react';
import walletBg1 from '../../../images/wallet-bg-1.png';
import walletBg2 from '../../../images/wallet-bg-2.png';
import './Wallet.css';
import img1 from '../../../images/icons/mobile-1.svg';
import img2 from '../../../images/icons/mobile-2.svg';
import img3 from '../../../images/icons/mobile-3.svg';
import img4 from '../../../images/icons/black-mobile.svg';
import img5 from '../../../images/icons/black-desktop.svg';
import img6 from '../../../images/icons/black-web.svg';

import whiteArrow from '../../../images/icons/white-arrow.png';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';

const Wallet = () => {

    const [walletData, setWalletData] = useState([]);
    useEffect(()=>{

        fetch('https://morning-atoll-58806.herokuapp.com/get-wallet')
        .then(res => res.json())
        .then(data => {
            setWalletData(data)
        })

    }, [])
    

    return (
        <>
            <section id="wallet__section">
                <div className="container">
                    <div className="section__header">
                        <h2 className="section__title">Choose Your Wallets</h2>
                    </div>
                    <div className="wallet__wrapper">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1100: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            }}
                            className="mySwiper"
                            modules={[Navigation, Pagination]}
                        >
                            {
                                walletData.map(item => <SwiperSlide key={item._id}>
                                    <div className={`wallet__single ${item.backgroundColor === 'yellow' ? 'wallet__middle' : ''}`}
                                        style={{
                                            backgroundImage: `${item.backgroundColor === 'yellow' ? 'url(' +walletBg2+')' : 'url(' +walletBg1+')' }`,
                                            backgroundColor: `${item.backgroundColor === 'yellow' ? '#ffd556' : '#1F33D8' }`
                                        }}
                                    >
                                        <div className="wallet__header">
                                            <img src={`data:image/png;base64,${item.image}`} alt="Wallet logo" />
                                            <h3 className="wallet__title">{item.title}</h3>
                                        </div>
                                        <p className="wallet__description">{item.description}</p>
                                        {
                                            item.backgroundColor === 'yellow' ?
                                            <div className="wallet__icon--wrapper">
                                                <img src={img4} alt="Wallet mobile icon" />
                                                <img src={img5} alt="Wallet desktop icon" />
                                                <img src={img6} alt="Wallet web icon" />
                                            </div>
                                            :
                                            <div className="wallet__icon--wrapper">
                                                <img src={img1} alt="Wallet mobile icon" />
                                                <img src={img2} alt="Wallet desktop icon" />
                                                <img src={img3} alt="Wallet web icon" />
                                            </div>
                                        }
                                        <a href="/" className="wallet__btn">Choose Wallet <img src={whiteArrow} alt="White arrow" /></a>
                                    </div>
                                </SwiperSlide>)
                            }
                            {/* <SwiperSlide>
                                <div className="wallet__single" style={{backgroundImage: `url(${walletBg1})`, backgroundColor:'#1F33D8'}}>
                                    <div className="wallet__header">
                                        <img src={walletLogo1} alt="Wallet logo" />
                                        <h3 className="wallet__title">AkaWallet</h3>
                                    </div>
                                    <p className="wallet__description">
                                        Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide
                                    </p>
                                    <div className="wallet__icon--wrapper">
                                        <img src={img1} alt="Wallet mobile icon" />
                                        <img src={img2} alt="Wallet desktop icon" />
                                        <img src={img3} alt="Wallet web icon" />
                                    </div>
                                    <a href="/" className="wallet__btn">Choose Wallet <img src={whiteArrow} alt="White arrow" /></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="wallet__single wallet__middle" style={{backgroundImage: `url(${walletBg2})`, backgroundColor:'#FFD456'}}>
                                    <div className="wallet__header">
                                        <img src={walletLogo2} alt="Wallet logo" />
                                        <h3 className="wallet__title">AkaSafe</h3>
                                    </div>
                                    <p className="wallet__description">
                                        AkaSafe wallet is a secure, decentralized, easy-to-use, and free application to manage more than 10,000 cryptocurrencies.
                                    </p>
                                    <div className="wallet__icon--wrapper">
                                        <img src={img4} alt="Wallet mobile icon" />
                                        <img src={img5} alt="Wallet desktop icon" />
                                        <img src={img6} alt="Wallet web icon" />
                                    </div>
                                    <a href="/" className="wallet__btn">Choose Wallet <img src={whiteArrow} alt="White arrow" /></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="wallet__single" style={{backgroundImage: `url(${walletBg1})`, backgroundColor:'#1F33D8'}}>
                                    <div className="wallet__header">
                                        <img src={walletLogo3} alt="Wallet logo" />
                                        <h3 className="wallet__title">AkaMask</h3>
                                    </div>
                                    <p className="wallet__description">
                                        AkaMask is a decentralized multi-chain digital wallet, dedicated to providing safe and convenient one-stop digital asset management services to users around the world.
                                    </p>
                                    <div className="wallet__icon--wrapper">
                                        <img src={img1} alt="Wallet mobile icon" />
                                        <img src={img2} alt="Wallet desktop icon" />
                                        <img src={img3} alt="Wallet web icon" />
                                    </div>
                                    <a href="/" className="wallet__btn">Choose Wallet <img src={whiteArrow} alt="White arrow" /></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="wallet__single" style={{backgroundImage: `url(${walletBg1})`, backgroundColor:'#1F33D8'}}>
                                    <div className="wallet__header">
                                        <img src={walletLogo1} alt="Wallet logo" />
                                        <h3 className="wallet__title">AkaWallet</h3>
                                    </div>
                                    <p className="wallet__description">
                                        Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide
                                    </p>
                                    <div className="wallet__icon--wrapper">
                                        <img src={img1} alt="Wallet mobile icon" />
                                        <img src={img2} alt="Wallet desktop icon" />
                                        <img src={img3} alt="Wallet web icon" />
                                    </div>
                                    <a href="/" className="wallet__btn">Choose Wallet <img src={whiteArrow} alt="White arrow" /></a>
                                </div>
                            </SwiperSlide> */}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Wallet;