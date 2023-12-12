import './Download.scss';
import { DownloadCard } from '../DownloadCard/DownloadCard';

export const Download = () => {

    return (
        <div className="download">
            <h1>Download the extension</h1>
            <p>
                We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
            </p>
            <DownloadCard browser="Chrome" imgUlr="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
            <DownloadCard browser="Firefox" imgUlr="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
            <DownloadCard browser="Opera" imgUlr="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
        </div>
    )
}