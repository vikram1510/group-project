import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class EventCreate extends React.Component {
  constructor() {
    super()

    this.state = {
      event: {
        name: '',
        location: '',
        description: '',
        price: '',
        category: '',
        date: '',
        time: '',
        images: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({ event: { ...this.state.event, [e.target.name]: e.target.value } })
  }

  handleSubmit(e) {
    console.log('submitted')
    e.preventDefault()
    axios.post('/api/events', this.state.event, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.props.history.push(`/events/${res.data._id}`))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <div className='auth-page'>
        <div className="form-box">
          <div className="form-title-wrapper">
            <h1>Event Create</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-input-wrapper">
              <label>Event Name</label>
              <input className="form-input" type="text" placeholder="" name="name" onChange={this.handleChange}></input>
            </div>
            <div className="form-input-wrapper">
              <label>Event Location</label>
              <input className="form-input" type="text" placeholder="" name="location" onChange={this.handleChange}></input>
            </div>
            <div className="form-input-wrapper">
              <label>Event Description</label>
              <input className="form-input" type="text" placeholder="" name="description" onChange={this.handleChange}></input>
            </div>
            <div className="form-input-wrapper">
              <label>Price</label>
              <input className="form-input" type="number" placeholder="" name="price" onChange={this.handleChange}></input>
            </div>
            <div className="form-input-wrapper">
              <label>Language</label>
              <select className="form-input" name="category" value={this.state.event.category} onChange={this.handleChange}>
                <option value="" disabled>Pick a Language</option>
                <option value="Javascript">Javascript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="Java">Java</option>
                <option value="Swift">Swift</option>
                <option value="C++">C++</option>
                <option value="Sql">SQL</option>
                <option value="Ruby">Ruby</option>
              </select>
            </div>
            <div className="form-input-wrapper">
              <label>Event Date</label>
              <input className="form-input" type="date" placeholder="" name="date" onChange={this.handleChange}></input>
            </div>
            <div className="form-input-wrapper">
              <label>Event Time</label>
              <input className="form-input" type="time" placeholder="" name="time" onChange={this.handleChange}></input>
            </div>
            <div className="form-input-wrapper">
              <label>Event Image</label>
              <input className="form-input" type="text" placeholder="" name="images" onChange={this.handleChange}></input>
            </div>
            <div className="form-button-wrapper">
              <button>Create</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default EventCreate