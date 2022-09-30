import React from 'react'
import Nav from '../MyNavbar/Nav'
import './Pokedex.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard'
import Search from '../search/Search'
import { useSelector } from "react-redux";
import CardContainer from './CardContainer'
import Filters from '../Filters/Filters'

const Pokedex = () => {

  const userTrainer=useSelector((state)=>state.userTrainer)

  const [pokemons, setPokemons] = useState()

  const [pokemonSearch, setPokemonSearch] = useState()

 // const [typePokemon, setTypePokemon] = useState()

  const [load, setLoad] = useState()



  useEffect(() => {
    const url=`https://pokeapi.co/api/v2/pokemon`
    axios.get(url)
    .then(res=>{
      setPokemons(res.data.results)
      setLoad(false)
    })
    .catch(err=>console.log(err))
  }, [])

console.log(pokemons)
  return (
    <div  className='body-pokedex'>
      <Nav/>
      <div className="saludo">
        <p><span>Welcome {userTrainer},</span>  here you can find all the info about your pokemons</p>
      </div>

      <div className="filt">

        <Search pokemonSearch={pokemonSearch} setPokemonSearch={setPokemonSearch}/>

        <Filters
         setPokemons={setPokemons}
         />

      </div>
      {/* componente CardContainer carga y setea pokemones */}
      <CardContainer
        load={load} 
        setLoad={setLoad} 
        pokemons={pokemons}
        setPokemons={setPokemons}
        pokemonSearch={pokemonSearch}
         />
    
    </div>
  )
}

export default Pokedex