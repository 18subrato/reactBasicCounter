import React, { useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(0)

    const handleIncrease = () =>{
        setCount(count+1)
    }

    const handleDecrease = () =>{
        setCount(count-1)
    }
    

  return (
    <div className='counter'>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
