import './Hero.scss'

import illustration from '../../img/illustration-hero.svg';
import { Illustration } from "../Illustration/Illustration"

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <Illustration
                    align="right"
                    src={illustration}
                    description="Hero image"
                    name="hero"
                />
                <div className="hero__text">
                    <h1 className="hero__header">A Simple Bookmark Manager</h1>
                    <p>
                        A clean and simple interface to organize your favourite websites.
                        Open a new browser tab and see your favorite sites load instantly. Try it out for free.
                    </p>
                    <div className="hero__buttons">
                        <button className="button hero__button">Get it on Chrome</button>
                        <button className="button hero__button hero__button--light">Get it on Firefox</button>
                    </div>
                </div>
            </div>
        </section>
    )
  }