import './Sectionn5.css'
import { Truck, ShoppingBag, CreditCard, RefreshCw } from 'lucide-react';
export default function Sectionn5(){
    return(
        <div className="section5">
            {/* 1 */}
          <div className="item1">
             <div className="title">
               <ShoppingBag width={"40px"} height={"40px"} id='d1' />
                <h2>Shope online</h2>

             </div>
             <p>
             Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit.
              Consequat dolor odio odio 
             </p>
          </div>
           
        {/* 2 */}

        <div className="item1">
             <div className="title">
               <Truck  width={"40px"} height={"40px"} id='d1'/>
                <h2>Free shipping</h2>

             </div>
             <p>
            Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. 
             Consequat dolor odio odio 
             </p>
          </div>
           
           {/* 3 */}

           <div className="item1">
             <div className="title">
               <RefreshCw width={"40px"} height={"40px"} id='d1'/>
                <h2>Return policy </h2>

             </div>
             <p>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit.
               Consequat dolor odio odio 
             </p>
          </div>
           

           {/* 4 */}

           <div className="item1">
             <div className="title">
               <CreditCard  width={"40px"} height={"40px"} id='d1' />
                <h2>PAYMENT</h2>

             </div>
             <p>
              Lorem ipsum dolor sit amet,
               consectetur adipiscing elit.
                Consequat dolor odio odio 
             </p>
          </div>
           



        </div>
    )
}