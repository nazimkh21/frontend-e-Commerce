import { useEffect, useState } from "react"
import "./Register.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
export default function Register({input,setInput,prob,setProb}){
  

  function emailrecover(event) {
    setInput({...input, Email:event.target.value});
    
  }
  function passwordrecover(event){
    if(event.target.value.length<8 && event.target.value.length>0){
       setProb("less than 8 characters")
      
    }
    else{
    setInput({...input,Password: event.target.value})
    setProb('')
    }
   
    
  }

    const handlesubmit = async (event)=> {
     event.preventDefault();

    if(input.Password.length>=8){
        setProb("")
       
   //integration
    try {
            const data ={
           useremail: input.Email,
          userpassword: input.Password
          
            }
        const response  = await  axios.post("https://backend-e-commerce-da58.onrender.com/login",data)
          if(response.status===200){
            localStorage.setItem("token",response.data.token)
             leavepage("/")
          }
        
          
        } catch (error) {
          if (error.response && error.response.data) {
            setProb(error.response.data.message || error.response.data.error || "Registration failed, try again");
          } else {
            setProb("Registration failed, try again");
          }
        }
    
             
    }

  }
 

  
 




  // routing
  const navigate = useNavigate()

    function leavepage(par){
        navigate(par)
    } 

      useEffect(()=>{
      const token = localStorage.getItem("token")  
      if(token){
        leavepage("/")
      }
    },[])


    return(
        <div className="regitser-container">
          <div className="wrapper">
            <div className="form-wrapper sign-in">
                <form  onSubmit={(event)=> handlesubmit(event)} action="">
                    <h2 id="s-tittle" >Sign In</h2>
                    <div className="input-group">
                        <input
                         type="email"
                         placeholder=" "
                         onChange={(event)=>emailrecover(event)}
                         required />
                        <label htmlFor=""> email </label>
                    </div>
                     <div className="input-group">
                        <input
                         type="password"
                         placeholder=" "
                         onChange={(event)=>passwordrecover(event)}
                         required />

                        <label htmlFor=""> Password </label>

                    </div>
                  
                        
                           
                     <div className="problems">
                       <span>{prob}</span>
                    </div>
                            
                        
                   
                    <div className="remember">
                        <label htmlFor=""> <input type="checkbox" /> Remember me</label>
                    </div>

                    <button className="signin"  type="submit"> Sign in</button>
                    <div className="signUp-link">
                        <p>Dont have an account? 
                        <span onClick={()=>leavepage("/Signup")} className="singUpBtn-link">
                         Sign Up
                        </span>
                        </p>
                    </div> 

                </form>
            </div>
          </div>
        
        </div>
    )
}