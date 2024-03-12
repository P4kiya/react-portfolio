
import './hero.css'
import Lottie from "lottie-react";
import developerAnimation from '../../../public/developer.json'
import { useRef, useEffect } from "react";

const hero = () => {
    const lottieRef = useRef(null);
    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.2);
        }
    }, []);
    return (
        <section className='hero flex'>

            <div className='left-section'>

                <div className="parent-avatar flex">
                    <img src="./me.png" className='avatar' alt="" />
                    <div className='icon-verified'></div>
                </div>

                <h1 className='title'>
                    Backend Developer
                </h1>

                <p className='sub-title'>
                    I’m Othmane Aitsalah currently looking for a job, I would like to apply for your offer for the position of Developer web.I’m Very interested, I am particularly motivated to join you to work . My experiences as a Developer web, I think I was able to acquire the skills necessary to carry out the various missions. My background has therefore enabled me to develop my interpersonal.
                </p>

                <div className="icons flex">
                    <div className="icon icon-twitter"></div>
                    <div className="icon icon-instagram"></div>
                    <div className="icon icon-github"></div>
                    <div className="icon icon-linkedin-square"></div>
                </div>
            </div>

            <div className='right-section animation'>
                <Lottie
                    lottieRef={lottieRef}
                    animationData={developerAnimation}
                />
            </div>

        </section>
    )
}

export default hero;
