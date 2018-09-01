import React, { Component } from 'react'

import Counter from './counter'


class Counters extends Component {
    state = {
        // Note changing the value does not show on front end (DOM)
        counters: [
            { id: 1, value: 5 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 }
        ]
    }

    render() {
        return (
        <div>
            { this.state.counters.map( counter => (
                <Counter key={counter.id} value={counter.value}>
                    <h4>SomeTitle</h4>
                </Counter>
            ))}    
        </div>
        )
    }
}

export default Counters;