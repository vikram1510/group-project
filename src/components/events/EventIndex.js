import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import moment from 'moment'

import Map from '../common/Map'

const animatedComponents = makeAnimated()

class EventIndex extends React.Component {
  constructor(){
    super()

    this.state = {
      events: null,
      showEvents: null,
      filter: {
        category: '',
        location: '',
        date: '',
        price: ''
      },
      checkbox: false
    }

    this.categories = [
      { value: 'javascript', label: 'JavaScript' },
      { value: 'python', label: 'Python' },
      { value: 'php', label: 'PHP' },
      { value: 'java', label: 'Java' },
      { value: 'swift', label: 'Swift' },
      { value: 'c++', label: 'C++' },
      { value: 'sql', label: 'SQL' },
      { value: 'ruby', label: 'Ruby' }
    ]
    
    this.date = [
      { value: 'current', label: 'Current Week' },
      { value: 'month', label: 'This Month' },
      { value: 'all', label: 'All Events' }
    ]

    this.locations = [
      { value: 'london', label: 'London' }
    ]

    this.handleFreeEventClick = this.handleFreeEventClick.bind(this)
    this.handleMultiSelect = this.handleMultiSelect.bind(this)
    
  }

  componentDidMount() {
    axios.get('/api/events')
      .then(res => this.setState({ events: res.data, showEvents: res.data }))
  }

  handleFreeEventClick(e) {
    this.setState({ checkbox: !this.state.checkbox })
    e.target.blur()
  }
  
  handleMultiSelect(selected) {
    const originalEvents = this.state.events
    console.log(originalEvents)
    if (!selected) return this.setState({ showEvents: originalEvents })
    console.log(selected)
    const catSelected = selected ? selected.map(cat => cat.value) : []
    console.log(catSelected)
    const filteredEvents = originalEvents.filter(event => {
      if (!event.category) return null
      return catSelected.includes(event.category.toLowerCase())
    })
    console.log(filteredEvents)
    this.setState({ showEvents: filteredEvents })

  }

  render() {
    console.log(this.state)
    const { events, showEvents } = this.state
    if (!events) return null
    return (
      <div className="index-page">
        <div className="filter-list-wrapper">
          <Select className="category-select" 
            options={this.categories} 
            placeholder="Categories" 
            isMulti 
            components={animatedComponents}
            onChange={this.handleMultiSelect}
            theme={theme => ({
              ...theme,
              // borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#0B3954',
                primary: 'black'
              }
            })}
          />
          <Select className="date-select" options={this.date} placeholder="Date" />
          <button onClick={this.handleFreeEventClick} className={`checkbox-input ${!this.state.checkbox ? 'off' : 'on' }`}>Free Events Only</button>
        </div>
        <div className="list-map-wrapper">
          <div className="event-list">
            {
              showEvents.map(event => (
                <Link to={`/events/${event._id}`} key={event._id} className="event-linktag">
                  <div className="event-wrapper" >
                    <div className="event-text">
                      <div className="event-name">
                        <h4 className="event-name-text">{event.name}</h4>
                      </div>
                      <div className="event-description">
                        <p>{moment(event.date).format('MMM do YYYY')}</p>
                        <p>{moment(event.time, 'HH:mm').format('h:mm A')}</p>
                      </div>
                    </div>
                    <div className="event-thumbnail-image">
                      <i className="fab fa-js-square"></i>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
          <div className="map-wrapper">
            <Map events={showEvents}/>
          </div>
        </div>
      </div>
    )
  }
}

export default EventIndex