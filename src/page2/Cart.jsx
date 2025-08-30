import { useState, useEffect } from "react"
import { products } from "./Data"
import Barsection from "../Barsection"
import axios from "axios"
import "./Cart.css"

export default function Cart(){
    const [items, setItems] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        try {
            const item = JSON.parse(localStorage.getItem("items") || "[]"); 
            setItems(item);
        } catch (error) {
            console.log(error);
        }
    }, []);
   
    useEffect(() => {
        const updatedProducts = products
            .map(product => {
                const cartItem = items.find(item => item.id === product.id);
                return cartItem ? {...product, quantity: cartItem.quantity} : null;
            })
            .filter(product => product !== null);
        
        setFilteredProducts(updatedProducts);
    }, [items]);




    const updateCart = async (updatedItems) => {
        try {
            await axios.put(
                "https://backend-e-commerce-da58.onrender.com/itemcart",
                { itemsselected: updatedItems },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
                }
            );
            
            localStorage.setItem("items", JSON.stringify(updatedItems));
            setItems(updatedItems);
        } catch (error) {
            console.log("Backend update failed:", error);
            // Fallback to localStorage only
            localStorage.setItem("items", JSON.stringify(updatedItems));
            setItems(updatedItems);
        }
    };

    const handleDecrement = (product) => {
        if (product.quantity <= 1) return;
        
        const updatedItems = items.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        
        updateCart(updatedItems);
    };

    const handleIncrement = (product) => {
        const updatedItems = items.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        
        updateCart(updatedItems);
    };

    //delete item

   const  deleteItem= async (product)=>{
     try {
       await axios.delete("https://backend-e-commerce-da58.onrender.com/itemcart",{
        data:{itemid: product.id},
          
             headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
          }

          )
          const updatedItems= items.filter(item=>
            item.id!==product.id
          )

          localStorage.setItem("items", JSON.stringify(updatedItems));
            setItems(updatedItems);


     } catch (error) {
         console.log("Backend update failed:", error);
     }
    }

    return(
        <div className="cart">
            <Barsection id="p"/>
            <div className="cartcontainer">
                <h2>Your Cart</h2>
                
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="product-purchased">
                            <img src={product.Img} alt={product.name} />
                            <div className="details" id="details2">
                                <h3>{product.name}</h3>
                                <p className="price">${product.currentPrice.toFixed(2)}</p>
                                <div className="incrementation">
                                    <button className="decrement" onClick={() => handleDecrement(product)}>-</button>
                                    <span id="quantity">{product.quantity}</span>
                                    <button className="increment" onClick={() => handleIncrement(product)}>+</button>
                                </div>
                                <button className="deleteitem" onClick={()=>deleteItem(product)}>Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p id="noitems">No items in cart</p>
                )}
            </div>
        </div>  
    )
}