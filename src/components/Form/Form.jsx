import React, { useState, useEffect } from 'react';
import './Form.scss';

import { ReactComponent as ErrorIcon } from '../../img/icon-error.svg';

export const Form = () => {
    const [counter, setCounter] = useState(35000);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        let remainingTime = 20000;
        const interval = setInterval(() => {
            setCounter((prevCounter) => (prevCounter - 175 > 0 ? prevCounter - 175 : 0));
            remainingTime -= 100;
            if (remainingTime <= 0) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);
    

    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        const isValidEmail = /\S+@\S+\.\S+/.test(inputValue);

        if (!inputValue || isValidEmail) {
            setEmailError(false);
        }
    };

    const handleSubmit = (e) => {
        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        e.preventDefault();

        setEmailError(!isValidEmail);

        isValidEmail ? setShowSuccessMessage(true) : setShowSuccessMessage(false);
    };

    const formattedNumber = counter.toLocaleString('de-DE').replace('.', ',');

    return (
        <section className="form">
            <span className="form__counter" aria-live="polite">
                {`${formattedNumber}${counter ? '+' : ''}`} already joined
            </span>

            <h2 className="form__title">Stay up-to-date with what we're doing</h2>

            <form onSubmit={handleSubmit} className="form__body">
                <div className={`
                    form__input-wrapper
                    ${showSuccessMessage ? 'form__input-wrapper--success' : ''}
                    ${emailError ? 'form__input-wrapper--error' : ''}
                `}>
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        id="emailInput"
                        className="form__input"
                        value={email}
                        onChange={handleEmailChange}
                        aria-describedby={emailError ? 'Email error' : null}
                        autocomplete="off"
                    />
                    {emailError && <ErrorIcon className='form__error-icon'/>}
                </div>

                <button
                    className="form__button button"
                    type="submit"
                    aria-label="Contact us"
                >
                    Contact us
                </button>
            </form>
        </section>
    );
};
