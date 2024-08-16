import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [modeBtn, setmodeBtn] = useState('Enable Dark Mode')

  let toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "gray";
      setmodeBtn("Enable Light Mode");
      document.title = ("Text-Utils-Saloskilo DarkMode Enabled");
    } else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      setmodeBtn("Enable Dark Mode")
      document.title = ("Text-Utils-Saloskilo LightMode Enabled");

    }
  }

  // let toggleRedMode = () => {
  //   if (mode === 'light' || mode === 'dark') {
  //     // setmode('red');
  //     document.body.style.backgroundColor = "red";
  //   } else {
  //     setmode('light');
  //     document.body.style.backgroundColor = "white";

  //   }
  // }
  return (
    <>
      <Router>
        <Navbar title={'SaloSkilo'} mode={mode} toggleMode={toggleMode} /* toggleRedMode={toggleRedMode} */ modeBtn={modeBtn} />
        

          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Textarea heading={'Text-Area'} />
            </Route>
          </Switch>

          <Footer toggleMode={toggleMode}/>

       
      </Router>
    </>
  );
}

export default App;
