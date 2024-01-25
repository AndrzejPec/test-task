import React, { useState } from 'react';

import './FAQ.scss';

import { Accordion } from '../Accordion/Accordion';

const FAQ_DATA = [
    {
        title: "What is Bookmark?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo consectetur quod distinctio expedita asperiores minima placeat explicabo corrupti! Dolore minus, aliquam non hic officiis ipsa tenetur. Quo consequuntur soluta et?..."
    },
    {
        title: "How can I request a new browser?",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, totam animi excepturi pariatur quaerat iure sint sed nemo vitae ut velit voluptas earum iusto praesentium sit nihil enim error doloribus consectetur? Minima eum optio eius itaque dolorum. Magni quod, commodi aperiam aliquid facilis ea cum rerum vitae distinctio facere, officia atque sunt. Hic eum dolor, quos quis debitis error fugit!..."
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
        <section className="faq">

            <h2>Frequently Asked Questions</h2>
            <p>
                Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
            </p>

            {FAQ_DATA.map((item, index) => (
                <Accordion
                    key={item.title}
                    title={item.title}
                    className
                    isActive={index === activeIndex}
                    onClick={() => toggleAccordion(index)}
                >
                    <p>{item.content}</p>
                </Accordion>
            ))}

            <button className='button faq__button'>More Info</button>
        </section>
    )
}