import React from 'react'
import { useEffect,useState } from "react";

const UseEffectHook = () => {
    const [data, setdata] = useState(0);
    useEffect(() => {

    console.log("Component Mounted");
    
    },[data])
    
  return (
    <>
    <h3>VALUE: {data}</h3>
    <button onClick={()=>{setdata(data+1)}}>Update Value</button>
    </>
  )
}

export default UseEffectHook