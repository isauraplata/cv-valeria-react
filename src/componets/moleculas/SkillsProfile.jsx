import moduleStyle from "../../assets/styles/cv.module.css";
import ProfileSubtitle from "../atoms/ProfileSubtitle";
import { data } from "../../data/data";
export default function SkillsProfile() {
  return (
    <>
      <ProfileSubtitle subtitulo={"My skills"} />
      <ul className={moduleStyle.skills}>
        {data.skills.map(skill => (
          <li key={skill}>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
