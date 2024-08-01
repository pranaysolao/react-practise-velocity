import { useState } from "react"

export function Counter(){
    const [counter,setCounter]=useState(0)

    function counterIncrementClick(){
        setCounter(counter+1)
    }
    function counterDecrementClick(){
        setCounter(counter-1)
    }
    return(
        <div className="container-fluid">
            <h2>counter :{counter}</h2>
            <br></br>
            <button onClick={counterIncrementClick}>Increament Click</button>
            <br></br>
            <br></br>
            <button onClick={counterDecrementClick}>Decreament Click</button>
        </div>
    )
}