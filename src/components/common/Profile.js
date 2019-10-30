import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import moment from 'moment'


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
    console.log('upcoming', moment().isBefore(this.state.user.eventsAttend[7].date))
    console.log('attended', moment().isAfter(this.state.user.eventsAttend[7].date - 1))
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
            <table className="u-full-width">
              <thead>
                <tr>
                  <th>Language</th>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Event Status</th>
                </tr>
              </thead>
              <tbody>
                {user.eventsAttend.map((event, i) =>(
                  <tr key={i}>
                    {/* <td className="event-icon">Category icon</td> */}
                    <td className="event-icon">{event.category}</td>
                    <td>{event.name}</td>
                    <td>{moment(event.date).format('MMM Do YYYY')}</td>
                    <td>{moment(event.time,'HH:mm').format('h:mm A')}</td>
                    <td>{moment().isBefore(event.date) ? 'Upcoming Event' : moment().isAfter(event.date) ? 'Attended' : 'Event Today'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      
    )
  }
}

export default Profile

// to={`/events/${event._id}`} - LINK TO RELEVANT SHOW PAGE - when Link is added in the table, it messes everything up. not sure why???