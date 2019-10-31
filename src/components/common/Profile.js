import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import moment from 'moment'
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
    // console.log('upcoming', moment().isBefore(this.state.user.eventsAttend[7].date))
    // console.log('attended', moment().isAfter(this.state.user.eventsAttend[7].date))
    return (
      <div className="profile-page">
        
        <div className="profile-bar-wrapper">
          <div className="profile-bar">
            <h2>Welcome back to your profile, {user.username}!</h2>
            <img className="profile-bar-image" src={user.profilePic}></img>
          </div>
        </div>

        <div className="dashboard-wrapper">
          <div className="dashboard-content">

            <div className="your-events">
              <h4>Your Events:</h4>
              <table className="u-full-width">
                <thead>
                  <tr>
                    <th>Language</th>
                    <th>Event</th>
                    <th>Date and Time</th>
                    <th>Event Status</th>
                  </tr>
                </thead>
                <tbody>
                  {user.eventsAttend.map((event, i) =>(
                    <tr key={i}>
                      <td className="event-icon">{event.category}</td>
                      <td>{event.name}</td>
                      <td>{moment(event.date).format('MMM Do YYYY')} @ {moment(event.time,'HH:mm').format('h:mm A')}</td>
                      <td>{moment().isBefore(event.date) ? 'Upcoming Event' : moment().isSame(event.date) ? 'Event Today' : 'Attended'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="your-hosted-events">
              <h4>Events hosted by you:</h4>
              <table className="u-full-width">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Date and Time</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {user.eventsAttend.map((event, i) =>(
                    <tr key={i}>
                      <td>{event.name}</td>
                      <td>{moment(event.date).format('MMM Do YYYY')} @ {moment(event.time,'HH:mm').format('h:mm A')}</td>
                      <td className="profile-buttons">
                        <Link>Edit Event</Link>
                        <Link>
                          <i className="far fa-trash-alt"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
      
    )
  }
}

export default Profile

// to={`/events/${event._id}/edit`}
