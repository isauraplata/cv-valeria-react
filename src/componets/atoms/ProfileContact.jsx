import moduleStyle from "../../assets/styles/cv.module.css";

export default function ProfileContact({contact}) {
  return (
    <>
     <p className={moduleStyle.p3}>{contact}</p>
    </>
  )
}
