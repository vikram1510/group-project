import React from 'react'
import { Link } from 'react-router-dom'

class PastEvents extends React.Component {
  render() {
    return (
      <div className="profile-page">
        <div className="profile-nav-wrapper">
          <div className="profile-nav">
            <Link to='/profile/'>Dashboard</Link>
            <Link to='/profile/upcoming-events'>Upcoming Events</Link>
            <Link to='/profile/past-events'>Past Events</Link>
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