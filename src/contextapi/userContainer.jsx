import React from 'react'
const UserContainer = ({user,logout}) => {
  return (
    <div className='user-container'>
      <p>Hello, {user.name}</p>
      <button className = "btn" onClick={logout}>Logout</button>
    </div>
  )
}
export default UserContainer