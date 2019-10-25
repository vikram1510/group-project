import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Map from '../common/Map'

class EventIndex extends React.Component {
  constructor(){
    super()

    this.state = {
      events: null
    }
  }

  componentDidMount() {
    axios.get('/api/events')
      .then(res => this.setState({ events: res.data }))
  }

  render() {
    const { events } = this.state
    if (!events) return null
    return (
      <div>
        {
          events.map(event => (
            <div key={event._id}>
              <Link to={`/events/${event._id}`}><h4>{event.name}</h4></Link>
              <p>{event.description}</p>
            </div>
          ))
        }

        <Map />
        
      </div>

    )
  }
}

export default EventIndex