//MAKE A STOPWATCH USING useref hook

//we want ki jab bhi start click kre for the 1st time , sirf tabhi timer start ho , bar bar re-rendering pe timer start na ho
//isliye useref hook ka use kar rhe hai timer ka id store karne k liye

import { useEffect, useRef, useState } from "react";

const Stopwatch = ()=>{
    const [seconds , setSec] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
        if(timerRef.current) return; //to avoid timer re-start

        timerRef.current = setInterval(()=>{
            setSec((prev) => {
                return prev+1;
            });
        },1000)
    }

    const stopTimer = () => {
        clearInterval(timerRef.current); 
        timerRef.current = null;
    }

    const reset = () => {
        stopTimer();
        setSec(0);
    }

    //whenever components unmount , cleanup happens
    useEffect(()=>{
        return () => {
            clearInterval(timerRef.current)
        }
    },[])

    return(
        <div>
            <br /><hr />

            <h1>stopwatch</h1>
            <p>{seconds}</p>
            <button onClick={startTimer}>Start</button> <br /><br />
            <button onClick={stopTimer}>Stop</button> <br /><br />
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Stopwatch;