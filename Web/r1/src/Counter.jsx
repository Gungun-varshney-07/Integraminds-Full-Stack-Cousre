// import { useState } from "react";

const Counter = (props) => {
    const {buttonLabel, count, updateCount} = props;
    return <>
    <h1>Total Clicks: {count}</h1>
        <button onClick={()=>{updateCount()}} >{buttonLabel}</button>
    </>
}

export default Counter;