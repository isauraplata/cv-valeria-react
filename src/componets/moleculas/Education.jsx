import moduleStyle from "../../assets/styles/cv.module.css";
import ProfileSubtitle from "../atoms/ProfileSubtitle";
import { data } from "../../data/data";
export default function Education() {
  return (
    <>
      <ProfileSubtitle subtitulo={"Education"} />
      {data.schools.map((scholl) => (
        <p className={moduleStyle.p4} key={scholl}>{scholl}</p>
      ))}
    </>
  );
}
