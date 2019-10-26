import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import './styles/style.scss'

import Home from './components/common/Home'
import EventIndex from './components/events/EventIndex'
import EventShow from './components/events/EventShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/common/Profile'

import Auth from './lib/auth'

class App extends React.Component{
  handleLogout(){
    Auth.logout()
  }

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
              <Link to={`/users/${Auth.getPayload().sub}`}>Profile</Link>
              <Link to='/' onClick={this.handleLogout}>Logout</Link>
              {/* <Link>Settings</Link> */}
            </nav>
          </div>
          <div className="page-structure ">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/events/:id' component={EventShow} />
              <Route path='/events' component={EventIndex} />
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/users/:id' component={Profile} />
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