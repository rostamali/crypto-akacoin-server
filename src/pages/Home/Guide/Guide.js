import React, { useEffect, useState } from 'react';
import guideImg1 from '../../../images/Wallet.png';
import './Guide.css';

const Guide = () => {

    const [guideData, setGuideData] = useState([]);

    useEffect(()=>{

        fetch('https://morning-atoll-58806.herokuapp.com/get-guides')
        .then(res => res.json())
        .then(data => {
            setGuideData(data)
        })

    }, [])

    return (
        <>
            <section id="guide__section">
                <div className="container">
                    <div className="section__header">
                        <h2 className="section__title">Quick Start Guide</h2>
                    </div>
                    <div className="guide__wrapper">
                        {
                            guideData.map(guide => <div key={guide._id} className="guide__box">
                                <div className="guide__thumbnail--wrapper">
                                    {
                                        guide.image ?
                                        <img src={`data:image/png;base64,${guide.image}`} alt="Wallet" />
                                        :
                                        <img src={guideImg1} alt="Wallet" />
                                    }
                                </div>
                                <div className="guide__details">
                                    {
                                        guide.title ?
                                        <h4 className="guide__title">{guide.title}</h4>
                                        :
                                        <h4 className="guide__title">1. Create a wallet</h4>
                                    }
                                    {
                                        guide.description ?
                                        <p className="description">{guide.description}</p>
                                        :
                                        <h4 className="guide__title">1. Create a wallet</h4>
                                    }
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Guide;