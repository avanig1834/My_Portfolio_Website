import React from 'react'
import { LuBadgeCheck } from "react-icons/lu";
const Backend = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">ELECTRONICS</h3>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                <LuBadgeCheck className="badge" />

                <div>
                  <h3 className="skills_name">MATLAB</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
                </div>

                <div className="skills_data">
                <LuBadgeCheck className="badge" />

                <div>
                  <h3 className="skills_name">CADENCE PSPICE</h3>
                  <span className="skills_level">Basic</span>
                </div>
                </div>

                <div className="skills_data">
                <LuBadgeCheck className="badge" />

                <div>
                  <h3 className="skills_name">OrCAD</h3>
                  <span className="skills_level">Basic</span>
                </div>
                </div>


                <div className="skills_data">
                <LuBadgeCheck className="badge" />

                <div>
                  <h3 className="skills_name">EAGLE</h3>
                  <span className="skills_level">Basic</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend
