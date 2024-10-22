import './App.css';
import Length from './components/Length.jsx';
import Temperature from './components/Temperature.jsx';
import Time from './components/Time.jsx';

function App() {
  return (
    <div className="App">
      <h1>Unit Converter</h1>
      <Length />
      <Temperature />
      <Time />
    </div>
  );
}

export default App;
