import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'

import Home from './components/common/Home'
import EventIndex from './components/events/EventIndex'
import EventShow from './components/events/EventShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/profile/Profile'
import UpcomingEvents from './components/profile/UpcomingEvents'
import PastEvents from './components/profile/PastEvents'
import Navbar from './components/common/Navbar'


class App extends React.Component{


  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar></Navbar>
          <div className="page-structure ">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/events/:id' component={EventShow} />
              <Route path='/events' component={EventIndex} />
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/profile/past-events' component={PastEvents} />
              <Route path='/profile/upcoming-events' component={UpcomingEvents} />
              <Route path='/profile' component={Profile} />
                          
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