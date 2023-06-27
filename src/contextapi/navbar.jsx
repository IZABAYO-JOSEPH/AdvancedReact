import React, {useState,createContext} from 'react'
import NavLinks from './navlinks'
export const NavBarContext = createContext()
const Navbar = () => {
const [user,setUser] = useState({name:'joe'})
 const logout = () =>{
    setUser(null)
 }
return (
  <NavBarContext.Provider value={{user,logout}}>

    <nav className= "navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
        </nav>
  </NavBarContext.Provider>
  )
}
export default Navbar