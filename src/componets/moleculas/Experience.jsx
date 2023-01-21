import React from "react";
import { data } from "../../data/data";
import ProfileSubtitle from "../atoms/ProfileSubtitle";
import moduleStyle from "../../assets/styles/cv.module.css";
export default function Experience() {
  return (
    <>
      <ProfileSubtitle subtitulo={"EXPERIENCE"} />
      {data.experience.map((exp) => (
        <p className={moduleStyle.p3} key={exp}>{exp}</p>
      ))}
    </>
  );
}
