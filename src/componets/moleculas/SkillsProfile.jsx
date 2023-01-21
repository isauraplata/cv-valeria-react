import ProfileSkill from "../atoms/ProfileSkill";
import ProfileSubtitle from "../atoms/ProfileSubtitle";
import { data } from "../../data/data";
export default function SkillsProfile() {
  return (
    <>
      <ProfileSubtitle subtitulo={"My skills"} />
      {data.skills.map((skill) => (
        <ProfileSkill skill={skill} key={skill} />
      ))}
    </>
  );
}
