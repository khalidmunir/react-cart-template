import React, { Component } from 'react'

import Counter from './counter'
class Counters extends Component {
    constructor() {
        super()
        console.log("LIFECYCLE CHECK: CounterS Constructor")
    }

    componentWillMount() {
        console.log("LIFECYCLE CHECK: CounterS ComponentWillMount")
    }

    componentDidMount() {
        console.log("LIFECYCLE CHECK: CounterS componentDidMount")
    }

    render() {

        console.log("LIFECYCLE CHECK: CounterS Render()-method-called")

        const { onReset, counters, onDelete, onIncrement } = this.props

        return (
            <div>
                <button 
                    onClick={onReset}
                    className='btn btn-primary btn-sm m-2'>
                    Reset
                </button>
                { counters.map( counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete} 
                        onIncrement={onIncrement}
                        counter={counter}>
                    </Counter>
                ))}    
            </div>
        )
    }
}

export default Counters;