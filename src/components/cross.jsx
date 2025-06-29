import React, { useState } from 'react'

const Cross = ({ value,onSquareClick }) => {
  return (
    <button 
        className='sqaures border-2 aspect-square  p-3 border-white text-3xl font-bold text-center min-h-14 text-white justify-center flex items-center'
        
        onClick={onSquareClick}
    >
      {value}
    </button>
  )
}

export default Cross
