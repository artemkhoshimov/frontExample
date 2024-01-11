import {useState} from "react";
import React from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>increment</button>
        </div>
    )


}
export default Counter