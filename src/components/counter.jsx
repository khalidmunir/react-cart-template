import React, { Component } from 'react'
class Counter extends Component { 
    state = {
        count: 0,
    }

    handleIncrement = product => {  
        this.setState( {count: this.state.count + 1 } )
    }

    render() {
        
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
                { this.state.count === 0 && <span className='m-2'>Please Increment the counter [remove this message]</span>}
            </div>

        </React.Fragment>
        )
    }

    GetBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formattedCount() {
        const { count } = this.state
        return count === 0 ? 'Its Zero' : 'Its ' + count
    }
}

export default Counter