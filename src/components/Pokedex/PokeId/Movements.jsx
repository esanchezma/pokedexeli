import React from 'react'
import './Movements.css'

const Movements = ({pokedeta}) => {
  return (

    <div className="titleMove">
       <h2>Movements</h2>
      <img src="src\assets\img\Vector 9.svg" alt="" />
      
    <div className='container_movies'>
        <ul className='movies'>
            {pokedeta?.moves.map((move)=>(
                <li className='move' key={move.url}>{move.move.name}</li>
            ))}
        </ul>
    </div>
    </div>
  )
}

export default Movements