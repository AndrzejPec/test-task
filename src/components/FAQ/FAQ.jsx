import './FAQ.scss';
import { Accordion } from '../Accordion/Accordion';

export const FAQ = () => {

    return (
        <div className="faq">
            <h2>Frequently Asked Questions</h2>
            <p>
                Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
            </p>
            <Accordion title="What is Bookmark?">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                    justo eget ultricies fringilla. Phasellus blandit ipsum quis quam
                    ornare nec pulvinar tellus laoreet. Integer fringilla congue eros
                    non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
                    purus. Mauris quis diam velit.
                </p>
            </Accordion>
            <Accordion title="How can I request a new browser?">
                <p>
                    Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                    ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
                    aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                    Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
                    Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                </p>
            </Accordion>
            <Accordion title="Is there a mobile app?">
                <p>
                    Sed consectetur quam id dui. Praesent ligula. Praesent egestas tristique
                    nibh. Praesent egestas tristique nibh. Praesent egestas tristique nibh.
                    Praesent egestas tristique nibh. Praesent egestas tristique nibh.
                </p>
            </Accordion>
            <Accordion title="What about other Chromium browsers?">
                <p>
                    Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh
                    tempor porta. Cras ac leo purus. Mauris quis diam velit.
                </p>
            </Accordion>
            <button>More Info</button>
        </div>
    )
}