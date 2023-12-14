import React, { useState, useRef, useEffect } from 'react';
import './Accordion.scss';

export const Accordion = ({ title, isActive, onClick, children }) => {
    const contentRef = useRef(null);

    return (
        <div className={`accordion__item ${isActive ? 'active' : ''}`}>
            <div className="accordion__title" onClick={onClick}>
                {title}
                <span className="accordion__icon"></span>
            </div>
            <div
                className="accordion__content"
                ref={contentRef}
            >
                {isActive && (
                    <div className="accordion__content-inner">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};
