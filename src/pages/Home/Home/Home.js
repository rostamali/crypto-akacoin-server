import React from 'react';
import AkaCoin from '../AkaCoin/AkaCoin';
import Banner from '../Banner/Banner';
import Guide from '../Guide/Guide';
import Hero from '../Hero/Hero';
import Network from '../Network/Network';
import Wallet from '../Wallet/Wallet';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';

const Home = () => {

    return (
        <>
     
            <Header />      
            <Hero />
            <AkaCoin />
            <Wallet />
            <Guide />
            <Banner />
            <Network />
            <Footer />       
        </>
    );
};

export default Home;