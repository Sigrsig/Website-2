import React from 'react';
import './App.css'

import iconPS from './images/icon-ps.png';
import iconHTML from './images/icon-html.png';
import iconCSS from './images/icons8-css3-100.png';
import iconJS from './images/icon-js.png';
import iconPY from './images/icon-py.png';
import iconReact from './images/icon-react.png';
import iconR from './images/icon-r.png';
import iconSQL from './images/icon-sql.png';


const FPLower = (props) => {
    return(
        <div className="fp-lower">
            <h2>Proficiency in</h2>
            <div id="knows">
                <div className="kn-item">
                    <img src={iconHTML}></img>
                    <p>HTML</p>
                </div>
                <div className="kn-item">
                    <img id="smoll" src={iconCSS}></img>
                    <p>CSS</p>
                </div>
                <div className="kn-item">
                <   img src={iconJS}></img>
                    <p>JavaScript</p>
                </div>
                <div className="kn-item">
                    <img src={iconReact}></img>
                    <p>React</p>
                </div>
                <div className="kn-item">
                    <img src={iconSQL}></img>
                    <p>SQL</p>
                </div>
                <div className="kn-item">
                    <img src={iconPY}></img>
                    <p>Python</p>
                </div>
                <div className="kn-item">
                    <img src={iconR}></img>
                    <p>R Studio</p>
                </div>
                <div className="kn-item">
                    <img src={iconPS}></img>
                    <p>Photoshop</p>
                </div>
            </div>
            
        </div> 
        
    );

}

export default FPLower; 