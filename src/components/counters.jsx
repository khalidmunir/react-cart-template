import React, { Component } from 'react'

import Counter from './counter'


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
        console.log('counter', counter)

    }
    // So try this - it might surprise you this does not update the DOM.
    // the state exists in the Counter and also the Counters, so we are missing 
    // a single source of truth. 
    // we can achieve this by removing the local state of the counter and raising it to the Counters.
    // we'll do this for the next commit.
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