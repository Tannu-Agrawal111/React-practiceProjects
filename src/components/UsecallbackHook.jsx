//suppose passing a function from this parent component to child component
//memoise the function using usecallback hoook to prevent unnecessary re-render

import { useCallback, useState } from "react";


const CallbackHook = () =>{
    const [count , setcount] = useState(0);
    
    //if written like below , then change in count will unnecessary create a new function , due to which child component will also be rendering unnecessary

    // function handleClick(){
    //     console.log("clicked")
    // }
    
    const handleClick = useCallback(()=>{
        console.log("clicked")
    },[]) //runs only for 1st rendering

    return (
        <div>
            {/* <Child onclick={handleClick}/> */}
            <button onClick={()=>{setcount(count+1)}}>click</button>
        </div>
    )
}

export default CallbackHook;