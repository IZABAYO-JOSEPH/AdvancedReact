import React from 'react'
import useToggle from './useToggle'
const ToggleExample = () => {
    const {show, toggle} = useToggle(true)
      return (
    <div>
        <h3>custom hook main setup</h3>
        <button className='btn' onClick={toggle}>toggle</button>
        {show && <h1>some staffs</h1>}
    </div>
   
  )   
}

export default ToggleExample