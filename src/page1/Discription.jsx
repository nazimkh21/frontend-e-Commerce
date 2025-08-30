import './Discription.css'
import { useNavigate } from 'react-router-dom'
export default function Discription(){

const navigate = useNavigate()
function leavepage(par){
     // window.scrollTo(0,0);
     navigate(par)
}
return (
    <div className="container2">
       <span >All for your home</span> 
       <p>Lorem ipsum dolor sit amet,
         consectetur adipiscing elit.
         Consequat dolor odio odio malesuada at
          condimentum adipiscing iaculis semper.</p>

         <button onClick={()=> leavepage("/shop")} className="button1">
              view more 
         </button>
    </div>

    
)
}