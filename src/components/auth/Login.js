import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', this.state.data)
      .then((res) => Auth.setToken(res.data.token))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              name="email"
              placeholder="email"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      
    )
  }
}

export default Login