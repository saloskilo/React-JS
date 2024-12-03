import React from "react";
import { useContext } from "react";
import { DataContext } from "./ContextHook";


const childC = () => {
const name = useContext(DataContext);

  return (
    <>
      
        <h1>my name is {name}</h1>
      
    </>
  );
};

export default childC;
