import React from 'react'
import './skills.css'
// import webDesign from '../../assets/website-design.png'
import cv from '../../assets/Resume.pdf'
import { RiAwardLine } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";

const Skills = () => {
  return (
    <div className="skills">
       <section className='skillc' id="skills">
        <span className="skillTitle">About Me</span>
        <div className="aboutme">
            <div className="about_box">
                <div className="icon"><RiAwardLine/></div>
                <h3 className="about_title">Experience</h3>
                <span className="about_subtitle">Learning</span>
            </div>
            <div className="about_box">
                <div className="icon"><IoBagCheckOutline /></div>
                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">5+ Projects</span>
            </div>
        </div>
        <span className="skillDesc">
        I'm excited to introduce myself as a passionate individual embarking on the exciting journey of academic exploration and personal growth. Dedication, perseverance and academic prowess catered my first year at our venerated college and helped me transform from a student to a learning professional. With an year of experiences under my belt, I bring a heightened sense of enthusiasm, a growing set of skills, comprehensive knowledge and an eagerness to make meaningful contributions to the realm of electronics and communication. 
        </span>

        <a href={cv} download className='button'>Download CV</a>
        <div className="skillBars">

           

        </div>
    </section> 
    </div>
    
    
  )
}

export default Skills;
// <div id="services">
    //     <div className="container">
    //         <div className="row">
    //             <div className="about-col-1">
    //                 <img src={bg} alt="" />
    //             </div>
    //             <div className="about-col-2">
    //                 <h1 className='sub-title'>About Me</h1>
    //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsum excepturi! Ullam pariatur doloremque ipsa et quasi natus possimus dolore, saepe voluptatibus quidem soluta atque veritatis quos suscipit. Voluptate, sequi!</p>

    //                 <div className="tab-titles">
    //                     <p className="tab-links active-link" onClick={opentab('skills')}>Skills</p>
    //                     <p className="tab-links" onClick={opentab('experience')}>Experience</p>
    //                     <p className="tab-links" onClick={opentab('education')}>Education</p>
    //                 </div>
    //                 <div className="tab-contents active-tab" id="skills">
    //                     <ul>
    //                         <li><span>Programming Language</span><br />C/C++, Python</li>
    //                         <li><span>Front-End Web Development</span><br/>HTML, CSS, ReactJS, JavaScript</li>
    //                         <li><span>Circuit Designing</span><br />EAGLE, MATLAB</li>
    //                     </ul>
    //                 </div>
    //                 <div className="tab-contents" id="experience">
    //                     <ul>
    //                         <li><span>Learning</span><br />Btech ECE Undergraduate looking forward to contribute my skills in dynamic field of the tech sector.</li>
    //                     </ul>
    //                 </div>
    //                 <div className="tab-contents" id="education">
    //                     <ul>
    //                         <li><span>Undergraduate Btech ECE</span><br />Dr. Shyama Prasad Mukherjee International Institute of Information Techonology Raipur C.G.</li>
    //                         <li><span>Intermediate</span><br />Ryan International School, Raipur C.G. 95.4%</li>
    //                         <li><span>Matriculation</span><br />Bhartiya Vidya Bhavans RK Sarda Vidya Mandir, Rsipur C.G. 93.8%</li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
