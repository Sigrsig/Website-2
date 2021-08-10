import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';


import './App.css';
import App from './App';
import Header from './Pages/header.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js'
import Portfolio from './Pages/Portfolio.js';
import Footer from './Pages/footer.js';


class Newindex extends Component {
    render() {
        return (
            <BrowserRouter>
        <div className="page-main">
        
          <Header />
            <div id="main">
              <Switch>
              <Route path="/" component={App} exact/>
              <Route path="/Portfolio" component={Portfolio}/>
              <Route path="/About" component={About}/>
              <Route path="/Contact" component={Contact}/>
              
              <Route component={Error}/>
            </Switch>
            </div>
           <Footer />
        </div> 
      </BrowserRouter>
        )
    }
}

export default Newindex
