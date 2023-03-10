import '../styles/Adminnavbar.css'
import { Link } from "react-router-dom";
const AdminNavbar = () => {
    return (
        <div className="adminnavbar">
            <div className="adminportal">
                <h1>AdminPortal</h1>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/admin/" >Dash Board</Link></li>
                    <li> <Link to="/admin/add-book">Add Books</Link>
                    </li>
                    <li>  <Link to="/admin/add-user">Add User</Link>
                    </li>
                    <li> <Link to="/admin/book-list">Book List</Link>
                    </li>
                    <li><Link to="/admin/user-list">User List</Link>
                    </li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>);
}

export default AdminNavbar;