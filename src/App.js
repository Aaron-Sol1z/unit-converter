import './App.css';
import Length from './components/Length.jsx';
import Temperature from './components/Temperature.jsx';
import Time from './components/Time.jsx';
import Volume from './components/Volume.jsx';

function App() {
  return (
    <div className="App">
      <h1>Unit Converter</h1>
      <Length />
      <Temperature />
      <Time />
      <Volume />
    </div>
  );
}

export default App;
