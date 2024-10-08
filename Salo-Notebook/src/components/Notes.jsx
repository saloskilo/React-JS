import React, { useContext,useEffect } from 'react'
import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
const Notes = () => {

    const context = useContext(noteContext);
    const { notes, addNote,getNotes } = context;
    console.log(notes);
    useEffect(() => {
      getNotes();
    }, [])
    
    return (
        <>
            <Addnote />
            <div>
                <div className="row my-3">
                    <h2>Your Notes</h2>
                    {notes.map((note) => {
                        return <Noteitem key={note._id} note={note} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Notes
