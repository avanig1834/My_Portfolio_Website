import React from 'react'
import { LuBadgeCheck } from "react-icons/lu";
const Programming = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">PROGRAMMING</h3>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                <LuBadgeCheck className="badge"/> 

                <div>
                  <h3 className="skills_name">C/C++</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
                </div>

                <div className="skills_data">
                <LuBadgeCheck className="badge"/> 

                <div>
                  <h3 className="skills_name">Python</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
                </div>

                <div className="skills_data">
                <LuBadgeCheck className="badge"/> 

                <div>
                  <h3 className="skills_name">DSA</h3>
                  <span className="skills_level">Basic</span>
                </div>
                </div>

                <div className="skills_data">
                <LuBadgeCheck className="badge"/> 

                <div>
                  <h3 className="skills_name">GIT</h3>
                  <span className="skills_level">Basic</span>
                </div>
                </div>

               
            </div>
        </div>
    </div>
  )
}

export default Programming
