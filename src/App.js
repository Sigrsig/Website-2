import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FPLower from './fpLower';
import WorkExamples from './workExamples';
import BgAnimation from './bgAnimation.js';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




function App() {
  

  return (
    
    <div id="home-page">
        <div id="front-page">
            <div id="fp-text">
              <h1>Sigga Ösp</h1>
              <h2 className="min-text">Front End Developer</h2>
              <h2 className="min-text">Based in Berlin, Germany</h2>
            </div>
            
            <BgAnimation />
            <div id="down-arrow"></div>
            
        </div>
            
        
    	      <FPLower />            
            <WorkExamples />
    </div>
      
   
    
  );
}



export default App;
