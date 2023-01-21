import ProfilePicture from "../atoms/ProfilePicture";
import ProfileTitle from "../atoms/ProfileTitle";
import moduleStyle from "../../assets/styles/cv.module.css";
export default function HeadProfile() {
  return (
    <div className={moduleStyle.topSection}>
      <ProfilePicture />
      <ProfileTitle />
    </div>
  );
}
