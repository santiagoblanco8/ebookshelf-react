import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo/Titulo';
import NavBar from './components/NavBar/NavBar';

function App() {

  const style = {backgroundColor: 'blue'}

  let condition = true
  
  console.log( `El resultado es: ${ condition ? 'verdadero' : 'falso'}`)

  const array = ['b', 'c', 'd']

  let a = 'a'

  const newArray = [a, ...array]
  console.log(newArray)
  
  const obj= {
    nombre: 'fede',
    apellido: 'Osandon',
    edad: '20'
  }
  

  const { nombre: nom, apellido, edad=15} = obj

  console.log(edad)
  return (

    <div className="App" style= { style } onClick={ ()=>console.log('eBookShelf')} >
      eBookShelf
      <header className="App-header">
        
        <input />
        <NavBar tit='Accion'/>
        <NavBar tit='Comedia'/>
        <NavBar tit='Aventura'/>
        <NavBar tit='Educacion'/>
        <NavBar tit='Terror'/>
        <NavBar tit='Fantasia'/>
  
      
        <input placeholder= 'Ingrese el nombre' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </header>
    </div>
  );
}

export default App;
