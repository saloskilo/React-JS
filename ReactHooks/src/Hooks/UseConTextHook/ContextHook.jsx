import React, { createContext } from "react";
import ChildA from "./ChildA";

// Create the context object with an uppercase name
const DataContext = createContext();

const ContextHook = () => {
  const name = "salman ali"; // Context value to be passed

  return (
    <>
      {/* Use the DataContext.Provider component */}
      <DataContext.Provider value={name}>
        <ChildA />
      </DataContext.Provider>
    </>
  );
};

export default ContextHook;
export { DataContext }; // Export the context
