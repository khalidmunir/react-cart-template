import React, { Component } from 'react'
class Counter extends Component {
    constructor() {
        super()
        console.log("LIFECYCLE CHECK: Counter Constructor")
    }
    
    componentWillMount() {
        console.log("LIFECYCLE CHECK: Counter ComponentWillMount")
    }
        
    componentDidUpdate(prevProps, prevState) {
        console.log("LIFECYCLE CHECK: Counter componentDidUpdate")
        console.log("LIFECYCLE CHECK: Counter componentDidUpdate, prevProps", prevProps)
        console.log("LIFECYCLE CHECK: Counter componentDidUpdate, prevState", prevState)
        
    }

    componentDidMount() {
        console.log("LIFECYCLE CHECK: Counter componentDidMount")
    }

    componentWillUnmount() {
        console.log("LIFECYCLE CHECK: Counter componentDidUnmount")
    }

    render() {

        console.log("LIFECYCLE CHECK: Counter Render()-method-called")
        const { counter } = this.props
        
        let classes = this.GetBadgeClasses();
        return (
            <React.Fragment>
            <div>
                <span className={ classes }> { this.formattedCount() } </span>
                <button 
                    onClick={ () => this.props.onIncrement(counter)} 
                    className='btn btn-secondary btn-sm'>
                    Increment
                </button>
                <button 
                    onClick={ () => this.props.onDelete(counter.id)} 
                    className='btn btn-danger btn-sm m-2'>Delete Me</button>

                { counter.value === 0 && <span className='m-2'>Please Increment the counter [remove this message]</span>}
            </div>

        </React.Fragment>
        )
    }

    GetBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formattedCount() {
        const { value: count } = this.props.counter
        return count === 0 ? 'Its Zero' : 'Its ' + count
    }
}

export default Counter