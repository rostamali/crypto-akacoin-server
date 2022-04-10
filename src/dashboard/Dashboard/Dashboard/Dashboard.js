import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Dashboard.css';

const Dashboard = () => {

    
    

    return (
        <>
            <section id="dashboard">
                <div className="dashboard__wrapper">
                    <Menu />
                    <div className="dashboard__container">
                        <div className="dashboard__header">
                            <h4 className="admin__name">Pro Rostam</h4>
                            <button className="logout__btn">Logout</button>
                        </div>
                        <div className="dashboard__body">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;