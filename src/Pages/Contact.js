import '../App.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Header from './header';
import Footer from './footer';

function Contact() {
  return (
    <div>
      <div className="full-page">
      <Header />
    <div className="contactpg">
      
      <div id="my-contacts">
      <h2>Sigríður Ösp Green Sigurðardóttir</h2>
			<p> Email: <a href="mailto: siggagreen@gmail.com" id="my-email">siggagreen@gmail.com</a></p>
			<div id="cont-icons">
        <a href="https://github.com/Sigrsig"><FontAwesomeIcon className="cont-icon" icon={faGithub} size="2x" /></a>
        <a href="https://www.linkedin.com/in/sigridur-osp-sigurdardottir/"><FontAwesomeIcon className="cont-icon" icon={faLinkedin} size="2x" /></a>
        <a href="https://www.instagram.com/berlin_and_back_again/"><FontAwesomeIcon className="cont-icon" icon={faInstagram} size="2x" /></a>
			</div>


      </div>
      

    </div>
    </div>
    <Footer />
    </div>
  );
}

export default Contact;
