import logo from '../logo.svg';
import '../styles/Header.css';

export default function Header(props) {
    return (
        <header className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="app-name">Pantry</h1>
        </header>
    )
}
