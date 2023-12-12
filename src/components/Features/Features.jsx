import './Features.scss';
import { Illustration } from "../Illustration/Illustration"

export const Features = () => {

    return (
        <div className="features">
            <h1>Features</h1>
            <p>
                Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
            </p>
            <ul>
                <li>
                    <h3>Simple Bookmarking</h3>
                    <p>
                        Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                    </p>
                </li>
                <li>
                    <h3>Speedy Searching</h3>
                    <p>
                        Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                    </p>
                </li>
                <li>
                    <h3>Share your bookmarks</h3>
                    <p>
                        Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                    </p>
                </li>
            </ul>
            <Illustration align={'left'} />            
        </div>
    )
}