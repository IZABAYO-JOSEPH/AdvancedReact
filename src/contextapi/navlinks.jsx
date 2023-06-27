import React from 'react'
import UserContainer from './userContainer'

const NavLinks = () => {
  return (
    <div className="nav-container">
        <ul className="nav-links">
            <li>
                <a href='#'>Home</a>
            </li>
            <li>
                <a href='#'>about</a>
            </li>
            <li>
                <a href='#'>Contact</a>
            </li>
        </ul>
        <UserContainer />
    </div>
  )
}

export default NavLinks