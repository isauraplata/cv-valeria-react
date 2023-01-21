import moduleStyle from "../assets/styles/cv.module.css";
import ContainerTop from '../organism/ContainerTop';
import ContainerUnder from '../organism/ContainerUnder';
export default function Home() {
  return (
   <div className={moduleStyle.main}>
    <ContainerTop/>
    <ContainerUnder/>
   </div>
   
  )
}
