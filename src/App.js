import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo/Titulo';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount';

function App() {

 
  return (

    <div className="App">
      <NavBar />
      <ItemCount />
    </div>

  );
}

export default App;
