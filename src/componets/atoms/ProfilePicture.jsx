import img from "../../assets/img/valeria.jpeg";
import moduleStyle from "../../assets/styles/cv.module.css";
export default function ProfilePicture() {
  return (
   <>
    <img src={img} className={moduleStyle.profile}/>
   </>
  );
}