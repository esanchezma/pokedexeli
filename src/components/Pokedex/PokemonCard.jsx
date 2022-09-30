import axios from 'axios'
import {  useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Stat from './Stat'
import './PokemonCard.css'
import Loading from './Loading'

const PokemonCard = ({url}) => {

  const [poke, setPoke] = useState()
  
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(url)
     .then(res=> setPoke(res.data))
     .catch(err => console.log(err)) 
  }, [url])

 // console.log(poke)
  const handleClick = () => navigate(`/pokedex/${poke.name}`)

  return (
      <div>
        {poke ?(
      <article  onClick={handleClick} className={`card_container bd-${poke?.types[0].type.name}`}>
        <header className={`header_card bg-${poke?.types[0].type.name}`}>
          <img src={poke?.sprites.other["official-artwork"]["front_default"]} alt="" />
        </header>
        <section className='card_body'>
          <h3>{poke?.name.toUpperCase()}</h3>
          <ul className='card_slot'>
          {
            poke?.types.map(slot => (
              <li key={slot.type.url}>{slot.type.name[0].toUpperCase() + slot.type.name.slice(1)}</li>
            ))
          }
          </ul>
        </section>
        <footer>
          <ul className='container_stat'>
            
            <Stat poke={poke}/>
            
          </ul>
        </footer>
      </article>
      ):(
        <Loading/>
      )}
 
      </div>
    )
  }
  
  
  export default PokemonCard