import React, { useState } from 'react';
import './FAQ.scss';
import { Accordion } from '../Accordion/Accordion';

const FAQ_DATA = [
    {
        title: "What is Bookmark?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
        title: "How can I request a new browser?",
        content: "Vivamus luctus eros aliquet convallis ultricies..."
    },
    {
        title: "Is there a mobile app?",
        content: "Sed consectetur quam id neque fermentum accumsan..."
    },
    {
        title: "What about other Chromium browsers?",
        content: "Integer fringilla congue eros non fermentum..."
    }
];

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = index => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq">
            <h2>Frequently Asked Questions</h2>
            <p>
                Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
            </p>
            {FAQ_DATA.map((item, index) => (
                <Accordion
                    key={item.title}
                    title={item.title}
                    isActive={index === activeIndex}
                    onClick={() => toggleAccordion(index)}
                >
                    <p>{item.content}</p>
                </Accordion>
            ))};
            <button className='button'>More Info</button>
        </div>
    )
}