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
        // now fix the delete counter and allow react to update the DOM
        const counters = this.state.counters.filter(counter => counter.id !== counterId)
        this.setState({ counters})
    }

    render() {
        return (
            // Adding more attributes to counter might make this parameter list 
            // a little large and unmanagable. 
            // just pass the counter down since it contains everything.
            // i.e. counter={counter} then refactor the Counter code
            <div>
                { this.state.counters.map( counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={this.handleDelete} 
                        counter={counter}>
                    </Counter>
                ))}    
            </div>
        )
    }
}

export default Counters;