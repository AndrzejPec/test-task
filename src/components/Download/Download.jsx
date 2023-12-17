import './Download.scss';

import { DownloadCard } from '../DownloadCard/DownloadCard';

import chrome from '../../img/logo-chrome.svg';
import firefox from '../../img/logo-firefox.svg';
import opera from '../../img/logo-opera.svg';

export const Download = () => {
    
    const BROWSERS = [
        { name: 'Chrome', version: "62", imgSrc: chrome },
        { name: 'Firefox', version: "66", imgSrc: firefox },
        { name: 'Opera', version: "69", imgSrc: opera }
    ];

    return (
        <section className="download">

            <h2>Download the extension</h2>
            <p>
                We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
            </p>

            <div className="download__cards">
                {BROWSERS.map((browser) => (
                    <DownloadCard
                        key={browser.name}
                        version={browser.version}
                        browser={browser.name}
                        src={browser.imgSrc}
                    />
                ))}
            </div>

        </section>
    )
}