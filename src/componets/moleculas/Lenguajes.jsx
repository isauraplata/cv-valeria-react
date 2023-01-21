import { data } from "../../data/data";
import ProfileLenguajes from "../atoms/ProfileLenguajes";
import ProfileSubtitle from "../atoms/ProfileSubtitle";
export default function Lenguages() {
  return (
    <>
      <ProfileSubtitle subtitulo={"Lenguages"}/>
      {data.lenguajes.map((el) => (
        <ProfileLenguajes lenguajes={el} key={el} />
      ))}
    </>
  );
}
