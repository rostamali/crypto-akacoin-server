import React from 'react';
import footerLogo from '../../images/footer-logo.png';
import './Footer.css';
import { BsGithub, BsDiscord, BsFacebook, BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <footer id="footer__section">
                <div className="container">
                    <div className="footer__body">
                        <div className="row gy-5">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <img src={footerLogo} alt="Crypto aka coin logo" className="footer__logo" />
                                <h5 className="footer__text">
                                    Living Ecosystem <br />
                                    Decentralized Token
                                </h5>
                                <div className="footer__social--icon">
                                    <a href="/" className="footer__icon--link"><BsGithub /></a>
                                    <a href="/" className="footer__icon--link"><BsDiscord /></a>
                                    <a href="/" className="footer__icon--link"><BsFacebook /></a>
                                    <a href="/" className="footer__icon--link"><BsInstagram /></a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                                <h4 className="footer__menu--title">Page</h4>
                                <div className="footer__menu">
                                    <a href="/" className="footer__menu--link">Network Statistic</a>
                                    <a href="/" className="footer__menu--link">What is AkaCoin</a>
                                    <a href="/" className="footer__menu--link">Wallets</a>
                                    <a href="/" className="footer__menu--link">Quick Start Guide</a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                                <h4 className="footer__menu--title">Learn</h4>
                                <div className="footer__menu">
                                    <a href="/" className="footer__menu--link">Blog</a>
                                    <a href="/" className="footer__menu--link">Video</a>
                                    <a href="/" className="footer__menu--link">Podcast</a>
                                    <a href="/" className="footer__menu--link">Network states</a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                                <h4 className="footer__menu--title">Support</h4>
                                <div className="footer__menu">
                                    <a href="/" className="footer__menu--link">Customer Service</a>
                                    <a href="/" className="footer__menu--link">FAQ</a>
                                    <a href="/" className="footer__menu--link">Community</a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                                <h4 className="footer__menu--title">About AKA.Coin</h4>
                                <div className="footer__menu">
                                    <a href="/" className="footer__menu--link">About us</a>
                                    <a href="/" className="footer__menu--link">Privacy policy</a>
                                    <a href="/" className="footer__menu--link">Term of use</a>
                                    <a href="/" className="footer__menu--link">Quick Start guide</a>
                                    <a href="/" className="footer__menu--link">Language support</a>
                                    <a href="/" className="footer__menu--link">Cookie policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <p className="copyright__text">©2022 AKA.COIN. All right reserved</p>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;