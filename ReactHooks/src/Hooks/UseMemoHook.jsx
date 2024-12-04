import React, { useMemo } from 'react';
import { useState } from 'react';

const UseMemoHook = () => {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);


    // function multiplication() {
    //     console.log("i am rendoring without need"); 
    //    return add*10
    // }

    const multiplication= useMemo(()=>{
        console.log("i am rendoring when the value of the add change only"); 
       return add*10
    },[add]);
    
  return (
    <div>
        <span>Multiply: {multiplication}</span><br />
        <button onClick={()=>{setAdd(add+1)}}>Addition</button>
        <span>{add}</span>
        <button onClick={()=>{setSub(sub-1)}}> Subtraction</button>
        <span>{sub}</span>

    </div>
  )
}

export default UseMemoHook