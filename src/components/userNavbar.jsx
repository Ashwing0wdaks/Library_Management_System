import { Link } from "react-router-dom";
const UserNavbar = () => {
    return (  
        <div className="usernavbar">
             <div className="userportal">
                <h1>User Portal</h1>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/user/" >Dash Board</Link></li>
                    <li> <Link to="/user/book-list">Book List</Link>
                    </li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default UserNavbar;