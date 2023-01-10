import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumdnailsUrl
    let [title,setTitle]=useState("")
    let [authors,setAuthor]=useState("")
    let [categories,setCategory]=useState("")
    let [pageCount,setPage]=useState("")
    let [shortDescription,setsd]=useState("")
    let [longDescription,setlongDes]=useState("")
    let [thumbnailUrl,setThumbnail]=useState("")

    let navigate=useNavigate()

    let handleSubmit = (e) =>{
      e.preventDefault();
      //DATA TO BE POSTED
      let bookData={title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}
      
        //PO-STING TO SERVER 
        fetch('http://localhost:3004/books',{
         method:'POST',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify(bookData)
        })
        alert('book added successfully')
        navigate('/admin/book-list')
    }
        return ( 
        <div className="addbook">
          <h1>Add a Book</h1>
          <div className="form">
            <form action="" onSubmit={handleSubmit}>
                <div className="title">
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" required placeholder="title of the book" />
                </div>
                <div className="authors">
                <input value={authors} onChange={(e)=>setAuthor(e.target.value)} type="text" required placeholder="author of the book" />
                </div>
                <div className="categories">
                <input value={categories} onChange={(e)=>setCategory(e.target.value)} type="text" required placeholder="category of the book" />
                </div>
                <div className="pageCount">
                <input value={pageCount} onChange={(e)=>setPage(e.target.value)} type="number" required placeholder="count of pages " />
                </div>
                <div className="shortDescription">
                <textarea value={shortDescription} onChange={(e)=>setsd(e.target.value)} required placeholder="short description" cols="30" rows="10"></textarea>
                </div>
                <div className="longDescription">
                <textarea value={longDescription} onChange={(e)=>setlongDes(e.target.value)} required placeholder="long description" cols="30" rows="10"></textarea>
                </div>
                <div className="thumbnailUrl">
                <input value={thumbnailUrl} onChange={(e)=>setThumbnail(e.target.value)} type="text" required placeholder="image of the book" />
                </div>
                <button className="addbook">Add Book</button>
            </form>
          </div>
        </div>
     );
}
 
export default AddBook;
