import React from 'react'
import './portfolio.css'
import ats from '../../assets/ats.png'
import har from '../../assets/har.png'
import hpp from '../../assets/hpp.png'
import { FaExternalLinkAlt } from "react-icons/fa";
const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div className="container">
        <div className="skillTitle">My Projects</div>
        <div className="work-list">
            <div className="work">
                <img src={ats} alt="" />
                <div className="layer">
                    <h3>Applicant Tracking System</h3>
                    <p>User friendly interface that helps applicants track their resume. Based on defined threshold it accepts or rejects CV that streamlines hiring system.</p>
                    <a href="https://github.com/avanig1834/Applicant-Tracking-System-Minor-Project" target="_blank" rel="noreferrer"><FaExternalLinkAlt />
                    </a>
                </div>
            </div>
            <div className="work"> 
                <img src={har} alt="" />
                <div className="layer">
                    <h3>Human Activity Recognition</h3>
                    <p>Integrated Human Pose Estimation and Human Parsing for effective human activity recognition that has applications in security and health monitoring.</p>
                    <a href="https://github.com/avanig1834/IPP-Net-Parsing" target="_blank" rel="noreferrer"><FaExternalLinkAlt />
                    </a>
                </div>
            </div>
            <div className="work">
                <img src={hpp} alt="" />
                <div className="layer">
                    <h3>House Price Prediction</h3>
                    <p>Project on estimating affordable house prices based on customer requirements. Equipped with an interactive interface that predicts house prices.</p>
                    <a href="https://github.com/avanig1834/House-Price-Prediction/tree/main" target="_blank" rel="noreferrer"><FaExternalLinkAlt />
                    </a>
                </div>
            </div>
        </div>
        <a href="https://github.com/avanig1834?tab=repositories" className='btn' target="_blank" rel="noreferrer">See More</a>
      </div>
    </div>
  )
}

export default Portfolio
