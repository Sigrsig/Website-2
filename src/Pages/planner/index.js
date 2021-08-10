import App from './components/App';
import { Provider } from 'react-redux'
import store from './store'
import './styles.css'
import React, { Component } from 'react'

function PlannerApp() {
  
    return (
      <div id="planner-app">
      <React.StrictMode>
    <Provider store={store} >
      <App  />
    </Provider>
  </React.StrictMode>
  </div>
    )
  
}

export default PlannerApp


