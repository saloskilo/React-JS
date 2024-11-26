import UseStateHook from './Hooks/UseStateHook'
import './App.css'
import UseEffectHook from './Hooks/UseEffectHook'
import UseRefHook from './Hooks/UseRefHook'

function App() {

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
</>
  )
}

export default App
