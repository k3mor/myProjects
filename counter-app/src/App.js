import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Counter App in JS</h1>
      </header>
      <Counter initValue={0}/>
      <Counter initValue={50}/>
    </div>
  );
}

export default App;
