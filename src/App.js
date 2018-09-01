import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counter from './components/counter'
import Counters from './components/counters'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className='container'>
          <Counters/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
