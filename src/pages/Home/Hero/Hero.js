import React, { useEffect, useState } from 'react';
// import heroThumbnail from '../../../images/banner-thumbnail.png';
import heroPlaceImg from '../../../images/hero-3.png';
import './Hero.css';
import { IoLogoGithub } from 'react-icons/io';

const Hero = () => {

    const [heroData, setHeroData] = useState({});

    useEffect(()=>{

        fetch('https://morning-atoll-58806.herokuapp.com/get-hero')
        .then(res => res.json())
        .then(data => {
            setHeroData(data)
        })

    }, [])
    


    return (
        <>
            <section id="hero__section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="hero__text">
                                {
                                    heroData.subtitle ?
                                    <p className="hero__subtitle">{heroData.subtitle}</p> 
                                    :
                                    <p className="hero__subtitle">
                                        Introducing <span style={{color:'#1F33D8'}}>AKA</span><span style={{color:'#FFCD37'}}>COIN</span>
                                    </p>
                                }
                                <h1 className="hero__title">
                                    {heroData.title}
                                </h1>
                                <p className="description">
                                    {heroData.description}
                                </p>
                            </div>
                            <div className="hero__btn--wrapper">
                                <a href="/" className="hero__btn hero__full--btn">Get Started</a>
                                <a href="/" className="hero__btn hero__null--btn"><IoLogoGithub />Source</a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="hero__thumbnail--wrapper">
                                <img src={`data:image/png;base64,${heroData.image}`} alt="Aka Crypto coin tree" className="hero__thumbnail" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={heroPlaceImg} alt="hero placement thumbnail" className="hero__place--img" />
            </section>
        </>
    );
};

export default Hero;