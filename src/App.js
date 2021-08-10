import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import myweblap from './img/codeEx/myweblap.png'

import Header from './Pages/header';
import Footer from './Pages/footer';

function App() {
  return (
    <div className="App">
      <div className="full-page">
      <Header />
        <div className="row intro">
          
          <div className="info-des col-sm-5">
          
            <h1>Hi! I'm <mark className="font-emph">Sigga</mark>. An Icelandic web developer based in Berlin</h1>
            <NavLink className="non-nav-butt" to="/Portfolio"><button className="button" >My Projects</button></NavLink>
          </div>
          <img src={myweblap} id="laptop-pics" alt="A laptop" ></img>

        </div>  
        </div>   
        <Footer /> 
    </div>
  );
}

export default App;
