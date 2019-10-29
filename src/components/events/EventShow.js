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
          <div>
            <h1>{event.name}</h1>
            <div className="attend-price">
              <div className="attend">
                <input id="attend-checkbox" type="checkbox" onChange={this.handleChange} checked={this.isAttending()}></input>
                <label htmlFor="attend-checkbox">
                  <div></div>
                  <span>{this.isAttending() ? 'Attending' : 'Attend'}</span>
                </label>
              </div>
              <div className="price">
                <p>Price</p>
                <span>{event.price === 0 ? 'Free' : `£${event.price}`}</span>
              </div>
            </div>
          </div>
          <div className="date-time">
            <p className="date">{moment(event.date).format('MMM Do YYYY')}</p> 
            <p className="time">{moment(event.time,'HH:mm').format('h:mm A')}</p>
          </div>
          <section>

            <br></br>
            <p>{event.description}</p>
            <br></br>
            <br></br>
            <br></br>
            {/* <ShowInput name="description" value={event.description}></ShowInput> */}
          </section>
          <section>
            <h3>Host</h3>
            <div className="host-profile">
              <div className=" profile">
                <img className="profile" src={event.hostUser.profilePic}></img>
              </div>
              <p>{event.hostUser.username}</p>
            </div>
            <br></br>
            <h3>People Attending</h3>
            <div className="profile attendees-images">
              {event.attendees.map(attendee => {
                console.log(attendee)
                return (
                  <div className="profile" key={attendee._id}>
                    <img className="profile" src={attendee.profilePic}></img>
                  </div>
                )
              })}
            </div>
            <p>Location: {event.location}</p>
          </section>
        </div>


      </div>

    )
  }
}

export default EventShow
