import React, { useState } from 'react'

const Counter2 = () => {

    const [count,setCount] = useState({gold:0,silver:0,bronze:0})

    function increasegold(){
    //    setCount({gold:count.gold+1,silver:count.silver,bronze:count.bronze})
        setCount({...count,gold:count.gold+1})
    }
    function increaseSilver(){
    //    setCount({gold:count.gold,silver:count.silver+1,bronze:count.bronze})
    setCount({...count,silver:count.silver+1})
    }
    function increaseBronze(){
    //    setCount({gold:count.gold,silver:count.silver,bronze:count.bronze+1})
    setCount({...count,bronze:count.bronze+1})
    }

  return (
    <div>
      <h1>Gold:{count.gold} | Silver:{count.silver} | Bronze:{count.bronze}</h1>
      <button onClick={increasegold}>Increase Gold</button>
      <button onClick={increaseSilver}>Increase Silver</button>
      <button onClick={increaseBronze}>Increase Bronze</button>
    </div>
  )
}

export default Counter2
