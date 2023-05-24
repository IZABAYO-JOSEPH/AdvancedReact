import React, { useState } from 'react'

const ToggleAlert = () => {
    const [showAlert,setShowAlert] = useState(false)

    // const ToggleAlert = ()=>{
    //     if(showAlert){
    //         setShowAlert(false)
    //         return
    //     }
    //     setShowAlert(true)
    // }

    return (
    <div>
        <h4>show alert challenge</h4>
        <button className='btn'onClick={()=>setShowAlert(!showAlert)}>Toggle</button>
        {showAlert &&    <Alert />}
     
    </div>
  )
}
const Alert = () =>{
    return <div className='alert alert-danger'>
        Toggle Challenge Accepted
    </div>
}
export default ToggleAlert