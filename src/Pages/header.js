import '../App.css';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png'
import burger from '../img/dropimg.png'

const Header = () => {
    let dropped = 0;

    function menuDrop()  {
        if (dropped === 0){
            dropped++
            document.getElementById("secret-menu").style.display = 'block';
        } else {
            dropped--
            document.getElementById("secret-menu").style.display = 'none';
        }
    }

    return(
        <header className="header">
            <NavLink to="../" ><img id="logo-img" src={logo} alt="A bind rune"></img></NavLink>
            <nav>

                <ul className="nav" id="header-bar">
                    <NavLink className="nav-butt home-butt" to="../">Home</NavLink>
                    <NavLink className="nav-butt portfolio-butt" to="/Portfolio">Portfolio</NavLink>
                    <NavLink className="nav-butt about-butt" to="/About">About</NavLink>
                    <NavLink className="nav-butt contact-butt" to="/Contact">Contact</NavLink>
                    
                </ul>

                <div id="dropdown-nav">
                    <img src={burger} id="burger-time" onClick={menuDrop} alt="Dropdown menu icon"></img>
                    <ul className="nav" id="secret-menu">
                        <NavLink className="nav-butt home-butt sec-butt" to="../" onClick={menuDrop}>Home</NavLink>
                        <NavLink className="nav-butt portfolio-butt sec-butt" to="/Portfolio" onClick={menuDrop}>Portfolio</NavLink>
                        <NavLink className="nav-butt about-butt sec-butt" to="/About" onClick={menuDrop}>About</NavLink>
                        <NavLink className="nav-butt contact-butt sec-butt" to="/Contact" onClick={menuDrop}>Contact</NavLink>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;