import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token"); // JWT from backend

    if (token) {
      localStorage.setItem("token", token); // store JWT
      navigate("/"); // redirect to profile page
    } else {
      navigate("/register"); // fallback if no token
    }
  }, [navigate]);

  return <div>Logging in with Google...</div>;
}
