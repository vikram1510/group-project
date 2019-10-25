import React from 'react'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
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
  }

  render() {
    return (
      <div>
        <h1>Register Page</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </div>
          
          <div>
            <label>Email</label>
            <input
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Password Confirmation</label>
            <input
              name="passwordConfirmation"
              type="password"
              placeholder="Password Confirmation"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Register