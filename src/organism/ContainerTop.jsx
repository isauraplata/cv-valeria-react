import React from 'react'
import moduleStyle from "../assets/styles/cv.module.css";
import Contact from '../componets/moleculas/Contact';
import SkillsProfile from '../componets/moleculas/SkillsProfile';
import Lenguajes from '../componets/moleculas/Lenguajes';
import HeadProfile from '../componets/moleculas/HeadProfile';
export default function ContainerTop() {
  return (
    <div>
        <HeadProfile/>
        <div className={moduleStyle.clearfix}></div>
      
        <div className={moduleStyle.colDiv4}>
            <div className={moduleStyle.contentBox}>
                <Contact/>
                <SkillsProfile/>
                <Lenguajes/>
            </div>
        </div>
    </div>
  )
}
