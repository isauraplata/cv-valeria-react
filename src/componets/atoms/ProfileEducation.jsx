import moduleStyle from "../../assets/styles/cv.module.css";

export default function ProfileEducation({ school }) {
  return (
    <>
    <p className={moduleStyle.p3}>{school}</p>
    </>
  );
}
