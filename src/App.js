import './App.css';
import CustomLayout from './layout/CustomLayout.jsx';
import { WidthProvider } from './context/WidthContext.jsx';
import { PokemonListProvider } from './context/PokemonListContext';

function App() {
  return (
    <div className='App'>
      <WidthProvider>
        <PokemonListProvider>
          <CustomLayout />
        </PokemonListProvider>
      </WidthProvider>
    </div>
  );
}

export default App;
