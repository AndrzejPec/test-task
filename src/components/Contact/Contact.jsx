import React from 'react';

import './Contact.scss';

export const Contact = ({ onClose, children }) => {
  return (
    <dialog open className='contact'>
      <button onClick={onClose}>Close</button>
        <h2>Leave a message</h2>
        <p>This is the content of the contact modal.</p>
    </dialog>
  );
};
