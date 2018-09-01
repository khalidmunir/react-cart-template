import React, { Component } from 'react'
class Counter extends Component { 
    state = {
        value: this.props.value,
    }

    handleIncrement = product => {  
        this.setState( {value: this.state.value + 1 } )
    }

    render() {

        // episode: return of the props, check the console
        // this time we should see children in the props
        // Further inspection should show this is a react.element of h4 type 
        console.log("this.props", this.props)
        
        let classes = this.GetBadgeClasses();
        
        return (
            <React.Fragment>
            <div>
                { this.props.children }
                <span className={ classes }> { this.formattedCount() } </span>
                <button 
                    onClick={() => this.handleIncrement({ id: 1})} 
                    className='btn btn-secondary btn-sm'>
                    Increment
                </button>
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