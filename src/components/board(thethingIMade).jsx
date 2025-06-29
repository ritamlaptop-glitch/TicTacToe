import React, { useState } from 'react'
import Cross from './cross'

const [ Value,setValue ] = useState(' '); 

function handleClick(){
    setValue('X')
}

const Board = () => {
  return (
    <>
        <div  className='w-screen h-screen flex flex-col justify-center  bg-slate-950 m-0 p-0 items-center'>
            <div className=' flex flex-row'>
                <Cross 
        
                    choice={Value}
                    textcolour={"cyan"}
                    onClick = {handleClick}
                />
                <Cross 
                    choice={2}
                />
                <Cross 
                    choice={3}
                    textcolour={"red"}
                />
            </div>
            <div className=' flex flex-row'>
                <Cross 
                    choice={4}
                />
                <Cross 
                    choice={5}
                />
                <Cross 
                    choice={6}
                />
            </div>
            <div className=' flex flex-row'>
                <Cross 
                    choice={7}
                />
                <Cross 
                    choice={8}
                />
                <Cross 
                    choice={9}
                />
            </div>
        </div>
    </>
  )
}

export default Board
