import axios from 'axios'
import React from 'react'
import './Filter.css'
import { useEffect,useState } from 'react'

const Filters = ({setPokemons}) => {

    const [typePokemon, setTypePokemon] = useState()

    const [filterPokemon, setFilterPokemon] = useState()


useEffect(() => {
    const UrlType = `https://pokeapi.co/api/v2/type/`
         axios.get(UrlType)
    .    then(res => setTypePokemon(res.data.results))
}, [])

  useEffect(() => {
        let change = []
        if (filterPokemon){
            // :::::: recorro filter pokemon  :::://            
            for (let i = 0; i < filterPokemon.length; i++) {
                const element = filterPokemon[i].pokemon;
                change.push(element)
            }
        setPokemons(change)
        }
    }, [filterPokemon])


    function getFilter (e){
        axios.get(`https://pokeapi.co/api/v2/type/${e.target.value}`)
        .then(res => setFilterPokemon(res.data.pokemon))
        .catch(err=>console.log(err))
    }
  

  return (
    <select className='filter_options' onChange={getFilter}>
        <option value=''>All Pokemons</option>
        {
            typePokemon?.map(pokemons => (
                <option
                 className='txt-center'
                 value={pokemons.name}
                 key={pokemons.name}>{pokemons.name}
                </option>
            ))
        }
    </select>
  )
}
export default Filters