import React, { Component } from 'react'
class Counter extends Component { 
    state = {
        count: 0,
    }

    render() {
        return (
        <React.Fragment>
            <span> { this.formattedCount() } </span>
            <button>Increment</button>
        </React.Fragment>
        )
    }

    formattedCount() {
        return this.state.count === 0 ? 'Its Zero' : this.state.count
    }
}

export default Counter