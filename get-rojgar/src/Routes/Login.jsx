import { Link,useNavigate } from "react-router-dom";
import {useContext} from "react";
import {useState} from "react";
import {AuthContext} from "../Context/AuthContext";
import Homepage from "../Components/Homepage/Homepage";
import "./login.css"
import {Center} from "@chakra-ui/react"

function Login() {
  const [email,setEmail] =useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading] =useState(false);
  const {loginUser,authState}=useContext(AuthContext);
  const navigate =useNavigate();

  const handleSubmit =(e)=>{
    e.preventDefault();
    setLoading(true);
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({email,password}),
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res.token)
      {
        loginUser(res.token);
        navigate("/Homepage");
      }
    })
    .catch((err)=>{
      console.log(err)
    });
    
  }
  return (
    <Center>
    <div className="login-page">
      <form onSubmit={handleSubmit} >
        <div>
          <label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="email" className="form" />
          </label>
        </div>
        <div>
          <label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}
             className="form"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <a href="/" type="submit" className="subm">
            SUBMIT
          </a>
        </div>
      </form>
      {/* <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div> */}
    </div>
    </Center>
  );
}
export default Login;
