import React from 'react'
import axios from 'axios'
import moment from 'moment'

import Auth from '../../lib/auth'

import ShowInput from '../common/showInput'

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
    console.log('show', this.state)
    const { event } = this.state
    if (!event) return null
    console.log(moment(event.date).format('MMM Do YY'))
    return (
      <div className="show-page-wrapper">
        <div className="show-page">
          <h1>{event.name}</h1>
          <div className="date-time">
            <p className="date">{moment(event.date).format('MMM Do YYYY')}</p> 
            <p className="time">{moment(event.time,'HH:mm').format('h:mm A')}</p>
          </div>
          <section>
            <div className="attend-price">
              <div className="attend">
                <input type="checkbox" onChange={this.handleChange} checked={this.isAttending()}></input>
                <label>Attend</label>
              </div>
              <div className="price">
                <p>Price</p>
                <span>£{event.price}</span>
              </div>
            </div>
            <br></br>
            <p>{event.description}</p>
            <br></br>
            <br></br>
            <br></br>
            {/* <ShowInput name="description" value={event.description}></ShowInput> */}
          </section>
          <section>
            <h3>Host</h3>
            <p>{event.hostUser.username}</p>
            <br></br>
            <h3>People Attending</h3>
            <ul>
              {event.attendees.map(attendee => {
                return <li key={attendee._id}>{attendee.username}</li>
              })}
            </ul>
            <p>Location: {event.location}</p>
          </section>
        </div>


      </div>

    )
  }
}

export default EventShow
