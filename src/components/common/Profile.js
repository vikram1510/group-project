import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class Profile extends React.Component {
  constructor() {
    super()

    this.state = {
      user: null
    }
  }

  componentDidMount(){
    axios.get(`/api/users/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ user: res.data }))
  }

  render(){
    console.log(this.state)
    const { user } = this.state
    if (!user) return null
    return (
      <div>
        <h1>Profile</h1>
        <h4>Username: {user.username}</h4>
        <h4>Email: {user.email}</h4>
        <h4>Events Attended</h4>
        <ul>
          {user.eventsAttend.map((event, i) =>(
            <li key={i}>{event.name}</li>
          ))}
        </ul>

      </div>
      
    )
  }
}

export default Profile