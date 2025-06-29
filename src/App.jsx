import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Board from './components/board'

function Square({ value, onSquareClick, textColour }) {
  return <button
    className='square border-2 aspect-square  p-3 border-white text-3xl font-bold text-center min-h-14 text-green-300 justify-center flex items-center'
    onClick={onSquareClick}

  >
    {value}
  </button>
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [textColour, setTextColour] = useState("green-300")
  
  function handleClick(i) {
    if (squares[i] || calculateWineer(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  function resetBoard(){
    setSquares(squares)
  }
  const winner = calculateWineer(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = "Next Player: " + (xIsNext ? 'X' : 'O')
  }

  

  return (
    <>
      <div className='game'>
        <div className=' bg-slate-950 w-screen h-screen flex flex-col justify-center items-center'>
        <div className='Status text-white mb-2 text-shadow-sky-300 text-shadow-2xs'> {status} </div>
        <div className="board-row flex flex-row">
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)} />
          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
          />
        </div>
        <div className="board-row flex flex-row">
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
          />
        </div>
        <div className="board-row flex flex-row">
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
          />
        </div>
        <button className=' text-white font-bold'
          onClick={()=>resetBoard}
        > PlayAgain  </button>
        </div>
      </div>
    </>
  )
}

function calculateWineer(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 5]
  ];

  for (let i = 0; i < lines.length - 1; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}