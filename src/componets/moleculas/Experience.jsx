import { data } from "../../data/data";
import ProfileSubtitle from "../atoms/ProfileSubtitle";
import ProfileExperience from "../atoms/ProfileExperience";
export default function Experience() {
  return (
    <>
      <ProfileSubtitle subtitulo={"EXPERIENCE"} />
      {data.experience.map((exp) => (
        <ProfileExperience key={exp} experience={exp} />
      ))}
    </>
  );
}
