import React from 'react';
import './Accordion.scss';

export const Accordion = ({ title, isActive, onClick, children }) => {
    return (
        <div className="accordion">
            <div className="accordion-title" onClick={onClick}>
                {title}
                <span>{isActive ? '−' : '+'}</span>
            </div>
            {isActive && <div className="accordion-content">{children}</div>}
        </div>
    );
};
