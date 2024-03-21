import React from 'react'
import "./Qualification.css"
// import { RiGraduationCapLine } from "react-icons/ri";
// import { SlCalender } from "react-icons/sl";
const Qualification = () => {
  return (
    // <section className="qualification section" id='education'>
    //     <span className="skillTitle">Qualification</span>
        
    //     <div className="qualification_container container">
    //         <div className="qualification_tabs">
    //             <div className="qualification_button qualification_active button--flex">
    //             <RiGraduationCapLine /> Education
    //             </div>
    //         </div>

    //         <div className="qualification_sections">
    //             <div className="qualification_content">
                    
    //                 <div className="qualification_data">
    //                     <div>
    //                     <h3 className="qualification_title">BTech</h3>
    //                     <span className="qualification_subtitle">Dr. SPM International Institute of Information Technology, Naya Raipur</span>
    //                     <div className="qualification_calender"><SlCalender /> 2022 - 2026</div>
    //                     </div>

    //                     <div>
    //                         <span className="qualification_rounder"></span>
    //                         <span className="qualification_line"></span>
    //                     </div>
    //                 </div>

    //                 <div className="qualification_data">
    //                     <div></div>

    //                     <div>
    //                         <span className="qualification_rounder"></span>
    //                         <span className="qualification_line"></span>
    //                     </div>

    //                     <div>
    //                     <h3 className="qualification_title">Intermediate</h3>
    //                     <span className="qualification_subtitle">Ryan International School Raipur</span>
    //                     <div className="qualification_calender"><SlCalender />2022</div>
    //                     </div>
    //                 </div>


    //                 <div className="qualification_data">
    //                     <div></div>

    //                     <div>
    //                         <span className="qualification_rounder"></span>
    //                         <span className="qualification_line"></span>
    //                     </div>

    //                     <div>
    //                     <h3 className="qualification_title">Matriculation</h3>
    //                     <span className="qualification_subtitle">Bhartiya Vidya Bhavan's</span>
    //                     <div className="qualification_calender"><SlCalender />2020</div>
    //                     </div>
    //                 </div>

                    
    //             </div>
    //         </div>
    //     </div>
    // </section>
    
    <section className="timeline-section" id='education'>
         <span className="skillTitle">Qualification</span>
        <div className="timeline-items">
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2022-2026</div>
                <div className="timeline-content">
                    <h3>B.Tech</h3>
                    <p>Dr. SPM IIIT-NR</p>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2022</div>
                <div className="timeline-content">
                    <h3>Intermediate</h3>
                    <p>Ryan International School</p>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2020</div>
                <div className="timeline-content">
                    <h3>Matriculation</h3>
                    <p>Bhartiya Vidya Bhavan's</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
