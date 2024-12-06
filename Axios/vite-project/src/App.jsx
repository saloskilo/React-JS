import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Axios Tutorial</h1>
      {userData.map((data) => {
        return <div key={data.name}>{data.name}</div>;
      })}
    </>
  );
}

export default App;
