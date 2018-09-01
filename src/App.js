import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'

//  This is the current layout for the State and now we can share 
//  this across many components.
//
//  Currently this is just the NavBar and the Counters. 
//  The Counters then passes this down further to the Counter.
//  The Counter is able to communicate to the State though the events.
//  This is starting to show you Reacts features and common code patterns.
//
//  Next Steps : Looking at the NavBar, it seems an overkill to use a React class
//  when there is no state being used, and were passing the info down as props,
//  also there is no calculations done in the class. This justifies that we should convert 
//  this to a stateless component.
// 
//           ------------
//           |  APP     |  <--  State Resides Here
//           ------------
//             /       \
//  ------------       ------------
//  |  NavBar  |       | Counters | 
//  ------------       ------------
//                           |
//                     ------------
//                     | Counter  | 
//                     ------------
//  
class App extends Component {
  state = {
    counters: [
        { id: 1, value: 5 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 }
    ]
  }

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(counter => counter.id !== counterId)
      this.setState({ counters })
  }

  handleIncrement = (counter) => {
      const counters = [ ...this.state.counters]
      const index = counters.indexOf(counter)
      counters[index] = { ...counter }
      counters[index].value++
      
      this.setState({ counters })
  }

  handleReset = () => {
      const counters = this.state.counters.map(counter => {
          counter.value = 0
          return counter
      })

      this.setState({ counters })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.length} 
          liveCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className='container'>
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
