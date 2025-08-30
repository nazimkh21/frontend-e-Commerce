import "./Register.css"

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
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
    const response  = await  axios.post("http://localhost:5500/register",data)
        if (response.status === 200) {
        // Registration does not return a token, so skip localStorage
        console.log("User registered:", response.data)
        navigate("/Register") // redirect to login page after successful registration
      }
      
    } catch (error) {
      console.error("Error during registration:", error);
      setProb("Registration failed, try again");
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
                    <h2>Sign In</h2>
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
                    <button type="submit"> Sign in</button>
                    <div className="signUp-link">
                        <p>have an account? 
                        <span onClick={()=>leavepage("/register")} className="singUpBtn-link">
                         Sign In
                        </span>
                        </p>
                    </div> 

                </form>
            </div>
          </div>
        
        </div>
    )
}