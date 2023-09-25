import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddUser() {

  let navigate=useNavigate()

const [user, setUser]=useState({
  first_name:"",
  last_name:"",
  dob:"",
  id_type:"",
  id_number:"",
  gender:""
})

const{first_name,last_name,dob,id_type,id_number,gender}=user

const onInputChange=(e)=>{
  setUser({...user,[e.target.name]:e.target.value});
};

const onSubmit=async (e)=>{
e.preventDefault();
await axios.post("http://localhost:8080/user",user)
navigate("/")
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
         <h2 className="text-center m-4">Register User</h2>
         <form onSubmit={(e)=>onSubmit(e)}>
         <div className="mb-3">
          <label htmlFor="First Name" className='form-label'>
           First Name
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your first name"
          name="first_name"
          value={first_name}
          onChange={(e)=>onInputChange(e)}
          />
         </div>
         <div className="mb-3">
          <label htmlFor="Last Name" className='form-label'>
           Last Name
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your last name"
          name="last_name"
          value={last_name}
          onChange={(e)=>onInputChange(e)}
          />
         </div>
         <div className="mb-3">
          <label htmlFor="DOB" className='form-label'>
           Date of Birth
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your DOB"
          name="dob"
          value={dob}
          onChange={(e)=>onInputChange(e)}
          />
         </div>
         <div className="mb-3">
          <label htmlFor="IDType" className='form-label'>
           ID Type
          </label>
          <select class="form-select" aria-label="Default select example"  onChange={(e)=>onInputChange(e)} >
            <option selected>Open this select menu</option>
            <option name="id_type" value="Aadhar">Aadhar</option>
            <option name="id_type" value="PanCard">Pan Card</option>
            <option name="id_type" value="Passport">Passport</option>
          
           </select>
         </div>
         <div className="mb-3">
          <label htmlFor="ID Number" className='form-label'>
           ID Number
          </label>
          <input
          type={"Number"}
          className="form-control"
          placeholder="Enter your ID Number"
          name="id_number"
          value={id_number}
          onChange={(e)=>onInputChange(e)}
          />
         </div>
         <div className="mb-3">
          <label htmlFor="Gender" className='form-label'>
           Gender
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option name="gender" value={gender}>Male</option>
            <option name="gender" value={gender}>Female</option>
            <option name="gender" value={gender}>Others</option>
            onChange={(e)=>onInputChange(e)}
           </select>
         </div>
         <button type="submit" className="btn btn-outline-success">Submit</button>
         <Link  className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
         </form>
        </div>
      </div>
       
    </div>
  );
}
