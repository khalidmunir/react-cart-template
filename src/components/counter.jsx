import React, { Component } from 'react'
class Counter extends Component { 
    state = {
        count: 0,
    }

    render() {
        
        // moved common labels for better readability
        let classes = 'badge m-2 badge-'
        classes += (this.state.count === 0) ? 'warning' : 'primary'

        return (
        <React.Fragment>
            <span className={ classes }> { this.formattedCount() } </span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
        </React.Fragment>
        )
    }

    formattedCount() {
        const { count } = this.state
        return count === 0 ? 'Its Zero' : count
    }
}

export default Counter