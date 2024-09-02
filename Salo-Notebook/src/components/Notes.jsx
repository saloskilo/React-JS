import React, {useContext} from 'react'
import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
const Notes = () => {
    
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  console.log(notes);
  return (

    <div>
         <div className="row my-3">
          <h2>Your Notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note.id} note={note}/>
        })}
        </div>
    </div>
  )
}

export default Notes
