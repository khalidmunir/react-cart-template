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

    // a single source of truth. 
    // we have achieved this by removing the local state of the counter and raising it here.
    // In the Counter THe code was refactored to remve refrences to the state and insted relyed on props
    // Also moved the increment responsibility - raised to the Counters 

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