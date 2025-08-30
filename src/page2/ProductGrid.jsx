import { useState } from "react"
import "./ProductGrid.css"
import axios, { all } from "axios"
import { useEffect } from "react"
const ProductGrid = ({ products, filters })=>{
const [currentpage,Setcurrentpage] = useState(1)
const [showbuy,setShowbuy] = useState(false)
const [selectedProduct, setSelectedProduct]=useState(null)
const [addeditem,setAddeditem] = useState(false)
 

const itemperpage = 9;
const totalpages= Math.ceil(products.length/itemperpage)

// figure out which product to show 
const startindex = (currentpage-1)* itemperpage
let currentProducts = products.slice(startindex,itemperpage+startindex)


    const buymethod=(product)=>{
       setSelectedProduct(product)
       setShowbuy(true)
    }

    const additems = async () => {
  try {
    if (!selectedProduct) return;

    const data = {
      itemsselected: [{id:selectedProduct.id,quantity:1}] // or selectedProduct._id depending on your backend
    };

    const response = await axios.post(
      "http://localhost:5500/itemcart",
      data,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      }
    );

    if (response.status === 200) {
      localStorage.setItem("items", JSON.stringify(response.data.items));
      setAddeditem(true)

      setTimeout(() => {
         setAddeditem(false)
      }, 2000);
      
    }
  } catch (error) {
    console.error("Add to cart failed:", error.response?.data || error.message);
    alert("fail to add")

  }
};
      
    // backend integratrion
   
    return(
     <>
       
       <p className="resultss">showing {startindex +1} - {Math.min(itemperpage+startindex,products.length)} of {products.length}</p>

     <div className="product-grid" >
            {
               currentProducts.map(product=>(
        <div key={product.id} className="product-card" >
             <img onClick={()=>buymethod(product)} src={product.Img} alt="" />
             <div className="details">
              
             <h3> {product.name}</h3>
              <p className="price">${product.currentPrice.toFixed(2)}</p>

                    </div>
        </div>
      
               )
                      
            )}
     </div>
             
               { showbuy && selectedProduct && (
        <div className="overplay" onClick={()=>setShowbuy(false)}>
         <div className="addtocart" onClick={(e)=>e.stopPropagation()}>
              <img src={selectedProduct.Img} alt={selectedProduct.name} />
           <div className="info1">
              <p id="name">{selectedProduct.name}</p>
              <p id="price">${selectedProduct.currentPrice.toFixed(2)}</p>
              <button className="cart-btn" onClick={additems}>Add to Cart</button>
              { addeditem &&(
               <div className="addeditem">
                  <span>item added to your cart!</span>
               </div>
              )

              }
           </div>
          </div>
       </div>
              )} 
        

      {/* pagination controls */}
      <div className="pagination">
       <button onClick={()=>{Setcurrentpage((p)=>
        Math.max(1,p-1))
        window.scrollTo(0, 0)      
        }}
        disabled={currentpage===1}
         
        >
        &lt;
       </button>

       {
       [...Array(totalpages)].map((_,i)=>(
            <button
            key={i}
            style={{fontWeight: currentpage===i+1? "bold": "normal"}}
            className="numbers"
            onClick={()=>{ 
              Setcurrentpage(i+1)
              window.scrollTo(0, 0)
             }}
        
           
            >
              {i+1}

            </button>  
       ))
       }

       <button onClick={()=>{Setcurrentpage((p)=>
        Math.min(totalpages,p+1))
        window.scrollTo(0, 0)
       }}
        

       disabled={currentpage===totalpages} 
        >
         &gt;
       </button>

      </div>
    </>
    )
    
}
export default ProductGrid