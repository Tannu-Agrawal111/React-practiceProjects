//COUNT NUMBER OF RENDERING WITHOUT CAUSING RE-RENDERS

import { useEffect, useRef, useState } from "react";

// import { useEffect, useRef, useState } from "react";

// const RefHook = () =>{
//     const myref = useRef(1);
//     const [count , setCount] = useState(0);

//     useEffect(()=>{
//         myref.current++;
//     })

//     return(
//         <div>
//             <br /><hr /><br />
//             <p>value of count is {count}</p>
//             <p>value of re-renders is {myref.current}</p>
//             <button onClick={()=>{setCount(count+1)}}>click me</button>
//         </div>
//     )
// }

// export default RefHook;



//AUTOMATICALLY FOCUS INPUT(accessing dom element)

// const RefHook = ()=>{
//     const myref = useRef();

//     useEffect(()=>{
//         myref.current.focus();
//     },[])

//     return (
//         <div>
//             <br /><hr />
//             <input type="text" ref={myref}/>
//         </div>
//     )
// }

// export default RefHook;



//STORE VALUE OF PREV COUNT WITHOUT RE-RENDER

const RefHook = ()=>{
    const [count , setCount] = useState(0);
    const prevcount = useRef(0);

    useEffect(()=>{
        prevcount.current = count;
    },[count])

    return(
        <div>
            <br /><hr />
            <h1>useref hook</h1>
            <p>value of count is {count}</p>
            <p>value of prevcount is {prevcount.current}</p>
            <button onClick={()=>{setCount(count+1)}}>click</button>
        </div>
    )
}

export default RefHook;