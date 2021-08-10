import '../App.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer>
      <div id="foot-icons">
        <a href="https://github.com/Sigrsig"><FontAwesomeIcon className="foot-icon" icon={faGithub} size="2x" /></a>
          <a href="https://www.linkedin.com/in/sigridur-osp-sigurdardottir/"><FontAwesomeIcon className="foot-icon" icon={faLinkedin} size="2x" /></a>
          <a href="https://www.instagram.com/berlin_and_back_again/"><FontAwesomeIcon className="foot-icon" icon={faInstagram} size="2x" /></a>
			</div>

      <ul className="nav" id="footer-bar">
                <NavLink className="foot-nav home-butt" to="../">Home</NavLink>
                <NavLink className="foot-nav portfolio-butt" to="/Portfolio">Portfolio</NavLink>
                <NavLink className="foot-nav about-butt" to="/About">About</NavLink>
                <NavLink className="foot-nav contact-butt" to="/Contact">Contact</NavLink>
            </ul>

      <small>&copy; Copyright 2021, Sigríður Ösp Green Sigurðardóttir</small>
    </footer>
    
  );
}

export default Footer
