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
        
        <form onSubmit={this.handleSubmit}>
          <h1>Register</h1>

          <div className="field">
            <label className="label">Username:</label>
            <div className="control">
              <input
                name="username"
                onChange={this.handleChange}
              />
            </div>
          </div>
          
          <div className="field">
            <label className="label">Email:</label>
            <div className="control">
              <input
                name="email"
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
                onChange={this.handleChange}
              />
            </div>
          </div>
         
          <div className="category-container">
            <p>Please select your language below: </p>
            {/* ROW 1 */}
            <div className="row1">

              <div className="category-box">
                <div className="box">
                  {/* WHITE LOGO */}
                  <img className="box-initial-image" src="../assets/java-white-button.png"></img>
                  <div className="box-overlay">
                    {/* TO COLOUR LOGO */}
                    <img className="box-after-image" src="../assets/javaT.png"></img>
                  </div>
                </div>
              </div>

              <div className="category-box">
                <div className="box">
                  <img className="box-initial-image" src="../assets/swift-white-button.png"></img>
                  <div className="box-overlay">
                    <img className="box-after-image" src="../assets/swift-colour-button.png"></img>
                  </div>
                </div>
              </div>

              <div className="category-box">
                <div className="box">
                  <img className="box-initial-image" src="../assets/js-white-button.png"></img>
                  <div className="box-overlay">
                    <img className="box-after-image" src="../assets/js-colour-button.png"></img>
                  </div>
                </div>
              </div>

              <div className="category-box">
                <div className="box">
                  <img className="box-initial-image" src="../assets/php-white-button.png"></img>
                  <div className="box-overlay">
                    <img className="box-after-image" src="../assets/php-colour-button.png"></img>
                  </div>
                </div>
              </div>

            </div>

            {/* ROW 2 */}
            <div className="row2">
              <p className="category-name">Java</p>
              <p className="category-name">Swift</p>
              <p className="category-name">JavaScript</p>
              <p className="category-name">PHP</p>
            </div>

            {/* ROW 3 */}
            <div className="row3">
              <div className="category-box">
                <div className="box">
                  <img className="box-initial-image" src="../assets/c-white-button.png"></img>
                  <div className="box-overlay">
                    <img className="box-after-image" src="../assets/c-colour-button.png"></img>
                  </div>
                </div>
              </div>

              <div className="category-box">
                <div className="box">
                  <img className="box-initial-image" src="../assets/sql-white-button.png"></img>
                  <div className="box-overlay">
                    <img className="box-after-image" src="../assets/sql-colour-button.png"></img>
                  </div>
                </div>
              </div>

              <div className="category-box">
                <div className="box">
                  <img className="box-initial-image" src="../assets/python-white-button.png"></img>
                  <div className="box-overlay">
                    <img className="box-after-image" src="../assets/python-colour-button.png"></img>
                  </div>
                </div>
              </div>

              <div className="category-box">
                <div className="box">
                  <img className="box-initial-image" src="../assets/ruby-white-button.png"></img>
                  <div className="box-overlay">
                    <img className="box-after-image" src="../assets/ruby-colour-button.png"></img>
                  </div>
                </div>
              </div>

            </div>

            {/* ROW 4 */}
            <div className="row4">
              <p className="category-name">C++</p>
              <p className="category-name">SQL</p>
              <p className="category-name">Python</p>
              <p className="category-name">Ruby</p>
            </div>

          </div>


          <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default Register