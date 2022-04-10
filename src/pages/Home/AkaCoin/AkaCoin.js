import React, { useEffect, useState } from 'react';
import arrow from '../../../images/arrow.png';
import websiteImg from '../../../images/Website.png';
import videoMask from '../../../images/mask-group.png';
import './AkaCoin.css';
import { GrPlayFill } from 'react-icons/gr';

const AkaCoin = () => {

    
    const [akaCoinData, setAkaCoinData] = useState({});

    useEffect(()=>{

        fetch('https://morning-atoll-58806.herokuapp.com/get-akacoin')
        .then(res => res.json())
        .then(data => {
            setAkaCoinData(data)
        })

    }, [])

    return (
        <>
            <section id="akaCoin__section">
                <div className="container">
                    <div className="section__header">
                        {
                            akaCoinData.sectionTitle ?
                            <h2 className="section__title">{akaCoinData.sectionTitle}</h2>
                            :
                            <h2 className="section__title">What Is Akacoin?</h2>
                        }
                        
                        <div className="akaCoin__header">
                            <div className="row gy-4">
                                <div className="col-md-6 col-12">
                                    {
                                        akaCoinData.title ?

                                        <h3 className="akaCoin__title">
                                            {akaCoinData.title}
                                        </h3>
                                        :
                                        <h3 className="akaCoin__title">
                                            The fastest growing and <br />
                                            community friendly
                                        </h3>
                                    }
                                    
                                </div>
                                <div className="col-md-6 col-12">
                                    {
                                        akaCoinData.description ?
                                        <p className="description">{akaCoinData.description}</p>
                                        :
                                        <p className="description">
                                            Akacoin is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.
                                        </p>
                                    }
                                    <a href="/" className="akaCoin__null--btn">
                                        Explore Ecosystem <img src={arrow} alt="Right arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="akaCoin__wrapper">
                        <div className="row gy-4">
                            <div className="col-md-4 col-12">
                                <div className="akaCoin__left-box" style={{
                                    backgroundColor: '#FFD556',
                                    borderRadius: '15px'
                                }}>
                                    {
                                        akaCoinData.image ?
                                        <img src={`data:image/png;base64,${akaCoinData.image}`} alt="" className="akaCoin__website--thumbnail" />
                                        :
                                        <img src={websiteImg} alt="" className="akaCoin__website--thumbnail" />
                                    }
                                </div>
                            </div>
                            <div className="col-md-8 col-12">
                                <div className="video__mask" style={{backgroundImage: `url(${videoMask})`}}>
                                    <div className="play__btn--wrapper">
                                        <div className="text__play--btn">
                                            <div className="btn__text">
                                                <span className="btn__small--text">Learn Akacoin</span>
                                                <br />
                                                Watch Video
                                            </div>
                                            <button><GrPlayFill /></button>
                                        </div>
                                        <button className="icon__play--btn">
                                            <GrPlayFill />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AkaCoin;