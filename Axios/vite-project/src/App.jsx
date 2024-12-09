import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import AxiosPost from "./AxiosPost";
import AxiosGet from "./AxiosGet";
import AxiosPut from "./AxiosPut";
import AxiosDelete from "./AxiosDelete";

function App() {
  return (
    <>
      {/* <AxiosGet/> */}
      {/* <AxiosPost/> */}
      {/* <AxiosPut /> */}
      <AxiosDelete/>
    </>
  );
}

export default App;
