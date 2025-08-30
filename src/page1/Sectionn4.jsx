import Img5 from '../assets/pic5.jpg'
import Img6 from '../assets/pic6.jpg'
import Img7 from '../assets/pic7.jpg'
import { useNavigate } from 'react-router-dom'

import './Sectionn4.css'
export default function Sectionn4(){

      const navigate = useNavigate()
      function leavepage(par){
           navigate(par)
      }
    return(
        <div className="section4">
            {/* first one */}

            <div className="info">
                <h2>stylish chairs</h2>
                <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Consequat dolor odio odio malesuada
                at condimentum adipiscing iaculis semper.
                </p>
                <button onClick={()=>{window.scrollTo(0, 0); leavepage("/shop")}} className="button3">
                    view more

                </button>

            </div>
            <img src={Img5} alt="" />


            {/* second one */}

              <img src={Img6} alt="" />
            <div className="info">
                <h2>stylish chairs</h2>
                <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Consequat dolor odio odio malesuada
                at condimentum adipiscing iaculis semper.
                </p>
                <button  onClick={()=> {window.scrollTo(0, 0); leavepage("/shop")}} className="button3">
                    view more

                </button>

            </div>

                  {/*third one  */}
             <div className="info">
                <h2>stylish chairs</h2>
                <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Consequat dolor odio odio malesuada
                at condimentum adipiscing iaculis semper.
                </p>
                <button onClick={()=>{window.scrollTo(0, 0); leavepage("/shop")}} className="button3">
                    view more

                </button>

            </div>
            <img src={Img7} alt="" />
            
        </div>
    )
}