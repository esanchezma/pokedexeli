import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { userTrainer } from '../../store/slice/userTrainer.slice'
import './Home.css'

const Home = () => {

  const dispatch=useDispatch()

  const navigate=useNavigate()

 // :::::: Funtion de Submit :::://

  const handleSubmit =  e =>{
    e.preventDefault()

    const inputValue =e.target.name.value.trim()

    if(inputValue.length != 0){
      dispatch(userTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value=''
  };

    
  return (
    <section className='heroPokemon'>
      <div className="heroBody">
       <div className='logoI'>
          <img src="img\image11.svg" alt="" />
       </div>
       <div className='heroTitlePrincipal'>
          <h2>¡Hello Trainer!!</h2>
          <h3>Give me your name to start</h3>
       </div>
       <form onSubmit={handleSubmit}>
          <input id='name' type="text" placeholder='Name..' />
          <button>GO</button>
       </form>
      </div>
      <footer className='footerHero'>
       <div className='fblack'></div>
          <div className='circle'>                 
          <img src="/img/punta-poke.png" alt="" />        
          </div> 
              
       <div className='fblack'>

       <div class="hero__social">
             <a href="https://www.linkedin.com/in/elizabeth-sanchez-02966170/"><i class='bx bxl-linkedin' ></i></a>
             <a href="#"><i class='bx bxl-instagram'></i></a>
             <a href="#"><i class='bx bxl-twitter' ></i></a>
        </div>
        
        
       </div>
      </footer>
    </section>
  )
}

export default Home