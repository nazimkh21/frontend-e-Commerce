import { Search, ShoppingBag, Menu } from 'lucide-react'
import './Barsection.css'
import { useNavigate } from 'react-router-dom'
import Userinfo from './userinfo'
import { useState } from 'react'

export default function Barsection(){
    const navigate = useNavigate()

    const [showprofile,setShowprofile] = useState(false)
 

    function leavepage(par){
        navigate(par)
    }

    return(
        // <div className="container1">
         <>    
             
            
        <div className="bar">
           
            <div className="soudemy">
                <span>
                    soudemy
                </span>
            </div>
            <div className="menu">
                <ul>
                    <li onClick={()=>leavepage("/")}>home</li>
                    <li onClick={()=>leavepage("/shop")}>shop</li>
                    <li onClick={()=>leavepage("/aboutus")}>about us </li>
                </ul>
            </div>
            <div className="rightbar">
               
                 <Search />
                 <ShoppingBag onClick={()=>leavepage("/Cart")} />
                 <Menu onClick={()=>setShowprofile(!showprofile)} />
            </div>

        </div> 
                   {showprofile && <Userinfo /> }
      
    
        </>
    )
}