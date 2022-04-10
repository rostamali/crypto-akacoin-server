import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import brandLogo from '../../images/Logo.png';
import './Header.css';
import mapImg from '../../images/map.png';
import { NavLink } from 'react-router-dom';

const Header = () => {


    return (
        <>
            <header id="header__section">
                <Navbar expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={brandLogo} alt="AKA Crypto coin logo" className="brand__logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle className='mobile__menu--btn' aria-controls="basic-navbar-nav">
                            <span className="mobile__menu--icon"></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="nav__link" to="/">Ecosystem</NavLink>
                            <NavLink className="nav__link" to="/">Buy</NavLink>
                            <NavLink className="nav__link" to="/">What is AKO?</NavLink>
                            <NavLink className="nav__link" to="/">Learn</NavLink>
                            <NavLink className="nav__link" to="/">Community</NavLink>
                            <Dropdown>
                                <Dropdown.Toggle id="translate__dropdown">
                                    <img src={mapImg} alt="" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <button href="/" className='lang__link'>English</button>
                                    <button href="/" className='lang__link'>Dutch</button>
                                    <button href="/" className='lang__link'>Franch</button>
                                </Dropdown.Menu>
                                </Dropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;