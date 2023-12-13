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

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
      
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
          setEmailError('Email is required');
        } else if (!email.includes('@')) {
          setEmailError('Please enter a valid email address');
        } else {
          // handle form submission
        }
    };
    
    return (
        <div className="form">

            <span className="form__counter">{counter}+ already joined</span>

            <h2 className="form__title">Stay up-to-date with what we're doing</h2>

            <form onSubmit={handleSubmit} className="form__body">
                
                <input
                    type="text"
                    placeholder="Enter your email address"
                    id="emailInput"
                    className='form__input'
                    value={email}
                    onChange={handleEmailChange}
                />

                <button className="form__button button" type="submit">Submit</button>

            </form>

        </div>
    )
}