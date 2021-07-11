import './App.css';
import ListCards from './components/Cards/List_Cards';
import Navbar from './components/Navbar/Navbar';
//import Calculos from './components/Cards/Calculos';
//import Cards2 from './components/Cards/Cards2';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ListCards/>
    </div>
  );
}

export default App;

/*function App() {
  return (
    <div className="App">
      <h1 className= "p-1 bg-danger bg-gradient text-warning">TALLER DE POO--FERNANDO MARTINEZ</h1>
      <Calculos/>
      <Cards2/>
    </div>
  );
}

export default App;*/