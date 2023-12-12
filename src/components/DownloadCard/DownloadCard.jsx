import './DownloadCard.scss';

export const DownloadCard = ({ browser, imgUrl }) => {

    return (
        <div className="download-card">
            <img src={imgUrl} alt={browser} />
            <h3>{browser}</h3>
        </div>
    )
}