import './DownloadCard.scss';

export const DownloadCard = ({ browser, src, version }) => {

    return (
        <div className="download-card">
            <img src={src} alt={browser} />
            <h3>Add to {browser}</h3>
            <p>Minimum version {version}</p>
        </div>
    )
}