import moduleStyle from "../../assets/styles/cv.module.css";
import { data } from "../../data/data";
export default function ProfileTitle() {
  return (
    <>
      <p className={moduleStyle.p1}>
        {data.name} <span>{data.lastName}</span>
      </p>
      <p className={moduleStyle.p2}>{data.level}</p>
    </>
  );
}
