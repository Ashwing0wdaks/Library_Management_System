import AdminNavbar from "./Adminnavbar";
import AdminDashBoard from "./AdminDashBoard";
import { Routes, Route } from "react-router-dom";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBook from "./readBooks";
import AddBook from "./Addbooks";
import AddUser from "./Adduser";
const Adminportal = () => {
    return (
        <div className="Adminportal">
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<AdminDashBoard />} /> {/* path is / coz already the path is in app.js so in this what we have writing should come after /admin/* */}
                <Route path="/book-list" element={<BookList/>} />
                <Route path="/user-list" element={<UserList/>} />
                <Route path="/book-list/:id" element={<ReadBook/>}/>
                <Route path="/add-book" element={<AddBook/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
            </Routes>
        </div>
    )
}
export default Adminportal;