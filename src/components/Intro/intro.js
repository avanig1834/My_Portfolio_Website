import React from 'react'
import './intro.css'
// import bg from '../../assets/my_photo.png'

// import { Link } from 'react-scroll'
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Greetings!</span>
            <span className="introText">I'm <span className="introName">Avani Gajallewar</span> </span>
            <div className="introPara">
            Dedicated and enthusiastic sophomore studying electronics and communication engineering, I'm excited to apply my knowledge in the fast-paced tech industry. 
            </div>
            {/* <Link><button className="btn"></button></Link> */}
            
        </div>
        {/* <img src={bg} alt="my_photo" className='bg'/> */}
    </section>
  )
}

export default Intro;
