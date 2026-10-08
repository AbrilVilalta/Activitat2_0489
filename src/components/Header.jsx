import './Header.css';
import logo from "../assets/logo.webp";

export function Header(){
    return(
        <header>
            <div id="logo">
                <h3>Gallery Games</h3>
            </div>
            <ul className="nav">
                <li>Preferits</li>
                <li>Tots</li>
            </ul>
        </header>
    );
}

export default Header;