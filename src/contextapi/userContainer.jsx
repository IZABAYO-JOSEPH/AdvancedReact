import React from 'react'
import { useContextHook } from './navbar'

const UserContainer = () => {
const {user,logout} = useContextHook()
  return (
    <div className='user-container'>
      <p>Hello, {user.name}</p>
      <button className = "btn" onClick={logout}>Logout</button>
    </div>
  )
}
export default UserContainer