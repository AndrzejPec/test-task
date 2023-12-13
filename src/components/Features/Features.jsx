import './Features.scss';
import { Illustration } from "../Illustration/Illustration"
import illustration from '../../img/illustration-features-tab-1.svg';

export const Features = () => {

    return (
        <div className="features">
            <h2>Features</h2>
            <p>
                Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
            </p>
                <h3>Simple Bookmarking</h3>
                {/* <p>
                    Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                </p> */}
                <h3>Speedy Searching</h3>
                {/* <p>
                    Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                </p> */}
                <h3>Easy Sharing</h3>
                {/* <p>
                    Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                </p> */}
            <Illustration
                align={'left'}
                src={illustration}
                alt="Hero image"
                width={25}
                height={25}
            />          
        </div>
    )
}