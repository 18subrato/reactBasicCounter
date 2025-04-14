import React, { use, useState } from 'react'


let inititalFruits = ["Apple","Banana","Orange","Mango"];

const Fruit = () => {

    const [fruitlist,setFruitlist] = useState(inititalFruits)
    const [newFruit,setNewfruit] = useState('')
    
    function handleChange(e){
        setNewfruit(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setFruitlist([...fruitlist,newFruit])
    }

    console.log(inititalFruits)
  return (
    <div>
        <h1>Fruits</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>

        <div>
            {fruitlist.map((val,idx)=>{
                return <li key={idx}>{val}</li>
            })}
        </div>

    </div>
  )
}

export default Fruit
