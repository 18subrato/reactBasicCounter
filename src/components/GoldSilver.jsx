import React, { useState } from 'react'

const GoldSilver = () => {

    const [count,setCount] = useState({
        gold:0,
        silver:0,
        bronze:0,
    })

    function handleGold(){
        // setCount({gold:count.gold+1,silver:count.silver,bronze:count.bronze})
        setCount({...count,gold:count.gold+1})
    }
    function handleSilver(){
        // setCount({gold:count.gold,silver:count.silver+1,bronze:count.bronze})
        setCount({...count,silver:count.silver+1})
    }
    function handleBronze(){
        // setCount({gold:count.gold,silver:count.silver,bronze:count.bronze+1})
        setCount({...count,bronze:count.bronze+1})
    }


  return (
    <div>
        <h1>Gold:{count.gold} || Silver:{count.silver} || Bronze:{count.bronze}</h1>
        <button onClick={handleGold}>Gold</button>
        <button onClick={handleSilver}>Silver</button>
        <button onClick={handleBronze}>Bronze</button>
    </div>
  )
}

export default GoldSilver
