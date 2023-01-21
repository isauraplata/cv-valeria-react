import React from 'react'
import moduleStyle from "../assets/styles/cv.module.css";
import Profile from '../componets/moleculas/Profile';
import Experience from "../componets/moleculas/Experience";
import Education from "../componets/moleculas/Education";
export default function ContainerUnder() {
  return (
    <div>
      <div className={moduleStyle.line}></div>
      <div className={moduleStyle.colDiv8}>
        <div className={moduleStyle.contentBox}>
          <Profile/>
          <Experience/>
          <Education/>
        </div>
      </div>
      <div className={moduleStyle.clearfix}></div>

    </div>
  )
}
