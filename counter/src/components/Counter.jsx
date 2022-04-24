import { useState } from "react";


const Counter = ()=>{
    const [counter,setCounter]= useState(0);
    function handleCounter(value){
        
        setCounter(counter+value);
    }

    return (
        <div>
            <h1 className={counter%2==0?"green":"red"}>{counter}</h1>
            <button onClick={()=>{
                handleCounter(+1)
            }}>increment</button>
            <button onClick={()=>{
                handleCounter(-1)
            }}>decrement</button>
            <button onClick={()=>{
                handleCounter(+2)
            }}>double</button>
        </div>
    )
}

export{Counter};