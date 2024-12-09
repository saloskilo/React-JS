import { useState } from "react";
import React from "react";
import axios from "axios";

const AxiosPost = () => {
  const [data, setdata] = useState({ fname: "", lname: "" });

  function handlechange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  function submitdata(e) {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <label htmlFor="fName">First Name</label>
      <input
        type="text"
        name="fname"
        value={data.fname}
        onChange={handlechange}
      />
      <label htmlFor="lName">Last Name</label>
      <input
        type="text"
        name="lname"
        value={data.lname}
        onChange={handlechange}
      />

      <button onClick={submitdata}>Submit</button>
    </>
  );
};

export default AxiosPost;
