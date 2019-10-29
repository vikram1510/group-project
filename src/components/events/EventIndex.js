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
        category: [],
        date: {
          value: 'all'
        },
        price: []
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
      { value: 7, label: 'Next 7 Days' },
      { value: 30, label: 'Next 30 Days' },
      { value: 'all', label: 'All Events' }
    ]

    this.locations = [
      { value: 'london', label: 'London' }
    ]

    this.handleFreeEventClick = this.handleFreeEventClick.bind(this)
    this.handleMultiCatergorySelect = this.handleMultiCatergorySelect.bind(this)
    // this.handleDateSelect = this.handleDateSelect.bind(this)
    
  }

  componentDidMount() {
    axios.get('/api/events')
      .then(res => this.setState({ events: res.data }))
  }

  handleFreeEventClick(e) {
    this.setState({ checkbox: !this.state.checkbox })
    e.target.blur()
  }

  filteredEvents() {
    const selectedCategory = this.state.filter.category ? this.state.filter.category.map(cat => cat.value) : []
    console.log(selectedCategory)
    const selectedPeriod = this.state.filter.date.value
    console.log(selectedPeriod)
    return this.state.events.filter(event => {
      const endDate = moment().add(selectedPeriod, 'days')
      if (selectedCategory.length === 0 && selectedPeriod === 'all')  return true
      if (selectedCategory.length === 0) return moment(event.date).isBetween(moment(), endDate)
      console.log('hit')
      if (selectedPeriod === 'all') return selectedCategory.includes(event.category.toLowerCase())
      const catFilter = selectedCategory.includes(event.category.toLowerCase())
      const dateFilter = moment(event.date).isBetween(moment(), endDate)
      console.log('im here', catFilter, dateFilter, moment(event.date).format('DD - MM - YYYY'))
      // if (!event.category || !event.date) return true
      return catFilter && dateFilter
    })
  }
  
  handleMultiCatergorySelect(selected, action) {
    console.log('action name', action.name)
    this.setState({ filter: { ...this.state.filter, [action.name]: selected } }) 
    console.log('selected', selected)
    // const originalEvents = this.state.events
    // console.log(originalEvents)
    // if (!selected) return this.setState({ showEvents: originalEvents })
    // if (selected.length === 0) return this.setState({ showEvents: originalEvents })
    // const catSelected = this.state.filter.category ? selected.map(cat => cat.value) : []
    // console.log('catSelected', catSelected)
    // const filteredEvents = originalEvents.filter(event => {
    //   if (!event.category) return null
    //   if (catSelected.length === 0 && !Number(this.state.filter.date)) {
    //     console.log('none')
    //   }
    //   if (catSelected.length > 0 && Number(this.state.filter.date)) {
    //     console.log('cat + num')
    //     // return catSelected.includes(event.category.toLowerCase()) && 
    //   } else {
    //     console.log('')
    //   }
    // })

    // console.log('filt', filteredEvents)
    // this.setState({ showEvents: filteredEvents })
  }


  render() {
    console.log(this.state)
    const { events } = this.state
    if (!events) return null
    return (
      <div className="index-page">
        <div className="filter-list-wrapper">
          <Select className="category-select"
            options={this.categories} 
            placeholder="Categories" 
            isMulti 
            components={animatedComponents}
            onChange={this.handleMultiCatergorySelect}
            theme={theme => ({
              ...theme,
              // borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#0B3954',
                primary: 'black'
              }
            })}
            name="category" 
          />
          <Select className="date-select" name="date" options={this.date} placeholder="Date" deafultValue={this.date[2]} onChange={this.handleMultiCatergorySelect} />
          <button onClick={this.handleFreeEventClick} className={`checkbox-input ${!this.state.checkbox ? 'off' : 'on' }`}>Free Events Only</button>
        </div>
        <div className="list-map-wrapper">
          <div className="event-list">
            {
              this.filteredEvents().map(event => (
                <Link to={`/events/${event._id}`} key={event._id} className="event-linktag">
                  <div className="event-wrapper" >
                    <div className="event-text">
                      <div className="event-name">
                        <h4 className="event-name-text">{event.name}</h4>
                      </div>
                      <div className="event-description">
                        <p>{moment(event.date).format('MMM DD YYYY')}</p>
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
            <Map events={this.filteredEvents()}/>
          </div>
        </div>
      </div>
    )
  }
}

export default EventIndex


// handleMultiCatergorySelect(selected) {
//   const originalEvents = this.state.events
//   console.log(originalEvents)
//   console.log('selected:', selected)
//   if (!selected) return this.setState({ showEvents: originalEvents })
//   if (selected.length === 0) return this.setState({ showEvents: originalEvents })
//   const catSelected = selected ? selected.map(cat => cat.value) : []
//   console.log(catSelected)
//   const filteredEvents = originalEvents.filter(event => {
//     if (!event.category) return null
//     return catSelected.includes(event.category.toLowerCase())
//   })
//   console.log('filt', filteredEvents)
//   this.setState({ showEvents: filteredEvents })
// }

// handleDateSelect(date) {
//   const originalEvents = this.state.events
//   const dateSelected = date ? date : 'All Events'
//   const seven = moment().add(7, 'days')
//   const example = '2019-10-31'
//   console.log(dateSelected)

//   console.log(moment(example).isBetween(moment(), seven))
//   if (dateSelected.value === 'week') {
//     const filteredEvents = this.state.showEvents.filter(event => {
//       console.log(event.date)
//       if (!event.date) return null
//       console.log(moment(event.date).isBetween(moment(), seven))
//       return moment(event.date).isBetween(moment(), seven)
//     })
//     console.log(filteredEvents)
//     this.setState({ showEvents: filteredEvents })
//   } else {
//     this.setState({ showEvents: originalEvents })
//   }
// }