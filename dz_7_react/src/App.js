import './App.css';
import {Routes, Route} from "react-router-dom"
import MainPage from './Pages/MainPage';
import PokemonInfoPage from './Pages/PokemonInfoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/info' element={<PokemonInfoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
