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
      <div className="index-page">
        <div className="filter-list-wrapper">
          <h2>FILTER BAR</h2>
          <div className="filters">
            <p>Category</p>
            <p>Location</p>
            <p>Date</p>
            <p>Free Events Only</p>
          </div>
        </div>
        <div className="list-map-wrapper">
          <div className="event-list">
            {
              events.map(event => (
                <Link to={`/events/${event._id}`} key={event._id}>
                  <div className="event-wrapper" >
                    <div className="event-name">
                      <h4>{event.name}</h4>
                    </div>
                    <div className="event-description">
                      <p>{event.description}</p>
                    </div>
                    <div className="event-thumbnail-image">imge</div>
                  </div>
                </Link>
              ))
            }
          </div>
          <div className="map-wrapper">
            <Map />
          </div>
        </div>
      </div>
    )
  }
}

export default EventIndex