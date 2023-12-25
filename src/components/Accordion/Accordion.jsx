import './Accordion.scss';

import { ReactComponent as ArrowIcon } from '../../img/icon-arrow.svg';

export const Accordion = ({ title, isActive, onClick, children }) => {
    return (
        <div className={`accordion__item ${isActive ? 'active' : ''}`}>

            <div className="accordion__title" onClick={onClick}>

                {title}
                <ArrowIcon id="accordion-icon" className='accordion__icon'/>

            </div>
            <div className={`accordion__content ${isActive ? 'active' : ''}`}>

                <div className="accordion__content-inner">

                    {isActive && children}

                </div>

            </div>
        </div>
    );
};
