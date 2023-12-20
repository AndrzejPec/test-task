import { useEffect, useState } from 'react';
import './Modal.scss';
import { Features } from '../Features/Features';

export const Modal = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const modal = document.querySelector('#myModal');
        const closeModalButton = document.querySelector('#closeModal');

        const openModal = () => {
            if (modal) {
                modal.showModal();
                setIsActive(true);
            }
        };

        const closeModal = () => {
            if (modal) {
                modal.close();
                setIsActive(false);
            }
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
            <dialog id="myModal" className={isActive ? 'active' : ''}>
                <button className="button myModal__button" id="closeModal">Close</button>
                <Features livesInsideModal />
            </dialog>
        </>
    );
};
