import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
const Notes = () => {

    const context = useContext(noteContext);
    const { notes, addNote } = context;
    console.log(notes);
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
