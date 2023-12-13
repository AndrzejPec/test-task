import './Download.scss';
import { DownloadCard } from '../DownloadCard/DownloadCard';
import chrome from '../../img/logo-chrome.svg';
import firefox from '../../img/logo-firefox.svg';
import opera from '../../img/logo-opera.svg';

export const Download = () => {

    return (
        <div className="download">
            <h2>Download the extension</h2>
            <p>
                We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
            </p>
            <DownloadCard
                browser="Chrome"
                src={chrome}
            />
            <DownloadCard
                browser="Firefox"
                src={firefox}
            />
            <DownloadCard
                browser="Opera"
                src={opera}
            />
        </div>
    )
}