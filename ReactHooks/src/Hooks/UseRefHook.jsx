import {React,useRef,useState} from 'react'

const UseRefHook = () => {

    const [data, setdata] = useState(0);
    // using useRef component does not re-rendor | usestate rerendor component 
    // let a=0;
    let ref = useRef(0);

    function handleClick() {
      ref.current = ref.current + 1;
      alert('You clicked ' + ref.current + ' times!');
    //   console.log(a+1);
      
     

    }

    function handleClick2() {
        
        alert(`You clicked ' ${setdata(()=>data+1)} ' times!`);
        console.log("Rendoring");

      }
    return (
        <>
        
      <button onClick={handleClick}>
        Click me for update the value
      </button>
      <button onClick={handleClick2}>
        Click me for Rendor
      </button>
      </>
    );
}

export default UseRefHook