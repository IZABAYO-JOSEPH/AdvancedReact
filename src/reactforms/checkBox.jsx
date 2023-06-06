import React,{useState} from 'react'

const CheckBox = () => {
   const [shipping,setShipping] = useState(false)
   const handleShipping = (e)=>{
    console.log(e.target.checked)
    setShipping(e.target.checked)
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
  <input type="checkbox"name="framework" id="framework" ></input>
       </div>
    <button type='submit' className='btn btn-block'>Submit</button>
    </form>
  )
}

export default CheckBox