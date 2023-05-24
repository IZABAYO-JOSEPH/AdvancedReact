import React, { useState } from 'react'
const UserChallenge = () => {
    const[user,setUser] = useState(null)
    const login = ()=>{
        setUser({name: 'joseph'})
    }
    const logout = ()=>{
        setUser(null)
    }
  return (
    <div>
        {user? ( 
        <div> 
        <h2>User Challenge accepted</h2>
        <h4>hello there, {user.name}</h4>
        <button className='btn'onClick={logout}>Logout</button>
        </div>
        ):(<div> 
    <h4>login please</h4>
    <button className='btn'onClick={login}>Login</button>
    </div>)
    }
      
    </div>
  )

}

export default UserChallenge
