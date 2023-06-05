import React, { useState } from "react";
import { data } from "../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const UpdatedUsers = [...users, newUser];
    setUsers(UpdatedUsers);
    console.log(UpdatedUsers)
    setName("");
  };
  const removeUser = (id)=>{
    const result  = users.filter((user)=>user.id !== id)
      setUsers(result)
    
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="UserName" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="UserName"
            value={name}
            className="form-input"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
      {/* render users here */}

      <h2>Users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={()=>removeUser(user.id)} className="btn">remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default UserChallenge;
