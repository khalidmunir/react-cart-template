import React, { Component } from 'react'
class Counter extends Component { 
    state = {
        count: 0,
        listItems: [ 'Luke', 'Han', 'Leia', 'Chewy', 'Jabba' ]
    }

    render() {
        
        let classes = this.GetBadgeClasses();
        
        return (
            <React.Fragment>
            <span className={ classes }> { this.formattedCount() } </span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
            <ul>
                { this.state.listItems.map( item => <li key={item}>{item}</li>)}
            </ul>
        </React.Fragment>
        )
    }
    
    GetBadgeClasses() {
        // moved out of render method - don't bloat the render function - where possible  
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formattedCount() {
        const { count } = this.state
        return count === 0 ? 'Its Zero' : count
    }
}

export default Counter