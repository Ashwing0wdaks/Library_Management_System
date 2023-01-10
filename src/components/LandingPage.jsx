import { Link } from "react-router-dom";
import '../styles/LandingPage.css'
const LandingPage=()=>{
    return(
        <div className="landingpage">
        <div className="selectLoginType">
        <h1>Library Management System</h1>

      <div className="user_choice">
       <div className="img">
       <img height="100" width="100" src="https://tse1.mm.bing.net/th?id=OIP.jHdLmVpqSjfr2WI0C8mLXwHaHc&pid=Api&P=0" alt="" />
       <img height="100" width="100" src="https://tse1.mm.bing.net/th?id=OIP.jHdLmVpqSjfr2WI0C8mLXwHaHc&pid=Api&P=0" alt="" />
       </div>
      <button className="b1"><Link to='/admin-login' className="admin">Admin Login</Link></button>
        <button className="b2"><Link to='/user-login' className="user">User Login</Link></button>
      </div>
        </div>
        </div>
    )
}
export default LandingPage;