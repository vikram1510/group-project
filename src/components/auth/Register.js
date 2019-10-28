import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
        // category: ''
      }
    }

    this.options = [
      { value: 'java', label: 'Java' },
      { value: 'swift', label: 'Swift' },
      { value: 'javascript', label: 'JavaScript' },
      { value: 'php', label: 'PHP' },
      { value: 'c++', label: 'C++' },
      { value: 'sql', label: 'SQL' },
      { value: 'python', label: 'Python' },
      { value: 'java', label: 'Java' }
    ]

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleMultiSelect = this.handleMultiSelect.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }
  handleSubmit(e) {
    e.preventDefault()
  }

  // handleMultiSelect(selected) {
  //   const category = selected ? selected.map(item => item.value) : [] //if selected maps categories, else-empty box
  //   const data = { ...this.state.data, category }
  //   this.setState({ data })
  // }

  render() {
    return (
      <div className="register-page">
        <h1>Register Page</h1>

        <form onSubmit={this.handleSubmit}>

          <div className="field">
            <label className="label">Username:</label>
            <div className="control">
              <input
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </div>
          </div>
          
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

          <div className="field">
            <label className="label">Password Confirmation:</label>
            <div className="control">
              <input
                name="passwordConfirmation"
                type="password"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
              />
            </div>
          </div>

          {/* <div className="field">
            <label className="label">Category:</label>
            <div className="control">
              <Select
                options={this.options}
                isMulti
                onChange={this.handleMultiSelect}
                components={animatedComponents}
              />
            </div>
          </div> */}
         
          <div className="category-container">
            <h3>Please select your language below: </h3>
            <div className="row1">
              <div className="category-box">Java</div>
              <div className="category-box">Swift</div>
              <div className="category-box">JavaScript</div>
              <div className="category-box">PHP</div>
            </div>
            <div className="row2">
              <div className="category-box">c++</div>
              <div className="category-box">SQL</div>
              <div className="category-box">Python</div>
              <div className="category-box">Ruby</div>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default Register