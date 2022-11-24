
import './App.css';
import Tabla from './components/Tabla';
import Buscador from './components/Buscador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Buscador />
        <Tabla />
      </header>
    </div>
  );
}

export default App;
