import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [list, setList] = useState(["first"]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const addToList = () => {
    if (data !== "") {
      setList([...list, data]);
      setData(""); // Clear the input field
    }
  };

  const removeToDo = (index) => {
    const newList = [...list]; // Create a copy of the list
    newList.splice(index, 1); // Remove the item at the specified index
    setList(newList);
  };

  return (
    <>
      <div className="mainDiv">
        <div>
          <input
            placeholder="Type Something to Add"
            type="text"
            value={data}
            onChange={handleChange}
          />
          <button onClick={addToList}>Add to List</button>
        </div>

        <div>
          <h1>All ToDo</h1>
          <ul>
            {list.map((item, i) => (
              <div className="itemlistDiv" key={i}>
                <li>{item}</li>
                <button onClick={() => removeToDo(i)}>Remove</button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
