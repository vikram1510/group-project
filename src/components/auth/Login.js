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
      .then((res) => {
        Auth.setToken(res.data.token)
        this.props.history.push('/profile')
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="login-page">
        <h1>Login Page</h1>

        <form onSubmit={this.handleSubmit}>

          <div className="field">
            <label className="label">Email:</label>
            <div className="control">
              <input
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password:</label>
            <div className="control">
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>

      </div>
      
    )
  }
}

export default Login