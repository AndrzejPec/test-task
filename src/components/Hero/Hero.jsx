import { Illustration } from "../Illustration/Illustration"

export const Hero = () => {
    return (
        <div className="hero">
            <Illustration
                align={'right'}
                src={"../img/illustration-hero.svg"}
            />
            <h1>A Simple Bookmark Manager</h1>
            <p>
                A clean and simple interface to organize your favourite websites.
                Open a new browser tab and see your favorite sites load instantly. Try it out for free.
            </p>
            <button>Get it on Chrome</button>
            <button>Get it on Firefox</button>
        </div>
    )
  }