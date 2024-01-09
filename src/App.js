import './App.css';
import Scientific_Calculator from './components/Scientific-Calculator/Calculator';
import Calculator from './components/Simple-Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator></Calculator>
        <Scientific_Calculator></Scientific_Calculator>
      </header>
    </div>
  );
}

export default App;
