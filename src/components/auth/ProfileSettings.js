import React from 'react'
import axios from 'axios'

class ProfileSettings extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        
        email: '',
        password: '',
        
        category: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    console.log(e.target)
    console.log('hi', e.target.name, e.target.value)
    const data = { ...this.state.data, [e.target.name]: e.target.value } //adds inputted data to initially empty keys
    // const errors = { ...this.state.data, [e.target.name]: '' }
    this.setState({ data }) //each key stroke causes re-render

  }
  handleSubmit(e) {
    e.preventDefault()  //stops page auto reload
    axios.post('/api/profile', this.state.data)  //posts inputted data to the api
      .then(res => console.log(res.data))
      .then(() => this.props.history.push('/profile')) // redirects user to login page
      .catch(err => this.setState({ errors: err.response.data.errors }))
    console.log('submitted', this.state.data)
  }


  render() {
    return (

      <div className="settings-page">

        <form onSubmit={this.handleSubmit}>
          <h1>Edit Profile Settings</h1>

          <div className="field">
            <label className="label">Email:</label>
            <div className="control">
              <input
                name="email"
                type="text"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password:</label>
            <div className="control">
              <input
                name="email"
                type="text"
                onChange={this.handleChange}
              />
            </div>
          </div>


          <div className="category-container">
            <p className="indent">Preferred language: </p>
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


          <button type="submit">Save</button>
        </form>

      </div>

        

    )
  }
}

export default ProfileSettings