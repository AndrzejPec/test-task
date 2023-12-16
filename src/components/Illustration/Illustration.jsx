import './Illustration.scss';
import '../../App.scss';

export const Illustration = ({ align, src }) => {
    return (
      <div className={`illustration illustration--align-${align}`} alt="Description of the image">
        <img src={src} alt="Hero image" height={150}/>
      </div>
    )
  }