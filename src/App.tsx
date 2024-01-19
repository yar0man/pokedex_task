import './App.css';
import { Header } from './components/Header/Header';
import { PokemonList } from './components/PokemonList/PokemonList';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <PokemonList />
      </main>
    </div>
  );
}

export default App;
