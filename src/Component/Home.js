import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {
 
    const [users, setUsers]=useState([])

    useEffect(()=>{
        loadUsers();
    }, []);

    const loadUsers = async()=>{
        const result= await axios.get("http://localhost:8080/users");
        console.log(result.data);
        setUsers(result.data);
    }

    const deleteUser =async (id)=>{
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers()
  }

  return (
    <div className="container">
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">ID Card</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user)=>
        (
    <tr>
      <th scope="row" ><button type="button" class="btn btn-link">{user.id}</button></th>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>XXXXXXXX{user.id_number.substr(user.id_number.length-4)}</td>
      <td><button class="btn btn-link"onClick={()=>deleteUser(user.id)}><img src="./Delete.png"  width="30" height="24"/></button></td>
    </tr>
        )
        )
    }
    
    
  </tbody>
</table>
<Link className='btn btn-outline-primary' to="/adduser">Create User</Link>
        </div>

    </div>
  )
}
