import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import AxiosPost from "./AxiosPost";
import AxiosGet from "./AxiosGet";


function App() {

  return (
    <>
      {/* <AxiosGet/> */}
      <AxiosPost/>
    </>
  );
}

export default App;
