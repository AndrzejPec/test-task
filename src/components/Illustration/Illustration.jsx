import React, { useState, useEffect } from 'react';
import './Illustration.scss';

export const Illustration = ({ align, src, alt }) => {
    const [animateClass, setAnimateClass] = useState('');

    useEffect(() => {
        setAnimateClass('');

        const timer = setTimeout(() => {
            setAnimateClass(align === 'right' ? 'animate-image-right' : 'animate-image-left');
        }, 50);

        return () => clearTimeout(timer);
    }, [src, align]);

    return (
        <figure className={`illustration illustration--align-${align}`}>
            <img
                src={src}
                alt={alt}
                className={`${align} ${animateClass}`}
            />
        </figure>
    );
}
