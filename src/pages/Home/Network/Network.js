import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Network.css';

const Network = () => {


    return (
        <>
            <section id="network__section">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-2 col-md-4 col-sm-4 col-12">
                            <div className="network__info">
                                <h5 className="network__title">Transactions/Second</h5>
                                <div className="network__countdown">
                                    <CountUp 
                                        end={2905} 
                                        redraw={true}
                                        start={2800}
                                        duration={1.34}
                                        separator={','}
                                    >
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <div className='countdown__number' ref={countUpRef}></div>
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-8 col-12">
                            <div className="network__info">
                                <h5 className="network__title">Total Transactions</h5>
                                <div className="network__countdown">
                                    <CountUp 
                                        end={64540470129} 
                                        redraw={true}
                                        start={64540470100}
                                        duration={1.34}
                                        prefix='$'
                                        separator=','
                                    >
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <div className='countdown__number' ref={countUpRef}></div>
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-8 col-12">
                            <div className="network__info">
                                <h5 className="network__title">Avg. Cost/Transaction</h5>
                                <div className="network__countdown">
                                    <CountUp 
                                        end={25} 
                                        redraw={true}
                                        start={0}
                                        duration={1.34}
                                        prefix="$0.000"
                                    >
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <div className='countdown__number' ref={countUpRef}></div>
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-12">
                            <div className="network__info">
                                <h5 className="network__title">Validator Nodes</h5>
                                <div className="network__countdown">
                                    <CountUp 
                                        end={1645} 
                                        redraw={true}
                                        start={1600}
                                        duration={1.34}
                                        separator={","}
                                    >
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <div className='countdown__number' ref={countUpRef}></div>
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
};

export default Network;