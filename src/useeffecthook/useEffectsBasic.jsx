import React from 'react'
import { useState,useEffect } from 'react'
const UseEffectsBasics = () => {
    const[value,setValue] = useState(0)
    const sayhello=()=>{
        console.log("hello there")
    }
    sayhello();
    useEffect(()=>{
        console.log("hello from use effects hook")
    },[])
  return (
    <div>
        <h4>Use effect hook demo</h4>
        <h1>Value:{value}</h1>
        <button className='btn'onClick={()=>setValue(value + 1)}>Increase</button>
    </div>
  )
}

export default UseEffectsBasics