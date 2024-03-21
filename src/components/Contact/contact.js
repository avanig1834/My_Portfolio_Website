import React, { useRef } from 'react'
import './contact.css'
import linkedin from '../../assets/linkedin.png'
import gmail from '../../assets/gmail.png'
// import twitter from '../../assets/twitter.png'
import whatsapp from '../../assets/whatsapp.png'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sfhpm4h', 'template_jvnwlnt', form.current, 'gCKTYaBWSahipRLYs')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact'>
      <h1 className="contactPageTitle">Contact Me</h1>
      <div className="writeme">
        <div className="contact">
              <a href="mailto:avanigajallewar1834@gmail.com" className="social" target='_blank' rel="noreferrer"><img src={gmail} alt="instagram" className="link" /> </a>
        </div>
        <div className="contact">
              <a href="https://api.whatsapp.com/send?phone8103901672&text=Hello, more information!" className="social" target='_blank' rel="noreferrer"><img src={whatsapp} alt="twitter" className="link" target="_blank" rel="noreferrer"/></a>
        </div>
        <div className="contact">
              <a href="https://www.linkedin.com/in/avani-p-gajallewar-644a9a257/" className="social" target='_blank' rel="noreferrer"><img src={linkedin} alt="linkedin" className="link" /></a>
              
        </div>
      </div>
      <span className="contactDesc">Please fill out the form to discuss any work opportunities</span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className='name' placeholder='Your Name' name='your_name'/>
        <input type="email" className='email' placeholder='Your Email' name='your_email'/>
        <textarea name="message" className='msg'rows="5" placeholder='Your Message'></textarea>
        <button type='submit' value="send" className="submitBtn">Submit</button>
        <div className="links">
            {/* <img src="" alt="" className="link" /> */}
            
            
            
        </div>
      </form>
    </div>
  )
}

export default Contact
