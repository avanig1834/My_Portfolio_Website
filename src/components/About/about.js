import React from 'react'
import "./about.css"
import Frontend from '../About/Frontend'
import Backend from '../About/Backend'
import Programming from './Programming'

const About = () => {
  return (
    <section className="skills section" id="skill">
        <span className="skillTitle">Skills</span>
        <div className="skills_container container grid">
          <Backend/>
          <Frontend/>
          <Programming/>
        </div>
    </section>
  )
}

export default About;
