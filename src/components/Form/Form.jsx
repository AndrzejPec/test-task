import React, { useState, useEffect } from 'react';
import './Form.scss';

export const Form = () => {
    const [counter, setCounter] = useState(35000);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        let remainingTime = 20000;
        const interval = setInterval(() => {
            setCounter((prevCounter) => (prevCounter - 1750 > 0 ? prevCounter - 1750 : 0));
            remainingTime -= 1000;
            if (remainingTime <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);

        if (hasSubmitted) {
            if (inputValue) {
                const isValidEmail = /\S+@\S+\.\S+/.test(inputValue);
                setEmailError(hasSubmitted ? !isValidEmail : false);
            } else {
                setEmailError(false);
            }
        } else {
            setEmailError(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        setEmailError(!isValidEmail);

        if (!email || !isValidEmail) {
            setShowSuccessMessage(false);
        } else {
            setShowSuccessMessage(true);
        }
    };

    return (
        <section className="form">
            <span className="form__counter">
                {`${counter.toLocaleString('de-DE')}${counter ? '+' : ''}`} already joined
            </span>

            <h2 className="form__title">Stay up-to-date with what we're doing</h2>

            <form onSubmit={handleSubmit} className="form__body">
                <div className={`form__input-wrapper ${showSuccessMessage ? 'form__input-wrapper--success' : ''} ${emailError ? 'form__input-wrapper--error' : ''}`}>
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        id="emailInput"
                        className="form__input"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <button className="form__button button" type="submit" aria-label="Contact us">
                    Contact us
                </button>
            </form>
        </section>
    );
};
