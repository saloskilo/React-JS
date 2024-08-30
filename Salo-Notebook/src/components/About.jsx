import React, { useContext,useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'

const About = () => {
  let a = useContext(noteContext);

  useEffect(() => {
   a.update();
  }, [])
  
  return (
    <div>
      This is about {a.state.name}
    </div>
  )
}

export default About
