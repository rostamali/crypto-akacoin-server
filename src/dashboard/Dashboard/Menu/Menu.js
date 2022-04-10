import React from 'react';
import './Menu.css';
import dashboardLogo from '../../../images/Logo.png';
import { NavLink } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

const Menu = () => {

    return (
        <>
            <section id="dashboard__menu">
                <div className="dashboard__menu--wrapper">
                    <img src={dashboardLogo} alt="Aka coin logo" className="dashboard__logo" />

                    <div className="dashboard__menu--list">
                        <NavLink to="/akacoin-admin/hero-section" className="dashboard__menu--link">Hero Section</NavLink>
                        <NavLink to="/akacoin-admin/akacoin-section" className="dashboard__menu--link">Aka Coin Section</NavLink>
                        <div className="dashboard__dropdown">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='accordian__btn'>Wallet Section</Accordion.Header>
                                    <Accordion.Body>
                                        <NavLink to="/akacoin-admin/update-wallet" className="dashboard__menu--link">Update Wallet</NavLink>
                                        <NavLink to="/akacoin-admin/create-wallet" className="dashboard__menu--link">Add New Wallet</NavLink>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <NavLink to="/akacoin-admin/guide-section" className="dashboard__menu--link">Guide Section</NavLink>
                        <NavLink to="/akacoin-admin/banner-section" className="dashboard__menu--link">Banner Section</NavLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;