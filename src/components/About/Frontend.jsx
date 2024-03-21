import React from 'react'
import { LuBadgeCheck } from "react-icons/lu";
const Frontend = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">WEB DEVELOPMENT</h3>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                <LuBadgeCheck className="badge" />

                <div>
                  <h3 className="skills_name">HTML</h3>
                  <span className="skills_level">Basic</span>
                </div>
                </div>

                <div className="skills_data">
                <LuBadgeCheck className="badge" />

                <div>
                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
                </div>

                <div className="skills_data">
                <LuBadgeCheck className="badge" />

                <div>
                  <h3 className="skills_name">JavaScript</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
                </div>

                <div className="skills_data">
                <LuBadgeCheck className="badge" />

                <div>
                  <h3 className="skills_name">React</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
                </div>

                <div className="skills_data">
                <LuBadgeCheck className="badge" />

                <div>
                  <h3 className="skills_name">Bootstrap</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend
