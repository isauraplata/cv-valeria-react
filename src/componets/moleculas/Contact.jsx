import ProfileSubtitle from "../atoms/ProfileSubtitle";
import ProfileContact from "../atoms/ProfileContact";
import { data } from "../../data/data";

export default function Contact() {
  return (
    <div>
      <ProfileSubtitle subtitulo={"Contacto"} />
      {data.contact.map((cont) => (
        <ProfileContact key={cont} contact={cont}/>
      ))}
    </div>
  );
}
