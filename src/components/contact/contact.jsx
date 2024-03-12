import { useForm, ValidationError } from '@formspree/react';
import './contact.css'
import Lottie from "lottie-react";
import contactUs from '../../../public/contact-us.json'

const contact = () => {
    const [state, handleSubmit] = useForm("xwkgqwjb");

    if (state.succeeded) {
        return <p>Thanks! Your message was sent</p>;
    }
    return (
        <section className='contact-us'>
            <h1 className='title'>
                <span className='icon-envelope'></span>
                Contact us
            </h1>
            <p className='sub-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem possimus repudiandae beatae odit. Ad aliquid illum, doloremque id earum molestiae veniam rerum optio</p>


            <div style={{ justifyContent: 'space-between' }} className="flex">
                <form onSubmit={handleSubmit}>
                    <div className='flex' >
                        <label htmlFor="email">Email Address</label>
                        <input required type="email" autoComplete='off' name='email' id='email' placeholder='Your email' />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div className='flex' style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your Message </label>
                        <textarea required name="message" id="message" placeholder='Message'></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button className='submit' disabled={state.submitting}>{state.submitting ? "Submiting..." : "Submit"}</button>


                </form>
                <div className="animation">
                    <Lottie
                        animationData={contactUs}
                        style={{ height: 355 }}
                    />
                </div>
            </div>
        </section>
    )
}

export default contact;


