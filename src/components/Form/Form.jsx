import React, { useState, useEffect } from 'react';
import './Form.scss';

export const Form = () => {
    const [counter, setCounter] = useState(35000);

    useEffect(() => {
        const interval = setInterval(() => {
          setCounter(prevCounter => prevCounter - 175);
        }, 100);
    
        setTimeout(() => {
          clearInterval(interval);
        }, 20000);
    
        return () => clearInterval(interval);
      }, []);
    
    return (
        <form class="form">
            <span className="form__text">{counter}+ already joined</span>

            <h2 className="form__title">Stay up-to-date with what we're doing</h2>

            <input
                type="text"
                placeholder="Enter your email address"
                className='form__input'
            />

            <button className="form__button button" type="submit">Submit</button>
        </form>
    )
}