import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/AdminLogin.css'
const AdminLogin=()=>{
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let navigate = useNavigate()

    let login = (e) =>{
   e.preventDefault()
   let data={email,password}
   if( email == "ashwinks1999@gmail.com" && password == "9164351385ks")
  {
   navigate('/admin/')
  }else{
    alert("invalid credentials")
  }
    }
    return(
        <div className="adminlogin">
          <div className="form_container">
            <h1>Login as Admin</h1>
            <div className="form_input">
                <form action="" onSubmit={login}>
                 <div className="email">
                 <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email address"/>
                 </div>
                 <div className="password">
                    <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter password" />
                 </div>
                 <button className="login">Login</button>
                </form>
            </div>
          </div>
        </div>
    )
}
export default AdminLogin;