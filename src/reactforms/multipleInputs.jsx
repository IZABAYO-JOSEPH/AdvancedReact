import React, { useState } from "react";
import { data } from "../data";
const MultipleInput = () => {


    const [user, SetUser] = useState({
        UName:"",
        UMail:"",
        UPassword:"",
    })
    const handleChange = (e)=>{
//   console.log(e.target.name)
//   console.log(e.target.value)
  SetUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
          e.preventDefault()
        console.log(user)
        }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple inputs</h4>
        <div className="form-row">
          <label htmlFor="UName" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="UName"
            
            className="form-input"
          value = {user.UName}
          onChange = {handleChange}
          name="UName"
          ></input>
        </div>
        <div className="form-row">
          <label htmlFor="UMail" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="UMail"
            className="form-input"
            value = {user.UMail}
          onChange = {handleChange}
          name="UMail"
          ></input>
        </div>
        <div className="form-row">
          <label htmlFor="UPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="UPassword"
            className="form-input"
            value = {user.UPassword}
            onChange = {handleChange}
            name="UPassword"
          ></input>
        </div>
        
        
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>

    </div>
  );
};

export default MultipleInput;
