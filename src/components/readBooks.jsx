import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import BookList from "./bookList";
const ReadBook = () => {
 let[book, setBook]=useState([])
 let params =useParams()
 useEffect(()=>{
    let fetchData = async()=>{
        let response= await fetch(`http://localhost:3004/books/${params.id}`)
        let data=await response.json()
        setBook(data)
    }
    fetchData()
 })
    
    return (  
        <div className="readbook">
           <div className="card">
           <h1>Read Book</h1>
            <h2>{book.title}</h2>
           </div>
           <div className="card_footer">
           <p>{book.shortDescriptions}</p>
           <p>{book.longDescription}</p>
           </div>
        </div>
    );
}
 
export default ReadBook;