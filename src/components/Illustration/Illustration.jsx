import './Illustration.scss';
import '../../App.scss';

export const Illustration = ({ align, src, alt }) => {
    return (
      <div className={`illustration illustration--align-${align}`} alt="Description of the image">
        <img
          src={src}
          alt={alt}
          className={align}
        />
      </div>
    )
  }