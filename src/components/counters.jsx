import React, { Component } from 'react'

import Counter from './counter'

// Next lets start adding some real structure to the app. 
// currently the Counters id the root element for the app. 
// Lets change this so that we wire back the APP components
// under this we will have a navbar and the counters
// under the Counters will be the Counter.

// Then (maybe you can see this already) we will move the state up to the APP
// and so it may serve some props to the NavBar and the Counters
//
//           ------------
//           |  APP     |  <-- Move State Here
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
class Counters extends Component {
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
            <div>
                <button 
                    onClick={this.handleReset}
                    className='btn btn-primary btn-sm m-2'>
                    Reset
                </button>
                { this.state.counters.map( counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={this.handleDelete} 
                        onIncrement={this.handleIncrement}
                        counter={counter}>
                    </Counter>
                ))}    
            </div>
        )
    }
}

export default Counters;