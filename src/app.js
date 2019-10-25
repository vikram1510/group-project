import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import './style.scss'

import Home from './components/common/Home'
import EventIndex from './components/events/EventIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <main>
          <div className="nav-sidebar">
            <div className="burger-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/events'>Index</Link>
              <Link to='/register'>Register</Link>
              <Link to='/login'>Login</Link>
            </nav>
          </div>
          <div className="page-structure ">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/events' component={EventIndex} />
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
            </Switch>
          </div>
        </main>

      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)