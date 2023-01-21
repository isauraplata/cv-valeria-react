import moduleStyle from "../../assets/styles/cv.module.css";
import ProfileSubtitle from "../atoms/ProfileSubtitle";
import { data } from "../../data/data";
export default function Profile() {
  return (
    <>
      <ProfileSubtitle subtitulo={"Profile"}/>
      <p className={moduleStyle.p3}>{data.description}</p>
    </>
  );
}
