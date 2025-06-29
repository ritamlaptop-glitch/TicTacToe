import React, { useState } from 'react'
import Cross from './cross'



const Board = () => {
    const [squares , setSquares] = useState(Array(9).fill(null))
   
    function handleClick(i){
        const nextSquares = squares.slice();
        nextSquares[i] = "X"
        setSquares(nextSquares);
    }

    return (
    <>
      <div className='board-row'>
        <Cross 
            value={squares[0]} 
            onSquareClick={() => handleClick(0)} />
        <Cross 
            value={ squares[1]}
            onSquareClick={()=>handleClick(1)}
            />
        <Cross 
            value={ squares[2]}
            onSquareClick={()=>handleClick(2)}
            />
      </div>
      <div className="board-row">
        <Cross 
            value={squares[3]} 
            onSquareClick={() => handleClick(3)} />
        <Cross 
            value={squares[4]}
            onSquareClick={() => handleClick(4)} />
        <Cross 
            value={squares[5]}
            onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Cross 
            value={squares[6]}
            onSquareClick={() => handleClick(6)} />
        <Cross 
            value={squares[7]}
            onSquareClick={() => handleClick(7)} />
        <Cross 
            value={squares[8]}
            onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export default Board
