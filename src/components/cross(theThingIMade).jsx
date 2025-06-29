import React from 'react'
import { useState } from 'react'

function cross(){
  const[choice,setValue] = useState(" ")

  function handleClick(){
    setValue('X')
  }
}

const Cross = ({choice, textcolour}) => {
  return (
    <button 
        className='sqaure border-2 aspect-square  px-5 border-white text-xl text-center  text-white items-center flex align-middle'
        style={{color:textcolour,}}
        onClick={cross}
    >
      {choice}
    </button>
  )
}

export default Cross
