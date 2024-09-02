import { useState } from 'react'
import noteContext from './NoteContext'


const NoteState = (props) => {

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
  const addNote = (title, description, tag) => {
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
  const deleteNote = () => { }



  // Edit Notes 
  const editNote = () => { }




  const [notes, setnotes] = useState(noteInitial)
  return (<noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
    {props.children}
  </noteContext.Provider>
  )
}

export default NoteState;