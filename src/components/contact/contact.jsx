import React from 'react'
import './contact.css'

const contact = () => {
    return(
        <section className='contact-us'>
            <h1 className='title'> 
                <span className='icon-envelope'></span>
                Contact us
            </h1>
            <p className='sub-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem possimus repudiandae beatae odit. Ad aliquid illum, doloremque id earum molestiae veniam rerum optio</p>


            <div className="flex">
                <form>
                    <div className='flex' >
                        <label htmlFor="email">Email Address</label>
                        <input required type="email" id='email' placeholder='Your email'/>
                    </div>

                    <div className='flex' style={{marginTop: "24px"}}>
                        <label htmlFor="msj">Your Message </label>
                        <textarea required name="msj" id="msj" placeholder='Message'></textarea>
                    </div>

                    <button className='submit'>Submit</button>

                    <div className="animation">
                        
                    </div>
                </form>
            </div>
        </section>
    )
}

export default contact;


