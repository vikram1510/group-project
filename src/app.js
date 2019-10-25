import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'

import Home from './components/common/Home'
import EventIndex from './components/events/EventIndex'
import EventShow from './components/events/EventShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/events'>Index</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/events/:id' component={EventShow} />
            <Route path='/events' component={EventIndex} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
          </Switch>
        </main>

      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)