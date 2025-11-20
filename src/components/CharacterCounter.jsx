import React, { useEffect, useState } from 'react'


// count num of characters entered in input

//change doucument title when counter changes

const CharacterCounter = () => {
    const [text , setText] = useState("")
    const [count , setCount] = useState(0);
    
    function handleChange(e){
        setText(e.target.value);
    }

    useEffect(()=>{
        document.title = count;
    },[count])

  return (
    <div>
      <h1>count character</h1>
        <h3>count of text is {text.length}</h3>
      <label htmlFor="text">Enter text</label>
        <input type="text" value={text} onChange={(e)=>{handleChange(e)}}/>
        <br /><br />
        <button onClick={()=>{setCount(count+1)}}>increment cnt</button>
        <br /><br /><hr /> 
    </div>
  )
}

export default CharacterCounter
