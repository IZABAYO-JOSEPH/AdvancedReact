import React from 'react'
import { useContext } from 'react'
import { NavBarContext } from './navbar'

const UserContainer = () => {
const {user,logout} = useContext(NavBarContext)
  return (
    <div className='user-container'>
      <p>Hello, {user.name}</p>
      <button className = "btn" onClick={logout}>Logout</button>
    </div>
  )
}
export default UserContainer