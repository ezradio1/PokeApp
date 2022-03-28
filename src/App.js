import './App.css';
import CustomLayout from './layout/CustomLayout.jsx';
import { WidthProvider } from './context/WidthContext.jsx';
import { PokemonListProvider } from './context/PokemonListContext';
import { MyPokemonProvider } from './context/MyPokemonContext';

function App() {
  return (
    <div className='App'>
      <MyPokemonProvider>
        <PokemonListProvider>
          <WidthProvider>
            <CustomLayout />
          </WidthProvider>
        </PokemonListProvider>
      </MyPokemonProvider>
    </div>
  );
}

export default App;
