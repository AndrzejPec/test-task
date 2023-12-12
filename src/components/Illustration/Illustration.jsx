import './Illustration.scss';
import '../../img/illustration-hero.svg';

export const Illustration = ({ align, src }) => {
    return (
      <div className={`illustration illustration--align-${align}`} src="../../img/illustration-hero.svg" alt="Description of the image">
        <img src={`${src}`} alt="Hero image" />
      </div>
    )
  }