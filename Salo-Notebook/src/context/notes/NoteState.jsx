import { useState } from 'react'
import noteContext from './NoteContext'


const NoteState = (props) => {

  const host='http://localhost:5173'
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


  const noteInitial = [

    {
      "_id": "66cfda62cdda9d93bf2dad711",
      "user": "66c7eb1110400d7c51d51039",
      "title": "my Title 1",
      "description": "this is description",
      "tag": "title",
      "date": "2024-08-29T02:18:20.812Z",
      "__v": 0
    },
    {
      "_id": "66cfda6ddda39d93bf2dad713",
      "user": "66c7eb1110400d7c51d51039",
      "title": "my Title 2",
      "description": "this is description",
      "tag": "title",
      "date": "2024-08-29T02:18:21.115Z",
      "__v": 0
    },
    {
      "_id": "66cfda6cdda9d93bf2da5d711",
      "user": "66c7eb1110400d7c51d51039",
      "title": "my Title 1",
      "description": "this is description",
      "tag": "title",
      "date": "2024-08-29T02:18:20.812Z",
      "__v": 0
    },
    {
      "_id": "66cfda6ddda9d93bf2dad713",
      "user": "66c37eb1110400d7c51d51039",
      "title": "my Title 2",
      "description": "this is description",
      "tag": "title",
      "date": "2024-08-29T02:18:21.115Z",
      "__v": 0
    }, {
      "_id": "66cfda6cdda9d93bf25dad711",
      "user": "66c7eb1110400d7c51d51039",
      "title": "my Title 1",
      "description": "this is description",
      "tag": "title",
      "date": "2024-08-29T02:18:20.812Z",
      "__v": 0
    },
    {
      "_id": "66cfda6ddda9d934bf2dad713",
      "user": "66c7eb1110400d7c51d51039",
      "title": "my Title 2",
      "description": "this is description",
      "tag": "title",
      "date": "2024-08-29T02:18:21.115Z",
      "__v": 0
    }, {
      "_id": "66cfd2a6cdda9d93bf2dad711",
      "user": "66c7eb1110400d7c51d51039",
      "title": "my Title 1",
      "description": "this is description",
      "tag": "title",
      "date": "2024-08-29T02:18:20.812Z",
      "__v": 0
    },
    {
      "_id": "66cfda6ddda93d93bf2dad713",
      "user": "66c7eb1110400d7c51d51039",
      "title": "my Title 2",
      "description": "this is description",
      "tag": "title",
      "date": "2024-08-29T02:18:21.115Z",
      "__v": 0
    }
  ]
  // Add Notes 
  const addNote =async (title, description, tag) => {
     // API Call 
     const response=await fetch(`${host}/api/notes/addnote`,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjN2ViMTExMDQwMGQ3YzUxZDUxMDM5In0sImlhdCI6MTcyNDU1MzQwOX0.wXvE1iSWjiR4yLIA6zAdJyhegxIRueJAnv3LkzxdCcc'
      },
      body:JSON.stringify({title,description,tag})
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

  // Delete Notes 
  const deleteNote = (id) => {
    console.log("Note Deloeting Tester:"+id);
    const newNote=notes.filter((note)=>{return note._id!==id});
    setnotes(newNote);
   }



  // Edit Notes 
  const editNote = async (id,title,description,tag) => {

    // API Call 
    const response=await fetch(`${host}/api/notes//updatenote/${id}`,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjN2ViMTExMDQwMGQ3YzUxZDUxMDM5In0sImlhdCI6MTcyNDU1MzQwOX0.wXvE1iSWjiR4yLIA6zAdJyhegxIRueJAnv3LkzxdCcc'
      },
      body:JSON.stringify({title,description,tag})
    });
    const json=response.json()

    // Login to Edit in notes 
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id===id) {
        element.title=title;
        element.description=description;
        element.tag=tag;

      }
    }
   }




  const [notes, setnotes] = useState(noteInitial)
  return (<noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
    {props.children}
  </noteContext.Provider>
  )
}

export default NoteState;