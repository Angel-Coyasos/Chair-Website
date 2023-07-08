import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
        <section className='contact container' id='contact'>
            <div className="contact-data">
                <h2 className='heading'>
                    Get started with 
                    <span className='gradient-text'> LeChair</span>
                </h2>
                <p>
                    Suscribe and find super attractive price quotes from us,
                    <br />
                    and make yourself comfortable
                </p>
                <a href="#" className="btn">Get Started</a>
            </div>
        </section>
    </>
  )
}

export default Contact