import React from 'react'
import './Progress.css'
const Progress = ({pokedeta}) => {

    const subsCountHP = pokedeta?.stats[0].base_stat;
    const subsPercentHP = (subsCountHP*100/150);
  
    const subsCountAT = pokedeta?.stats[1].base_stat;
    const subsPercentAT = (subsCountAT*100/150);

    const subsCountD = pokedeta?.stats[2].base_stat;
    const subsPercentD = (subsCountD*100/150);

    const subsCountS = pokedeta?.stats[3].base_stat;
    const subsPercentS = (subsCountS*100/150);
    
  return (
      <div className="container_statDet">
          <div className="titleMove">
              <h2>Stats</h2>
              <img src="src\assets\img\Vector 9.svg" alt="" />
          </div>
          <div className="container_progre">
          <div className="title_cont">
            <h2>Hp:</h2>
            <h3>{`${subsPercentHP.toFixed()}%`}</h3> 
          </div>
            <div className="progress-bar">
              <span style={{ width: `${subsPercentHP}%` }}></span>
            </div>
            <div className="title_cont">
            <h2>Attack:</h2>
            <h3>{`${subsPercentAT.toFixed()}%`}</h3>
            </div> 
            <div className="progress-bar">
              <span style={{ width: `${subsPercentAT}%` }}></span>
            </div>
            <div className="title_cont">
            <h2>Defense:</h2>
            <h3>{`${subsPercentD.toFixed()}%`}</h3> 
            </div>
            <div className="progress-bar">
              <span style={{ width: `${subsPercentD}%` }}></span>
            </div>
            <div className="title_cont">
                <h2>Speed:</h2>
               <h3>{`${subsPercentS.toFixed()}%`}</h3> 
            </div>
            <div className="progress-bar">
              <span style={{ width: `${subsPercentS}%` }}></span>
            </div>
          </div>
      </div>
  )
}

export default Progress