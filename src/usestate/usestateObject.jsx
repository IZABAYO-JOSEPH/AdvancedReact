import React from 'react'

const UseStateObject = () => {
    const [person, setPerson] = React.useState({
        name: "izabayo",
        age:23,
        hobby:"money"
    })

    const showG = ()=>{
        // setPerson({name:"Iriza Gaella",age: 22,hobby:'making money'})
           setPerson({...person, name:"iriza gaella"})
    }
  return (
    <>
    <h2>usestate object demo</h2>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>enjoys: {person.hobby}</h3>
    <button className='btn'onClick={showG}>show gaella</button>
    </>
  )
}

export default UseStateObject