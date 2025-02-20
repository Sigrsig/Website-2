import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';


import './App.css';
import App from './App';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js'
import Portfolio from './Pages/Portfolio.js';
import KojimaApp from './Pages/kojimaGen/KojimaApp';

import PlannerApp from './Pages/planner/index'



ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
        <div className="page-main">
        
          
            <div id="main">
              <Switch>
              <Route path="/" component={App} exact/>
              <Route path="/Portfolio" component={Portfolio}/>
              <Route path="/About" component={About}/>
              <Route path="/Contact" component={Contact}/> 
              <Route path="/Planner" component={PlannerApp}/>  
              <Route path="/Kojima" component={KojimaApp} />            
              <Route component={Error}/>
            </Switch>
            </div>
           
        </div> 
      </BrowserRouter>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
