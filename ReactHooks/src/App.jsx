import UseStateHook from './Hooks/UseStateHook'
import './App.css'
import UseEffectHook from './Hooks/UseEffectHook'
import UseRefHook from './Hooks/UseRefHook'
import ChildA from './PropDrilling/chilldA'

function App() {
let newName="Salman Ali";
  return (
    <>
    <h1>UseState Hook</h1>
    <UseStateHook/>    
    <hr></hr>
    <h1>UseEffect Hook</h1>
    <UseEffectHook/>
    <hr></hr>
    <h1>UseRef Hook</h1>
    <UseRefHook/>
    <hr></hr>
    <h1>Props Drilling</h1>
    <ChildA name={newName}/>
</>
  )
}

export default App
