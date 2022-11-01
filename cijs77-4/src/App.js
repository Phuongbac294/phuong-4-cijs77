import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/home.js';
import Page from './pages/page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <Home />
      <Page />
    </div>
  );
}

export default App;
