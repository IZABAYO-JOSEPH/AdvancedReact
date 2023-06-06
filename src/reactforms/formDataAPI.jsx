import React, { useState } from "react";

const UncontrolledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
      const name = formData.get('Fname')
    //   console.log(name)
    // console.log(formData);
    // console.log([...formData.entries()])
    const newUser = Object.fromEntries(formData)
    console.log(newUser)
    e.currentTarget.reset()
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Form Data API</h4>
      <div className="form-row">
        <label htmlFor="Fname" className="form-label">
          name
        </label>
        <input
          type="text"
          id="Fname"
          className="form-input"
          name="Fname"
        ></input>
      </div>
      <div className="form-row">
        <label htmlFor="Femail" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="Femail"
          name="Femail"
          className="form-input"
          
        ></input>
      </div>
      <div className="form-row">
        <label htmlFor="Fpassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="Fpassword"
          name="Fpassword"
          className="form-input"
        ></input>
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};

export default UncontrolledInputs;
