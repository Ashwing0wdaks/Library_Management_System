import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/bookList.css'
import ReadBook from "./readBooks";
const BookList=() =>{
   let [books,setBooks] = useState([])   
   useEffect(()=>{
    let fetchData=async()=>{
        let response= await fetch("http://localhost:3004/books")
        let data= await response.json()
        setBooks(data)
    }
    fetchData()
   },[books])
   //deleting a book
   let remove=(id,title)=>{
      fetch(`http://localhost:3006/books/${id}`,{
         method:'DELETE'
      });
      alert(`${title} will be deleted permanently`)
   }
   let navigate=useNavigate()
   let read=(id)=>{
      navigate(`/admin/book-list/${id}`)
   }
    return( 
        <div className="booklist">
         <h1>Book List</h1>
         <h1>NO. of Books: :{books.length}</h1>
         <div className="books_section">
            {books.map( data =>(
              <div className="layout">
                <div className="img123">
                  <img  src={data.thumbnailUrl} alt="" />
               </div>
              <div className="book_card">
               <h2>Title: {data.title}</h2>
               <hr />
                 <h3>Authors: {data.authors.toString()}</h3>
                 <h3>Category: {data.categories.toString()}</h3>
                 <h4>page count: {data.pageCount}</h4>
                 <button  onClick={()=>read(data.id)}>Read More</button>
                 <button   onClick={()=>remove(data.id,data.title)}>Delete</button>
              </div>
              </div>
            
            ))}
         </div>
        
        </div>
        );
}
export default BookList;