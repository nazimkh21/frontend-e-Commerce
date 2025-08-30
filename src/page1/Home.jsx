// import { Search, ShoppingBag, Menu } from 'lucide-react'
import '../Barsection.css'
import Img from './Img'
import Barsection from '../Barsection'
import Discription from './Discription'
import Section2 from './Sectionn2'
import Section3 from './Sectionn3'
import Section4 from './Sectionn4'
import Section5 from './Sectionn5'
import Section6 from './Sectionn6'
import "./Home.css"
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

export default function Home(){
  const navigate = useNavigate()
  function leavepage(par){
    navigate(par)
  }

    useEffect(()=>{
      const token = localStorage.getItem("token")
      if(!token){
         leavepage("/register")
      }
    },[])

    return(
        <div className="container1">

          <Img/>
          <Barsection/>
          <Discription/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
          <Section6/>

            
        </div>
    )
}