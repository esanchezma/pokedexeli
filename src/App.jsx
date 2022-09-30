import './style.css'
import {HashRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './components/Home/Home'
import Pokedex from './components/Pokedex/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import PokeId from './components/Pokedex/PokeId/PokeId'
import Settings from './components/Settings/Settings'
import { useSelector } from "react-redux";

function App() {
//para trer el estado de redux
  // const isDark = useSelector((state) => state.isDark)
  // document.body.style= {background: isDark ? 'black' : 'white'}

  return (
    <HashRouter>
      <div className="App">       
        <Routes>     
          <Route path='/' element={<Home/>}/> 
          <Route path='/settings' element={<Settings/>}/>         
          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>}/>
            <Route path='/pokedex/:name' element={<PokeId/>}/>
          </Route>          
        </Routes>        
      </div>
    </HashRouter>
   );
}

export default App
