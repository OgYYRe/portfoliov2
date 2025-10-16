import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "./Header.css"

export default function Header() {
    return (
        <header id="main-header" className="header">
            <div className="header-left">
                <NavLink to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </NavLink>
            </div>

            <nav>
                <ul>
                    <li><NavLink to="/">Startseite</NavLink></li>
                    <li><NavLink to="/about">Über mich</NavLink></li>
                    <li><NavLink to="/projects">Projekte</NavLink></li>
                    <li><NavLink to="/skills">Fähigkeiten</NavLink></li>
                    <li><NavLink to="/certificates">Zertifikate</NavLink></li>
                </ul>
            </nav>

            <div className="language-switch">
                <button>DE</button> | <button>EN</button>
            </div>
        </header>
    );
}
