import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/styles.css';
import Navbar from './components/navbar';
import Home from './components/home';
import ActorsContainer from './components/actorsContainer';
import Actress from './components/actress';
import Films from './components/films';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="Oscars 2020"></Navbar>
        <Route exact path="/" render={() => <Home title="Oscar Winners"></Home>}></Route>
        <Route path="/actors" render = {() => <ActorsContainer title="Best Actors" />} />
        <Route path="/actress" component = {Actress} ></Route>
        <Route path="/films" render ={() => <Films/>}/>
        </div>
    </BrowserRouter>
    

  
  );
}

export default App;
