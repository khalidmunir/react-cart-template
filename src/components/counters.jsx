import React, { Component } from 'react'

import Counter from './counter'

// Next lets start adding some real structure to the app. 
// currently the Counters id the root element for the app. 
// Lets change this so that we wire back the APP components
// under this we will have a navbar and the counters
// under the Counters will be the Counter.

// Then (maybe you can see this already) we will move the state up to the APP
// and so it may serve some props to the NavBar and the Counters
//
//           ------------
//           |  APP     |  <-- Move State Here
//           ------------
//             /       \
//  ------------       ------------
//  |  NavBar  |       | Counters | 
//  ------------       ------------
//                           |
//                     ------------
//                     | Counter  | 
//                     ------------
//  
class Counters extends Component {


    render() {
        return (
            <div>
                <button 
                    onClick={this.props.onReset}
                    className='btn btn-primary btn-sm m-2'>
                    Reset
                </button>
                { this.props.counters.map( counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={this.props.onDelete} 
                        onIncrement={this.props.onIncrement}
                        counter={counter}>
                    </Counter>
                ))}    
            </div>
        )
    }
}

export default Counters;