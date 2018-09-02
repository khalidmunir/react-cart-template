import React from 'react'

const NavBar = (props) => {
    console.log("LIFECYCLE CHECK : In NavBar [Stateless Componnet]")
    return (
        <div>
          <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">
                  [Check console for LifeCycle Hooks] Pretend Cart App in React <span className='badge'>{props.liveCounters} / {props.totalCounters}</span>
              </a>
          </nav>
        </div>
      )
}

export default NavBar