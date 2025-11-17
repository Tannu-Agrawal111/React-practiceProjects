import { useState } from "react"
function Counter(){
    const [count , setCount] = useState(0);
    function increase(){
        setCount(count+1);
    }

    // react state changes is asynchronous , so it is better to use prev state value to update current state value

    // also react does shallow comparison , so when there is change in value , and in case there is change in reference of obj and arrays , then only react re-renders the component

    function decrease(){
        setCount((prevval) =>{
            return prevval-1;
        });
    }

    return (
        <div>

            <button>{count}</button>
            <button onClick={()=>{increase()}}>inc</button>
            <button onClick={()=>{decrease()}}>dec</button>
            <hr />
        </div>
    )
}

export default Counter;