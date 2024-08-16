import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import React, { useState } from 'react'


function App() {
  const [mode, setmode] = useState('light');
  const [modeBtn, setmodeBtn] = useState('Enable Dark Mode')

let toggleMode=()=>{
  if (mode==='light') {
    setmode('dark');
    document.body.style.backgroundColor="gray";
    setmodeBtn("Enable Light Mode");
    document.title=("Text-Utils-Saloskilo DarkMode Enabled");
  }else{
    setmode('light');
    document.body.style.backgroundColor="white";
    setmodeBtn("Enable Dark Mode")
    document.title=("Text-Utils-Saloskilo LightMode Enabled");

  }
}
  
let toggleRedMode=()=>{
  if (mode==='light'|| mode==='dark') {
    // setmode('red');
    document.body.style.backgroundColor="red";
  }else{
    setmode('light');
    document.body.style.backgroundColor="white";

  }
}
  return (
    <>
      <Navbar title={'SaloSkilo'} mode={mode} toggleMode={toggleMode} toggleRedMode={toggleRedMode} modeBtn={modeBtn}/>
      <Textarea heading={'Text-Area'}/>
      {/* <About/> */}
     
    </>
  );
}

export default App;
