import Img4 from '../assets/pic4.jpg'
import './Section3.css'
import { useNavigate } from 'react-router-dom'
export default function Sectionn3(){

  const navigate = useNavigate()
  function leavepage(par){
       navigate(par)
  }
  return(
    <div className="section3">
        <img src={Img4} alt="" />
        <p className="text">
            Lorem ipsum dolor sit amet, consectetur
             adipiscing elit. Consequat dolor odio odio
              malesuada at condimentum adipiscing 
                       iaculis semper.
        </p>
        <button onClick={()=>leavepage("/shop")} className='button2'>
            view more
        </button>
    </div>
  )
}