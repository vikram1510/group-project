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
          <div className="nav-sidebar" style={{ userSelect: 'none' }}>
            {/* <div className="burger-menu">
              <div></div>
              <div></div>
              <div></div>
            </div> */}

            <nav>
              <div className="nav-top">
                <Link to='/' className="logo">
                  <i className="far fa-handshake"></i>
                  <p><span>tech</span><span>Meet</span></p>
                </Link>
                <Link to='/'>
                  <i className="fas fa-home"></i>
                </Link>
                <Link to='/events'>
                  <i className="fa fa-search"></i>
                </Link>
              </div>         
              <div className="nav-bottom">
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                <Link to={`/users/${Auth.getPayload().sub}`}>Profile</Link>
                <Link to='/'>Settings</Link>
                <Link to='/' onClick={this.handleLogout}>Logout</Link>
              </div>       
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