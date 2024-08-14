import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";

function App() {
  return (
    <>
      <Navbar title={'SaloSkilo'} />
      <Textarea heading={'Text-Area'}/>
      <About/>
     
    </>
  );
}

export default App;
