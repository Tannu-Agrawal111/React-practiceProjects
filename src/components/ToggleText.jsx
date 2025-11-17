import { useState } from "react"

function ToggleText(){
    const [visible , setVisibility] = useState(true)
    
    function handleClick(){
        setVisibility((prevval) =>{
            return !prevval;
        })
    }

    return (
        <div>
            <p style={{display : visible ? "block" : "none"}}
            >this is the text</p>
            <button onClick={handleClick}>toggle</button>
            <hr />
        </div>
    )
}

export default ToggleText;