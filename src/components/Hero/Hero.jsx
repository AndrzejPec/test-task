import { Illustration } from "../Illustration/Illustration"
import './Hero.scss'
import illustration from '../../img/illustration-hero.svg';

export const Hero = () => {
    return (
        <div className="hero">
            <Illustration
                align={'right'}
                src={illustration}
                alt="Hero image"
                width={25}
                height={25}
            />
            <h1>A Simple Bookmark Manager</h1>
            <p>
                A clean and simple interface to organize your favourite websites.
                Open a new browser tab and see your favorite sites load instantly. Try it out for free.
            </p>
            <div className="hero__buttons">
            <button className="button hero__button">Get it on Chrome</button>
            <button className="button hero__button">Get it on Firefox</button>
            </div>
        </div>
    )
  }