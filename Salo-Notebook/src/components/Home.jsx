import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext';

const Home = () => {

  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  console.log(notes);

  return (
    <div>
      <div className='container my-3'>
        <h2>Add Notes</h2>
        <form className='my-3 '>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <div className="container my-3">
          <h2>Your Notes</h2>
        </div>

        {notes.map((notes) => {
          return notes.title;
        })}
        
      </div>
    </div>
  )
}

export default Home
