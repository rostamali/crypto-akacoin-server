import React, { useEffect, useState } from 'react';
import bannerBg1 from '../../../images/banner-bg/banner-bg-1.png';
import bannerBg2 from '../../../images/banner-bg/banner-bg-2.png';
import bannerBg3 from '../../../images/banner-bg/banner-bg-3.png';
import './Banner.css';
import replaceImg from '../../../images/transparent-img.png';

const Banner = () => {

    const [bannerData, setBannerData] = useState([]);
    useEffect(()=>{
        fetch('https://morning-atoll-58806.herokuapp.com/get-banner')
        .then(res => res.json())
        .then(data => {
            setBannerData(data)
        })
    }, [])

    return (
        <>
            <section id="banner__section">
                <div className="container">
                    <div className="banner__wrapper">
                        {
                            bannerData.map((item, index)=> <div key={index}
                                className={`banner ${index === 1 ? 'banner__middle': ''}`} 
                                style={{
                                    backgroundColor: `${index === 1 ? '#FFD456':'#1F33D8'}`,
                                    backgroundImage: `${index === 1 ? 'url(' +bannerBg2+')' : 'url(' +bannerBg1+')' }`,
                                }}
                            >
                                <h3 className="banner__title">{item.title}</h3>
                                <p className="description">{item.description}</p>
                                {
                                    index === 2 &&
                                    <img src={replaceImg} alt="Transparent replace thumbnail" className="replace__img" />
                                }
                                <a href="/" className="banner__btn">Learn More</a>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;