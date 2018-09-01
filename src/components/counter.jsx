import React, { Component } from 'react'
class Counter extends Component { 
    state = {
        count: 0,
        listItems: [  'Luke', 'Han', 'Leia', 'Chewy', 'Jabba' ]
    }

    handleIncrement = (product) => {  
        console.log('Product ', product)
        this.setState( {count: this.state.count + 1 } )
    }

    render() {
        
        let classes = this.GetBadgeClasses();
        
        return (
            <React.Fragment>
            <span className={ classes }> { this.formattedCount() } </span>
            <button 
                // instead make this an inline function
                // shows correctly in the console.
                onClick={() => {
                    this.handleIncrement({ id: 1})
                    
                }} 
                className='btn btn-secondary btn-sm'>
                Increment
            </button>
            { this.state.count === 0 && 'Please Increment the counter'}
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