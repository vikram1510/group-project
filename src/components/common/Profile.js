import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

class Profile extends React.Component {
  constructor() {
    super()

    this.state = {
      user: null
    }
  }

  componentDidMount(){
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ user: res.data }))
  }

  render(){
    console.log(this.state)
    const { user } = this.state
    if (!user) return null
    return (
      <div className="profile-page">
        <div className="profile-nav-wrapper">
          <div className="profile-nav">
            <Link to={`/users/${Auth.getPayload().sub}`}>Dashboard</Link>
            <Link to={`/users/${Auth.getPayload().sub}/upcoming-events`}>Upcoming Events</Link>
            <Link to={`/users/${Auth.getPayload().sub}/past-events`}>Past Events</Link>
          </div>
        </div>

        <div className="dashboard-wrapper">
          <h1>Profile</h1>

          <div className="dashboard-content">
            <div className="events-attending-wrapper">
              <h4>Events Attending</h4>
              <ul>
                {user.eventsAttend.map((event, i) =>(
                  <li key={i}>{event.name}</li>
                ))}
              </ul>
            </div>
            
            <div className="your-info-wrapper">
              <h3>Your Info</h3>
              <h4>Username: {user.username}</h4>
              <h4>Email: {user.email}</h4>
            </div>

          </div>

        </div>

      </div>
      
    )
  }
}

export default Profile