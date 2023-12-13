import './DownloadCard.scss';
import breakline from '../../img/bg-dots.svg';

export const DownloadCard = ({ browser, src, version }) => {

    return (
        <div className="download-card">
            <img
                src={src}
                alt={browser}
                className='download-card__img'
            />
            <h3>Add to {browser}</h3>
            <p>Minimum version {version}</p>
            <img src={breakline} alt="breakline" />
            <button className='button'>Add & Install Extension</button>
        </div>
    )
}