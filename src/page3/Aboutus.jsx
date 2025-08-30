import Barsection from '../Barsection';
import Sectionn6 from '../page1/Sectionn6.jsx';
import Sectionn5 from '../page1/Sectionn5.jsx';
import {  products } from '../page2/Data.js';
import pic8 from '../assets/pic8.jpg'
import pic9 from '../assets/pic9.jpg'

import './Aboutus.css'

export default function Aboutus(){

 const latestThree = [...products]
    .sort((a,b)=> new Date(b.dateAdded)- new Date(a.dateAdded))
    .slice(0,3);

  return(
<div className='page3'>
    <Barsection/>
    <div className="aboutus">
        <img src={pic8} alt="" />
        <p>About us</p>
    </div>
    <div className="sectionn5">
       <Sectionn5/>
    </div>
   
        <img src={pic9} alt="" id='pic9' />

    
        <span id='t'>
            last blog post
        </span>
        <div className="sorting">
        {
           latestThree.map(product=>(
            <div key={product.id} className="product-card">
                
               <img src={product.Img} alt="" id='images'/>
              <div className="details">
                <p id='date'>{ new Date(product.dateAdded).toLocaleDateString()}</p>
               <h3> {product.name}</h3>
               {/* <p className="price">${product.currentPrice.toFixed(2)}</p> */}
             </div>

            </div>

           )

           )
        }
        </div>

        <div className='sectionn6'>
            <Sectionn6/>
        </div>

    


</div>
  )
}