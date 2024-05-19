import React from 'react'

function Navbar() {
  return (
    <>
    <div>
      <nav className="container">
        <div className="logo ">
          <img src="/Images/brand_logo.png" alt="logo"></img>
        </div>
        <ul>
          <li href="#">Menu </li>
          <li href="#">About </li>
          <li href="#">Location </li>
          <li href="#">Contact </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  </>
  )
}

export default Navbar
