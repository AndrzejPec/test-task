import React, { useState } from 'react';
import './Features.scss';
import { Illustration } from "../Illustration/Illustration"
import illustrationTab1 from '../../img/illustration-features-tab-1.svg';
import illustrationTab2 from '../../img/illustration-features-tab-2.svg';
import illustrationTab3 from '../../img/illustration-features-tab-3.svg';   

export const Features = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleOnClick = index => {
        setActiveIndex(index);
    };

    const getCurrentIllustration = () => {
        switch (activeIndex) {
            case 0:
                return illustrationTab1;
            case 1:
                return illustrationTab2;
            case 2:
                return illustrationTab3;
            default:
                return illustrationTab1;
        }
    };

    const getCurrentInfo = () => {
        switch (activeIndex) {
            case 0:
                return (
                    <>
                        <h2>Bookmark in one click</h2>

                        <p>
                            Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                        </p>
                    </>
                );
            case 1:
                return (
                    <>
                        <h2>Intelligent search</h2>

                        <p>
                            Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                        </p>
                    </>
                );
            case 2:
                return (
                    <>
                        <h2>Easy sharing</h2>

                        <p>
                            Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                        </p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="features">
            <h2>Features</h2>
            <p>
                Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
            </p>
            <h3 onClick={() => handleOnClick(0)} className={activeIndex === 0 ? 'active' : ''}>
                Simple Bookmarking
            </h3>
            <h3 onClick={() => handleOnClick(1)} className={activeIndex === 1 ? 'active' : ''}>
                Speedy Searching
            </h3>
            <h3 onClick={() => handleOnClick(2)} className={activeIndex === 2 ? 'active' : ''}>
                Easy Sharing
            </h3>
            <Illustration
                align={'left'}
                src={getCurrentIllustration()}
                alt="Features illustration"
                width={25}
                height={25}
            />
            {getCurrentInfo()}
        </div>
    )
}