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
        

        <form onSubmit={this.handleSubmit}>
          <h1>Login Page</h1>
          
          <div className="field">
            <label className="label">Email:</label>
            <div className="control">
              <input
                name="email"
                placeholder="test@mailbox.com"
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
                placeholder="Please enter your password here"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>



        {/* SKELETON FORMS */}

        {/* <form>
          <h1>Login Page</h1>
          <div className="row">

            <div>
              <label htmlFor="exampleEmailInput">Email:</label>
              <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"/>

              <label htmlFor="exampleEmailInput">Password:</label>
              <input className="u-full-width" type="email" placeholder="Please enter your password here" id="exampleEmailInput" />
            </div>

          </div>

          <input className="button-primary" type="submit" value="Submit"/> 
        </form> */}

      </div>
      
    )
  }
}

export default Login