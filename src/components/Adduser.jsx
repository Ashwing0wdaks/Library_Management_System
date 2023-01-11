import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../styles/Adduser.css'
const AddUser = () => {
    let[name,setname]=useState("")
    let[age,setAge]=useState("")
    let[email,setemail]=useState("")
    let[phoneNumber,setphn]=useState("")
 let navigate=useNavigate()
let handlesubmit=(e)=>{
e.preventDefault()

let userData={name,age,email,phoneNumber}
fetch('http://localhost:3007/users',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(userData)
   })
   alert('User added successfully')
   navigate('/admin/user-list')

} 
    return ( 
       
         <div className="adduser">
           
            <div className="form">
            <h1>Add a New User </h1>
                <form action="" onSubmit={handlesubmit}>
                    <div className="name">
                        <input className="style" value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Name"/>
                    </div>
                    <div className="age">
                    <input className="style" required value={age} onChange={(e)=>setAge(e.target.value)}  type="number" min={1} placeholder="Age"  />
                    </div>
                    <div className="email">
                    <input className="style" required value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="email"  />
                    </div>
                    <div className="phonenumber">
                    <input className="style" required value={phoneNumber} onChange={(e)=>setphn(e.target.value)} type="tel" minLength={10} maxLength={10} placeholder="phonenumber"  />
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
     
     );
}
 
export default AddUser;