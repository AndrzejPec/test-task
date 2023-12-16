import { useEffect } from 'react';

import './Modal.scss';

import { Features } from '../Features/Features';

export const Modal = () => {

  useEffect(() => {
    const modal = document.querySelector('#myModal');
    const closeModalButton = document.querySelector('#closeModal');

    const openModal = () => {
      if (modal) modal.showModal();
    };

    const closeModal = () => {
      if (modal) modal.close();
    };

    const handleMouseMove = (event) => {
      if (event.clientY < 10) {
        openModal();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    closeModalButton.addEventListener('click', closeModal);

    const timer = setTimeout(openModal, 30000);

    return () => {
      closeModalButton.removeEventListener('click', closeModal);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <dialog id="myModal">

        <button className="button" id="closeModal">Close</button>

        <Features livesInsideModal={true} />

      </dialog>
    </>
  );
};
