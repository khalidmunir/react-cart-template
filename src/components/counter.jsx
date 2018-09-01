import React, { Component } from 'react'
class Counter extends Component { 
    state = {
        count: 0,
        listItems: [ /* 'Luke', 'Han', 'Leia', 'Chewy', 'Jabba'*/ ]
    }

    constructor() {
        // have to call the superclass first
        super() 
        console.log(this)
        
    }

    handleIncrement() {

        // this will error out as 'undefined' if you inseact the console - 
        // This is because you dont have access to the 'this' variable as you might see it, 
        // we should use ES6 style arrow functions, thus allowing us to bind this
        // without the cumbersome registering it in the constructor for every class.
        //
        // this is good news for react 16 onwards - :)
        console.log('Increment Clicked' , this)
    }

    render() {
        
        let classes = this.GetBadgeClasses();
        
        return (
            <React.Fragment>
            <span className={ classes }> { this.formattedCount() } </span>
            <button 
                onClick={this.handleIncrement} 
                className='btn btn-secondary btn-sm'>
                Increment
            </button>
            { this.state.listItems.length === 0 && 'Please add items to List'}
            {this.renderList()}


        </React.Fragment>
        )
    }
    
    renderList() {
        if (this.state.listItems.length === 0 ) return <p>There is no List <br />(This is not the list your looking for! :)</p>
        
        return (
            <ul>
                { this.state.listItems.map( item => <li key={item}>{item}</li> ) }
            </ul>
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