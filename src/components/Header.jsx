import logo from '../images/react-logo.png'

export default function Header() {
    return (
        <header className="header-nav">
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