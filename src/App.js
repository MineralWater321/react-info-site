import './App.css';
import logo from './react-logo.png'

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} className="img-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I want to learn React</h1>
      <ol>
        <li>I love React</li>
        <li>It's good for beginners</li>
      </ol>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <small>
        2020 Paler development. All rights reserved.
      </small>
    </footer>
  )
}
export default App;
