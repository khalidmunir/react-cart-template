import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'

//
//  Check the console for logs showing lifecycle hooks and order they are called
//
class App extends Component {
  constructor() {
    super()
    console.log("LIFECYCLE CHECK: App Constructor")
  }

  componentWillMount() {
    console.log("LIFECYCLE CHECK: App ComponentWillMount")
  }

  componentDidMount() {
    // ideal place to do ajax call 
    // then setState
    console.log("LIFECYCLE CHECK: App componentDidMount")
  }

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
    console.log("LIFECYCLE CHECK: App Render()-method-called")

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
