import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page1/Home"
import Shop from "./page2/Shop"
import Aboutus from "./page3/Aboutus"
import ScrollToTop from "./ScrollToTop";
import Register from "./registerpage/Register"
import Signup from "./registerpage/Signup"
import Cart from "./page2/Cart"


function App() {
   
    const [input,setInput]= useState({
        Email:'',
        Password:'',
        Username:''
    })
    const [prob,setProb]=useState('');


    // const fetchUsers = async () =>{
    //   try {
    //   const res = await axios.post("http://localhost:5500/register")
        
    //   } catch (error) {
        
    //   }
    // }
  return(
       <Router>
      <ScrollToTop /> {/* <-- add this here */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/register' element={<Register input={input} setInput={setInput} prob={prob} setProb={setProb}/>}/>
        <Route path='/Signup' element={<Signup input={input} setInput={setInput} prob={prob} setProb={setProb}/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        
        
     </Routes>
   </Router>
  )
}

export default App

