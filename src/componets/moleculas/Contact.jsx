import moduleStyle from "../../assets/styles/cv.module.css";
import ProfileSubtitle from "../atoms/ProfileSubtitle";
import { data } from "../../data/data";

export default function Contact() {
  return (
    <div>
      <ProfileSubtitle subtitulo={"Contacto"} />
      {data.contact.map((con) => (
        <p className={moduleStyle.p3} key={con} >{con}</p>
      ))}
    </div>
  );
}
