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

    handleDelete = () => {
        console.log("Delete Event Handler Called")
    }

    render() {
        return (
        <div>
            { this.state.counters.map( counter => (
                <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}>
                </Counter>
            ))}    
        </div>
        )
    }
}

export default Counters;