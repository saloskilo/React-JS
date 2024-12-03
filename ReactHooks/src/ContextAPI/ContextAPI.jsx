import React, { createContext } from "react";
import ChildA from "../ContextAPI/ChildA";

// what is context api
// create, provider, consumer
// how to use it
// is context api also problematic? YES, callback hell
const data = createContext();
const ContextAPI = () => {
  const name = "salman ali";

  return (
    <data.Provider value={name}>
      <ChildA />
    </data.Provider>
  );
};

export default ContextAPI;
export { data };
