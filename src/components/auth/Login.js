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
      },
      error: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: null })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.setState({ error: null })
    axios.post('/api/login', this.state.data)
      .then((res) => {
        Auth.setToken(res.data.token)
        this.props.history.push('/profile')
      })
      // .catch(err => console.log(err.response.data))
      .catch(err => this.setState({ error: err.response.data }))

  }

  render() {
    console.log(this.state)
    return (
      <div className="auth-page-login">
        <div className="form-box-login animated fadeInUp">
          <form onSubmit={this.handleSubmit}>
            <div className="form-title-wrapper">
              <h1>Login Page</h1>
            </div>
            
            <div className="form-input-wrapper">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  placeholder="test@mailbox.com"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-input-wrapper">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="form-input"
                  name="password"
                  type="password"
                  placeholder="Please enter your password here"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-button-wrapper">
              <button type="submit"
                className={`${this.state.error ? 'animated shake error' : ''}`}
              >Submit</button>
            </div>
            
          </form>
        </div>
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