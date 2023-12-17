import React from 'react';
import './Accordion.scss';

import arrow from '../../img/icon-arrow.svg';

export const Accordion = ({ title, isActive, onClick, children }) => {
    return (
        <div className={`accordion__item ${isActive ? 'active' : ''}`}>
            <div className="accordion__title" onClick={onClick}>
                {title}
                <img src={arrow} alt="Toggle" className="accordion__icon" />
                {/* <Arrow /> */}
            </div>
            <div className={`accordion__content ${isActive ? 'active' : ''}`}>
                <div className="accordion__content-inner">
                    {isActive && children}
                </div>
            </div>
        </div>
    );
};
