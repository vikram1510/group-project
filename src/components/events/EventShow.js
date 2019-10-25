import React from 'react'
import axios from 'axios'

class EventShow extends React.Component{
  constructor(){
    super()

    this.state = {
      event: null
    }
    this.attendEvent = this.attendEvent.bind(this)
  }

  componentDidMount(){
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ event: res.data }))
  }



  render(){
    console.log(this.state)
    const { event } = this.state
    if (!event) return null
    return (
      <div>
        <h1>{event.name}</h1>
        <ul>
          {event.attendees.map(attendee => {
            return <li key={attendee._id}>{attendee.username}</li>
          })}
        </ul>
        <button onClick={this.attendEvent}>Attend</button>
      </div>

    )
  }
}

export default EventShow
