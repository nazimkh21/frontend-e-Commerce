import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Userinfo.css";

export default function Userinfo() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  


  const selectcolor=()=>{
    const hexChars = "0123456789ABCDEF";
    let colorpicked="#";
    for(let i =0;i<6;i++){
        colorpicked += hexChars[Math.floor(Math.random() * 16)];
    }
    return colorpicked;
  }
  const [color,setColor]= useState(()=>{
 return localStorage.getItem("color")  || selectcolor()
  }
    )
 
  useEffect(()=>{
    localStorage.setItem("color",color)
  },[color])

  const handlecolor=()=>{
    setColor(selectcolor())
  }


  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
  }, []);

  return (
    <div className="usercontainer">
      {user ? (
        <>
         
          <div  style={{backgroundColor: color}}  className="circle1"  onClick={handlecolor} >
            {user.username ? user.username[0].toUpperCase() : "?"}
           
          </div>
          <div className="usernames">
            <p>{user.email}</p>
            <h3>Hi {user.username}!</h3>
          </div>
        </>
      ) : (
        <p>Loading user...</p>
      )}

      <button
        className="logoutbtn"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/register");
        }}
      >
        Logout
      </button>
    </div>
  );
}
