 import { useState,useEffect } from "react";
 import '../styles/userList.css'
const UserList = () => {
    let[users,setUsers]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:3007/users')
            let data=await response.json()
            setUsers(data)
        }
        fetchData() 
    },[])
    let remove=(id,name)=>{
        setUsers(users.filter(x =>x.id!=id))
        alert(`${name} has been deleted`)
    }
   
    return ( 
        <div className="userlist">
            <h1>User List : {users.length}</h1>
           <div className="user_list1">
           {users.map(data =>(
                <div className="user_card">
                    <h3>{data.name}</h3>
                    <h3>{data.age}</h3>
                    <h3>{data.email}</h3>
                    <h3>{data.phoneNumber}</h3>
                    <button onClick={()=>remove(data.id,data.name)}>Delete</button>
                </div>
                )) }
           </div>
        </div>
     );
}
 
export default UserList;