import './App.css';
import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import TestComponent from './Components/TestComponent';


function App() {
  const [eventRequests, setEventRequests] = useState([])

  function handleNewRequest(request) {
    console.log(request)
  }

  function handleTestClick() {
    console.log('hello')
  }
  return (
    <div className="App">
      <TestComponent onClick={handleTestClick}> button </TestComponent>
      <NavBar />
      <Switch>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/gallery'>
          <Gallery />
        </Route>
        <Route exact path='/contact'>
          <Contact onNewRequest={handleNewRequest} />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
