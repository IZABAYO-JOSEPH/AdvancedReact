import React, {useState,createContext} from 'react'
import NavLinks from './navlinks'
import { useContext } from 'react'
export const NavBarContext = createContext()

// custom hook
export const useContextHook = () => useContext(NavBarContext)
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