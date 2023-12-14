import React, { useState, useEffect } from 'react';
import './Form.scss';

export const Form = () => {
    const [counter, setCounter] = useState(35000);

    useEffect(() => {
      let remainingTime = 20000; // 20 sekund w milisekundach
      const interval = setInterval(() => {
          setCounter(prevCounter => {
              const newCounter = prevCounter - 1750;
              return newCounter > 0 ? newCounter : 0; // Zapobiegaj ujemnym wartościom
          });
          remainingTime -= 1000; // Zmniejsz pozostały czas co sekundę
          if (remainingTime <= 0) {
              clearInterval(interval); // Zatrzymaj interwał, gdy czas się skończy
          }
      }, 1000);
  
      return () => clearInterval(interval); // Oczyść interwał przy demontażu komponentu
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

            <span className="form__counter">{counter}{counter ? '+' : ''} already joined</span>

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