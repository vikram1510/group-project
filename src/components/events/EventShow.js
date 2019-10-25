import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'

class EventShow extends React.Component{
  constructor(){
    super()

    this.state = {
      event: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    const attending = e.target.checked
    if (attending) this.attendEvent()
    else this.unAttendEvent()

  }

  attendEvent(){
    const eventId = this.props.match.params.id
    axios.post(`/api/events/${eventId}/attend`, {}, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.getEvent())
      .catch(err => console.log(err))
  }

  unAttendEvent(){
    const eventId = this.props.match.params.id
    axios.post(`/api/events/${eventId}/unattend`, {}, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.getEvent())
      .catch(err => console.log(err))
  }

  getEvent(){
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ event: res.data }))
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getEvent()
  }

  isAttending(){
    // console.log('hello', this.state.event.attendees)
    const currentUserId = Auth.getPayload().sub
    return this.state.event.attendees.some( user => user._id === currentUserId)
  }

  render(){
    console.log(this.state)
    const { event } = this.state
    if (!event) return null
    return (
      <div>
        <h1>{event.name}</h1>
        <h3>People Attending</h3>
        <ul>
          {event.attendees.map(attendee => {
            return <li key={attendee._id}>{attendee.username}</li>
          })}
        </ul>
        <label>Attend</label>
        <input type="checkbox" onChange={this.handleChange} checked={this.isAttending()}></input>
      </div>

    )
  }
}

export default EventShow
