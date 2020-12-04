import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './about.js';
import Contact from './contact.js';




ReactDOM.render(
  <React.StrictMode>

<BrowserRouter>
        <div>
          <div id="hp-gb"></div>
          <Header />
            <Switch>
             <Route path="/" component={App} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
