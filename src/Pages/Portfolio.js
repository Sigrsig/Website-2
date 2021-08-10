import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import asteroids from '../img/codeEx/asteroidslap.png'
import bubble from '../img/codeEx/bubbletlap.png'
import kojima from '../img/codeEx/kojimalap.png'
import vaktin from '../img/codeEx/vaktinpho.png'
import trello from '../img/codeEx/trello.png'

import Header from './header';
import Footer from './footer';
import {Link} from 'react-router-dom'

function Portfolio() {
  

  return (
    <div>
      <div className="full-page">
      <Header />
    <div className="portfpg container">
        <h1>My Projects</h1>

      <div className="project row">
          <div className="description col-sm-6">
            <h2>The Kojima Name Generator</h2>
            <p>A interactive form helping you realize your name based on games made by Hideo Kojima. Based on a video made by Brian David Gilbert</p>
            <p>Created with React</p>
            <Link className="ex-link" to="/kojima">Try App</Link>
          </div>
          <div className="image col-sm-6">
            <img src={kojima} className="laptop-pic" alt="A laptop"></img>
          </div>
      </div>

      <div className="project row">
          <div className="description col-sm-6">
            <h2>Planner App</h2>
            <p>Working copy of a Trello planner board</p>
            <p>Created in React</p>
            <Link className="ex-link" to="/Planner">Try App</Link>
          </div>
          <div className="image col-sm-6">
            <img src={trello} className="laptop-pic" alt="A laptop"></img>
          </div>
      </div>

      <div className="project row">
          <div className="description col-sm-6">
            <h2>Bubble Trouble</h2>
            <p>A bubble Trouble style game, made for a game development course</p>
            <a href="https://notendur.hi.is/~eas20/tol308G/bubbletrouble/week3/" className="ex-link">Play</a>
          </div>
          <div className="image col-sm-6">
            <img src={bubble} className="laptop-pic" alt="A laptop"></img>
          </div>
      </div>

      <div className="project row">
          <div className="description col-sm-6">
            <h2>Vaktin</h2>
            <p>A shift scheduling app for hospitals in Android. Final group project for the department of Computer Science in the University of Iceland</p>
            <a href="https://github.com/Sigrsig/VaktinFinal" className="ex-link">Code</a>
          </div>
          <div className="image col-sm-6">
            <img src={vaktin} className="laptop-pic" alt="A laptop"></img>
          </div>
      </div>

      <div className="project row">
          <div className="description col-sm-6">
            <h2>Asteroids</h2>
            <p>An Asteroids style game, made for a game development course</p>
            <a href="https://github.com/Sigrsig/Asteroids" className="ex-link">Code</a>
          </div>
          <div className="image col-sm-6">
            <img src={asteroids} className="laptop-pic" alt="A laptop"></img>
          </div>
      </div>

      
    </div>
    </div>
    <Footer />
    </div>
  );
}

export default Portfolio;
