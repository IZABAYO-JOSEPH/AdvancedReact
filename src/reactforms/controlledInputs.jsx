import React,{useState} from 'react'

const ControlledInputs = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

// const handleChange = (e)=>{
// setName(e.target.value)
// }

const handleSubmit = (e)=>{
    e.preventDefault()
    // here is where you do something with the variables
    console.log(name, email)
}

  return (
    <form className='form' onSubmit={handleSubmit}>
       <h4>Controlled Inputs</h4>
       <div className='form-row'>
       <label htmlFor='name' className='form-label'>name</label>
       <input type="text" id="name" value = {name}className='form-input'onChange={(e)=>setName(e.target.value)}></input>
       </div>
       <div className='form-row'>
       <label htmlFor='email' className='form-label'>Email</label>
       <input type="email" id="email" className='form-input'value={email} onChange={(e)=>setEmail(e.target.value)}></input>
       </div>
    <button type='button' className='btn btn-block'>Submit</button>
    </form>
  )
}

export default ControlledInputs