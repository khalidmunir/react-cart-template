import React, { Component } from 'react'
class Counter extends Component {
    // In the Counter The code was refactored to remve refrences to the state and insted relyed on props
    // Also moved the increment responsibility - raised to the Counters 
    render() {
        console.log("this.props", this.props)
        
        let classes = this.GetBadgeClasses();
        return (
            <React.Fragment>
            <div>
                <span className={ classes }> { this.formattedCount() } </span>
                <button 
                    onClick={ () => this.props.onIncrement(this.props.counter)} 
                    className='btn btn-secondary btn-sm'>
                    Increment
                </button>
                <button 
                    onClick={ () => this.props.onDelete(this.props.counter.id)} 
                    className='btn btn-danger btn-sm m-2'>Delete Me</button>

                { this.props.counter.value === 0 && <span className='m-2'>Please Increment the counter [remove this message]</span>}
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