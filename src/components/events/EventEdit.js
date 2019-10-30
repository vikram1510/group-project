import React from 'react'
import axios from 'axios'
import moment from 'moment'

import Auth from '../../lib/auth'

import ShowInput from '../common/showInput'
import MapShow from '../common/MapShow'

class EventShow extends React.Component{
  constructor(){
    super()

    this.state = {
      event: null,
      commentText: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  commentInput(e){
    this.setState({ commentText: e.target.value })
  }

  submitComment(e) {
    e.preventDefault()
    const eventId = this.props.match.params.id
    axios.post(`/api/events/${eventId}/comments`, { text: this.state.commentText }, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.getEvent())
      .catch(err => console.log(err))
  }

  commentDelete(commentId){
    const eventId = this.props.match.params.id
    axios.delete(`/api/events/${eventId}/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.getEvent())
      .catch(err => console.log(err.response.data))
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
      .then(res => this.setState({ event: res.data, commentText: '' }))
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
          <section className="main">
            <div>
              <div className="title-attend">
                <ShowInput name="description" value={event.value}>{event.name}</ShowInput>
                <div className="event-logo">
                  <img src="../assets/java-white-button.png"></img>
                </div>

              </div>
              <div className="details">
                <div className="attend">
                  <input id="attend-checkbox" type="checkbox" onChange={this.handleChange} checked={this.isAttending()}></input>
                  <label htmlFor="attend-checkbox">
                    <div></div>
                    <span>{this.isAttending() ? 'ATTENDING' : 'ATTEND'}</span>
                  </label>
                </div>

                <div className="info date">
                  <h3>Date</h3>
                  <p>{moment(event.date).format('MMM Do YYYY')}</p>
                </div>
                <div className="info time">
                  <h3>Time</h3>
                  <p>{moment(event.time,'HH:mm').format('h:mm A')}</p>
                </div>
                <div className="info price">
                  <h3>Price</h3>
                  <p>{event.price === 0 ? 'Free' : `£${event.price}`}</p>
                </div>


              </div>
            </div>

            <div className="description">
              <h3>Description</h3>
              <p>{event.description}</p>
            </div>
            <div className="comments-section">
              <h3>Comments</h3>
              <form onSubmit={(e) => this.submitComment(e)}>
                <input type="text" 
                  className="comment-input"
                  value={this.state.commentText}
                  onChange={(e) => this.commentInput(e)}
                  
                ></input>
                <button className={this.state.commentText ? 'active' : ''} type="submit">Send</button>
              </form>
              <div className="comments">
                {event.comments.map(comment => (
                  <div className="comment" key={comment._id}>
                    <div className="comment-profile"><img src={comment.user.profilePic}></img></div>
                    <div className="box">
                      <div className="text-user">
                        <strong className="username">{comment.user.username}</strong>
                        <p>{comment.text}</p>
                      </div>
                      <div className="delete-timestamp">
                        <div className="button-div">
                          <button onClick={() => this.commentDelete(comment._id)}>
                            <i className="far fa-trash-alt"></i>
                          </button></div>
                        <p className="timestamp">{moment(comment.createdAt).fromNow()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <ShowInput name="description" value={event.description}></ShowInput> */}
          </section>
          <section className="side">

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
            <br></br>
            <div className="location">
              <h3>Location</h3>
              <div className="map-location">
                <MapShow event={event}></MapShow>
                <p><i className="fas fa-map-marker-alt"></i>{event.location}</p>
              </div>
            </div>
          </section>


        </div>
      </div>

    )
  }
}

export default EventShow
