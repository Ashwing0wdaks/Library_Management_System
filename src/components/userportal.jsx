import { Routes,Route } from "react-router-dom";
import UserDashBoard from "./.userdashboard";
import BookList from "./bookList";
import UserNavbar from "./userNavbar";
import ReadBook from "./readBooks";
const UserPortal = () => {
    return ( 
        <div className="userportal">
          <UserNavbar/>
          <Routes>
          <Route path="/" element={<UserDashBoard/>}/>
          <Route path="/book-list" element={<BookList/>}/>
          <Route path="/book-list/:id" element={<ReadBook/>}/>
          </Routes>
          
        </div>
     );
}
 
export default UserPortal;