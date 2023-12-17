import React, { useState, useEffect } from 'react';
import './Form.scss';

export const Form = () => {
    const [counter, setCounter] = useState(35000);

    useEffect(() => {
      let remainingTime = 20000;
      const interval = setInterval(() => {
          setCounter(prevCounter => {
              const newCounter = prevCounter - 1750;
              return newCounter > 0 ? newCounter : 0;
          });
          remainingTime -= 1000;
          if (remainingTime <= 0) {
              clearInterval(interval);
          }
      }, 1000);
  
      return () => clearInterval(interval);
  }, []);
  
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
      
  const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (hasSubmitted) {
            if (!e.target.value) {
                setEmailError('Email is required');
            } else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
                setEmailError(`Whoops! Make sure it's an email :)`);
            } else {
                setEmailError('');
            }
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (!email) {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError(`Whoops! Make sure it's an email :)`);
        } else {
            setEmailError('');
        }
    };
    
    return (
        <section className="form">
            <span className="form__counter">
                {`${counter.toLocaleString('de-DE')}${counter ? '+' : ''}`} already joined
            </span>

            <h2 className="form__title">Stay up-to-date with what we're doing</h2>

            <form onSubmit={handleSubmit} className="form__body">

                <input
                    type="text"
                    placeholder="Enter your email address"
                    id="emailInput"
                    className={`form__input form__input${emailError ? '--error' : ''}`}
                    value={email}
                    onChange={handleEmailChange}
                />

                {emailError && <span className="form__error">{emailError}</span>}

                <button className="form__button button" type="submit">Contact us</button>

            </form>
        </section>
    )
}