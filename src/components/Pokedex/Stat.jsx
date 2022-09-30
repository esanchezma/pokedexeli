import React from 'react'
import './stat.css'

const Stat = ({poke}) => {
  
 // console.log(poke?.stats[0].base_stat)
    return (
      <div className='list-staat'>
        <div className="barra-up">
          <div className="val-stat">
            <div className="val-text">{poke?.stats[0].stat.name.toUpperCase()}</div>
            <div className="val-num">{poke?.stats[0].base_stat}</div>
          </div>
          <div className="val-stat">
            <div className="val-text">{poke?.stats[1].stat.name.toUpperCase()}</div>
            <div className="val-num">{poke?.stats[1].base_stat}</div>
          </div>
          <div className="val-stat">
            <div className="val-text">{poke?.stats[2].stat.name.toUpperCase()}</div>
            <div className="val-num">{poke?.stats[2].base_stat}</div>
          </div>
       
          <div className="val-stat">
            <div className="val-text">{poke?.stats[5].stat.name.toUpperCase()}</div>
            <div className="val-num">{poke?.stats[5].base_stat}</div>
          </div>
          
        </div>
      </div>

  )
}

export default Stat