import React from 'react'
import ChildB from './ChildB'

const ChildA = (name) => {
  return (
    <>
    <ChildB name={name}/>
    </>
  )
}

export default ChildA