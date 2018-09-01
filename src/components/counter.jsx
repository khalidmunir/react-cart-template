import React, { Component } from 'react'
class Counter extends Component { 
    state = {
        count: 0,
        imgSrc: 'https://picsum.photos/200',
    }

    render() {
        return (
        <React.Fragment>
            <img src={ this.state.imgSrc } alt=""/>
            <span> { this.formattedCount() } </span>
            <button>Increment</button>
        </React.Fragment>
        )
    }

    formattedCount() {
        const { count } = this.state
        return count === 0 ? <h1>Its Zero</h1> : count
    }
}

export default Counter