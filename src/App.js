
import './App.css';
import logo from './react-logo.png'
function App() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} width='40px' />
        </nav>
      </header>
      <h1>Reasons I love React</h1>
      <ol>
        <li>I love React</li>
        <li>It's good for beginners</li>
      </ol>
      <footer>
        <small>
          2020 Paler development. All rights reserved.
        </small>
      </footer>
    </div>
  );
}

export default App;
