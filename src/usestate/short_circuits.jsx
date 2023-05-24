import React from 'react'
import { useState } from 'react'
const ShortCircuits = () => {
   const[text, setText] = useState('') 
   const[name, setName] = useState('Joseph')
   const[user, setUser] = useState({name:'Joseph'})
   const[isEditing,setIsEditing] = useState(false)
  return (
    <div>
        <h4>Truthy and falsy values demo</h4>
        <h5>Note that if conditions never go in jsx)</h5>
       <h2>{text || 'default Value'}</h2>
       {!text && (
            <div>
                <h2>some content here</h2>
                 <h2>{name}</h2>
            </div>
        )
       }
       {user && <SomeComponent name={user.name} />}
        </div>
  )
}
const SomeComponent = ({name})=>{
return <div>
    <h2>data from some component</h2>
    <h2>{name}</h2>
</div>
}
export default ShortCircuits