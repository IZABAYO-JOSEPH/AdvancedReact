import React,{useState} from 'react'
const frameworks = ['react','nextjs','tailwind']
const CheckBox = () => {
   const [shipping,setShipping] = useState(false)
   const [framework,setFramework] = useState('react')
   const handleShipping = (e)=>{
    console.log(e.target.checked)
    setShipping(e.target.checked)
   }

   const handleFramework = (e) =>{
    setFramework(e.target.value)
   }
  return (
    <form className='form'>
       <h4>Check box input</h4>
       <div className='form-row'style={{textAlign:"left"}}>
       <label htmlFor='shipping' className='form-label'>name</label>
       <input type="checkbox" name="shipping" id="shipping"checked={shipping} onChange={handleShipping}></input>
       </div>
       <div className='form-row'style={{textAlign:'left'}}>
       <label htmlFor='framework' className='form-label'>Email</label>
      <select name="framework" id= "id" value={framework} onChange={handleFramework}>
        {frameworks.map((framework)=>{
            return <option key={framework}>{framework}</option>
        })}
      </select>
       </div>
    <button type='submit' className='btn btn-block'>Submit</button>
    </form>
  )
}

export default CheckBox