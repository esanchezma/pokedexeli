import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios'
import Nav from '../../MyNavbar/Nav';
import './PokeId.css'
import Progress from './Progress';
import Movements from './Movements';

const PokeId = () => {

  const { name } = useParams();

  const [pokedeta, setPokedeta] = useState()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
    axios.get(URL)
      .then(res => setPokedeta(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(pokedeta)
    
  return (
    <div>
      <Nav />
      <div className="container_det">
        <header className={`header_det bg-${pokedeta?.types[0].type.name}`}>
          <img src={pokedeta?.sprites.other["official-artwork"]["front_default"]} alt="" />
        </header>
          <div className="det_body">
            <div className="card_id">
              <h2>#{pokedeta?.id}</h2>
            </div>
            <div className="title">
              {pokedeta?.name.toUpperCase()}
            </div>
            <div className="dimensions">
              <div className="weight">
                <h4>Weight</h4>
                <h3>{pokedeta?.weight}</h3>
              </div>
              <div className="height">
                <h4>Height</h4>
                <h3>{pokedeta?.height}</h3>
              </div>
          </div>
          <div className="containerTipA">
            <div className="type">
                <h2>Types</h2>
                    {
                        pokedeta?.types.map(slot => (
                        <li className={`slot bg-${pokedeta?.types[0].type.name}`} key={slot.type.url}>{slot.type.name[0].toUpperCase() + slot.type.name.slice(1)}</li>
                        ))
                    }
            </div>         
            <div className="skills">
                <h2>Skills</h2>
                    {
                        pokedeta?.abilities.map(abilit => (
                         <li  className='abilit'  key={abilit.ability.url}>{abilit.ability.name[0].toUpperCase() + abilit.ability.name.slice(1)}</li>
                          ))
                    }
            </div>
            </div>
           <Progress pokedeta={pokedeta}/>
           <Movements pokedeta={pokedeta}/>
          </div>
      
      </div>
    </div>
  )
}

export default PokeId