import "./Register.css"
import "./Signup.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import google from "../assets/search.jpg"
export default function Signup({input,setInput,prob,setProb}){


  


   function username(event) {
    setInput({...input, Username:event.target.value});
    
  }  
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



  const handlesubmit= async(event)=>{
     event.preventDefault();

    if(input.Password.length>=8){
        setProb("")

    try {
        const data ={
       useremail: input.Email,
      userpassword: input.Password,
      username: input.Username
                }
    const response  = await  axios.post("https://backend-e-commerce-da58.onrender.com/register",data)
        if (response.status === 200) {
        // Registration does not return a token, so skip localStorage
        console.log("User registered:", response.data)
        navigate("/Register") // redirect to login page after successful registration
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
    const navigate = useNavigate()
     function leavepage(par){
     navigate(par)
    }

   
    return(
        <div className="regitser-container">
          <div className="wrapper">
            <div className="form-wrapper sign-in">
                <form onSubmit={(event)=> handlesubmit(event)} action="">
                    <h2 id="sign-tittle">Sign In</h2>
                    <div className="input-group">
                        <input
                         type="text"
                          required 
                          placeholder=" "
                          onChange={(event)=>username(event)}
                           />
                        <label htmlFor=""> Username </label>
                    </div>

                     <div className="input-group">
                        <input
                         type="email"
                          required
                           placeholder=" "
                          onChange={(event)=>emailrecover(event)}
                            />
                        <label htmlFor=""> email </label>
                    </div>


                     <div className="input-group">
                        <input
                         type="password"
                          required
                           placeholder=" " 
                           onChange={(event)=>passwordrecover(event)}
                           />
                        <label htmlFor=""> Password </label>

                    </div>

                    <div className="problems" id="problem2">
                       <span>{prob}</span>
                    </div>

                    <div className="remember">
                        <label htmlFor=""> <input type="checkbox" /> Remember me</label>
                    </div>
                    <button className="signin" type="submit"> Sign in</button>
                    <div className="signUp-link">
                        <p>have an account? 
                        <span onClick={()=>leavepage("/register")} className="singUpBtn-link">
                         Sign In
                        </span>
                        </p>
                    </div> 
                  
                      <button
                      type="button"
                      id="googlelogin"
                      onClick={()=>{
                        window.location.href= "https://backend-e-commerce-da58.onrender.com/auth/google"
                      }}
                      >
                      continue with google
                       <img src={google} alt="" />
                   
                        
                         
                      </button>
                  

                </form>
            </div>
          </div>
        
        </div>
    )
}