import React, { useState } from 'react';
import './Features.scss';
import { Illustration } from "../Illustration/Illustration";
import illustrationTab1 from '../../img/illustration-features-tab-1.svg';
import illustrationTab2 from '../../img/illustration-features-tab-2.svg';
import illustrationTab3 from '../../img/illustration-features-tab-3.svg';

export const Features = ({ livesInsideModal }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabs = [
        { 
            title: 'Simple Bookmarking', 
            illustration: illustrationTab1,
            content: (
                <>
                    <h2>Bookmark in one click</h2>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                </>
            )
        },
        { 
            title: 'Speedy Searching', 
            illustration: illustrationTab2,
            content: (
                <>
                    <h2>Intelligent search</h2>
                    <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                </>
            )
        },
        { 
            title: 'Easy Sharing', 
            illustration: illustrationTab3,
            content: (
                <>
                    <h2>Easy sharing</h2>
                    <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                </>
            )
        }
    ];

    const handleOnClick = index => {
        setActiveIndex(index);
    };

    return (
        <div className="features">
            {!livesInsideModal && (
                <>
                    <h2>Features</h2>
                    <p>
                        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                    </p>
                </>
            )}

            <ul className="features__list">
                {tabs.map((tab, index) => (
                    <li
                        key={tab.title} 
                        onClick={() => handleOnClick(index)}
                        className={`features__link features__link${activeIndex === index ? '--active' : ''}`}
                    >
                        {tab.title}
                    </li>
                ))}
            </ul>

            <div className="features__content">
                <Illustration
                    align={'left'}
                    src={tabs[activeIndex].illustration}
                    alt="Features illustration"
                    width={25}
                    height={25}
                    livesInsideModal={livesInsideModal}
                />
                <div className="features__text-area">
                    {tabs[activeIndex].content}
                    {livesInsideModal && <button className="button">More Info</button>}
                </div>
            </div>
        </div>
    );
}
