import '../styles/userlogin.css'
import { useNavigate } from "react-router-dom"
const UserLogin=()=>{
    let navigate=useNavigate()
    let login=()=>{
        navigate('/user/')
    }
    return(
        <div className="userlogin">
          <div className="form_container">
            <h1>Login as User</h1>
            <div className="form_input">
                <form action="" onSubmit={login}>
                 <div className="email">
              
                 <input type="email" required  placeholder="email address"/>
                 </div>
                 <div className="password">
                  
                    <input type="password" required placeholder="enter password" />
                 </div>
                 <button >Login</button>
                </form>
            </div>
          </div>
        </div>
    )
}
export default UserLogin;