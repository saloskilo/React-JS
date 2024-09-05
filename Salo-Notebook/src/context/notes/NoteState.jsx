import { useState } from 'react'
import noteContext from './NoteContext'


const NoteState = (props) => {

  const host = 'http://localhost:3000'
  // const s1 = {
  //     "name": "salman",
  // }
  // const [state, setstate] = useState(s1);
  // const update = () => {
  //     setTimeout(() => {
  //         setstate({
  //             "name": "Ali",
  //         })
  //     }, 1000);
  // }


  const noteInitial = [];
  // Add Notes 
  const addNote = async (title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjN2ViMTExMDQwMGQ3YzUxZDUxMDM5In0sImlhdCI6MTcyNDU1MzQwOX0.wXvE1iSWjiR4yLIA6zAdJyhegxIRueJAnv3LkzxdCcc'
      },
      body: JSON.stringify({ title, description, tag })
    });
    // const json=response.json()

    const note = {
      "_id": "66cfda42cdda9dss93bf2dad711",
      "user": "66c7eb1110400d7c51d51039",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-08-29T02:18:20.812Z",
      "__v": 0
    };
    setnotes(notes.concat(note))
  }

  // Get All Notes 
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjN2ViMTExMDQwMGQ3YzUxZDUxMDM5In0sImlhdCI6MTcyNDU1MzQwOX0.wXvE1iSWjiR4yLIA6zAdJyhegxIRueJAnv3LkzxdCcc'
      },
    });
    const json = await response.json()
    console.log(json);

    setnotes(json)

  }

  // Delete Notes 
  const deleteNote =async (id) => {
    const response = await fetch(`${host}/api/notes//deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjN2ViMTExMDQwMGQ3YzUxZDUxMDM5In0sImlhdCI6MTcyNDU1MzQwOX0.wXvE1iSWjiR4yLIA6zAdJyhegxIRueJAnv3LkzxdCcc'
      },
    
    });
    console.log("Note Deloeting Tester:" + id);
    const newNote = notes.filter((note) => { return note._id !== id });
    setnotes(newNote);
  }



  // Edit Notes 
  const editNote = async (id, title, description, tag) => {

    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjN2ViMTExMDQwMGQ3YzUxZDUxMDM5In0sImlhdCI6MTcyNDU1MzQwOX0.wXvE1iSWjiR4yLIA6zAdJyhegxIRueJAnv3LkzxdCcc'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json()

    // Login to Edit in notes 
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;

      }
    }
  }




  const [notes, setnotes] = useState(noteInitial)
  return (<noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
    {props.children}
  </noteContext.Provider>
  )
}

export default NoteState;