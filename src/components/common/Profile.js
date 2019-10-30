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
    return (
      <div className="profile-page">
        <div className="profile-bar-wrapper">
          <div className="profile-bar">
            <h2>Welcome back to your profile, {user.username}!</h2>
            {/* <img className="profile-bar-image" src={user.profilePic}></img> */}
            <p>Image</p>
          </div>

        </div>

        <div className="dashboard-wrapper">

          <div className="dashboard-content">
            <div className="events-wrapper">
              <h2>Events Attending</h2>
              {user.eventsAttend.map((event, i) =>(
                <div className="event-wrapper" key={i}>
                  <div className="event-icon">Category icon</div>
                  <div className="event-summary">
                    <h4>{event.name}</h4>
                    <p>{moment(event.date).format('MMM do YYYY')} at {moment(event.time, 'HH:mm').format('h:mm A')}</p>
                    <p>{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="events-wrapper">
              <h2>Past Events</h2>
              {user.eventsAttend.map((event, i) =>(
                <div className="event-wrapper" key={i}>
                  <div className="event-icon">Category icon</div>
                  <div className="event-summary">
                    <h4>{event.name}</h4>
                    <p>{event.date} at {event.time}</p>
                    <p>{event.location}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
      
    )
  }
}

export default Profile