import moduleStyle from "../../assets/styles/cv.module.css"

export default function ProfileLenguajes({lenguajes}) {
  return (
    <>
    <p className={moduleStyle.p3}>{lenguajes}</p>
    </>
  )
}
