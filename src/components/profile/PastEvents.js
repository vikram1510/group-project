import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

class PastEvents extends React.Component {
  render() {
    return (
      <div className="profile-page">
        <div className="profile-nav-wrapper">
          <div className="profile-nav">
            <Link to={`/users/${Auth.getPayload().sub}`}>Dashboard</Link>
            <Link to={`/users/${Auth.getPayload().sub}/upcoming-events`}>Upcoming Events</Link>
            <Link to={`/users/${Auth.getPayload().sub}/past-events`}>Past Events</Link>
          </div>
        </div>

        <div className="upcoming-events-wrapper">
          <h1>Past Events</h1>

          <div className="upcoming-events-content">
            <h4>Attended Events</h4>
            <ul>
                ( Event )
            </ul>
          </div>

        </div>

      </div>
    )
  }
}

export default PastEvents