import './App.css';
import Temperature from './components/Temperature.jsx';
import Time from './components/Time.jsx';

function App() {
  return (
    <div className="App">
      <h1>Unit Converter</h1>
      <Temperature />
      <Time />
    </div>
  );
}

export default App;
