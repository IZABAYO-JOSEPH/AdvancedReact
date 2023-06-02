import React from 'react'
import { useState } from 'react'
const ShortCircuits = () => {
   const[text, setText] = useState('') 
   const[name, setName] = useState('Joseph')
   const[user, setUser] = useState({name:'Joseph'})
   const[isEditing,setIsEditing] = useState(true)
  return (
    <div>
        <h4>Truthy and falsy values demo</h4>
        <h5>Note that if conditions never go in jsx)</h5>
       <h6>More understandable when you view the code</h6>
       <h2>{text || 'default Value'}</h2>
       {!text && (
            <div>
                <h2>some content here</h2>
                 <h2>{name}</h2>
            </div>
        )
       }
       {user && <SomeComponent name={user.name} />}
       <h6 style={{margin:'1rem 0'}}>Ternary operator demo: pls check the code</h6>
       <button className="btn">{isEditing?'Edit':'Add'}</button>
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