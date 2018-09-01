import React, { Component } from 'react'
class Counter extends Component { 
    state = {
        value: this.props.counter.value,
    }

    handleIncrement = product => {  
        this.setState( {value: this.state.value + 1 } )
    }

    render() {
        console.log("this.props", this.props)
        
        let classes = this.GetBadgeClasses();
        return (
            <React.Fragment>
            <div>
                <span className={ classes }> { this.formattedCount() } </span>
                <button 
                    onClick={() => this.handleIncrement({ id: 1})} 
                    className='btn btn-secondary btn-sm'>
                    Increment
                </button>
                <button 
                    onClick={ () => this.props.onDelete(this.props.counter.id)} 
                    className='btn btn-danger btn-sm m-2'>Delete Me</button>

                { this.state.value === 0 && <span className='m-2'>Please Increment the counter [remove this message]</span>}
            </div>

        </React.Fragment>
        )
    }

    GetBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formattedCount() {
        const { value: count } = this.state
        return count === 0 ? 'Its Zero' : 'Its ' + count
    }
}

export default Counter