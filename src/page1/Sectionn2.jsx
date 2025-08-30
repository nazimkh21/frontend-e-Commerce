import Img1 from '../assets/pic1.jpg'
import Img2 from '../assets/pic2.jpg'
import Img3 from '../assets/pic3.jpg'
import './Section2.css'




export default function Sectionn2(){
    return(
     <div className='container3'>
        <span className="title2">
           Products of the week
        </span>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Consequat dolor odio odio malesuada at condimentum adipiscing
                    iaculis semper.
        </p>

        
        <div className="pictures">
            {/* image 1 */}
            <div className="image">
                <img src={Img1} alt="" />

                <div className="details">
                    <span>pot</span>
                    <p>
                        $ 223,00
                    </p>
                

                </div>
               
            </div>

            {/* image 2 */}
            <div className="image">
                <img id='pic2' src={Img2} alt="" />
                <div className="details">
                    <span>lamp</span>
                    <p>
                        $ 223,00
                    </p>
                

                </div>
            </div>

            {/* image 3 */}
              <div className="image">
                <img id='pic3' src={Img3} alt="" />
                <div className="details">
                    <span>chair</span>
                    <p>
                        $ 223,00
                    </p>
                

                </div>
            </div>
            
        </div>
      
        </div>
    )
}