import moduleStyle from "../../assets/styles/cv.module.css";
import ProfileSubtitle from "../atoms/ProfileSubtitle";
import ProfileEducation from "../atoms/ProfileEducation";
import { data } from "../../data/data";
export default function Education() {
  return (
    <>
      <ProfileSubtitle subtitulo={"Education"} />
      {data.schools.map((school) => (
        <ProfileEducation key={school} school={school}/>
      ))}
    </>
  );
}
