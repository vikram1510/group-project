import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'

class ProfileSettings extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        
        category: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    console.log(e.target)
    // console.log('hi', e.target.name, e.target.value)
    const data = { ...this.state.data, [e.target.name]: e.target.value } //adds inputted data to initially empty keys
    // const errors = { ...this.state.data, [e.target.name]: '' }
    this.setState({ data }) //each key stroke causes re-render

  }
  handleSubmit(e) {
    e.preventDefault()  //stops page auto reload
    axios.post('/api/profile', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })  //posts inputted data to the api
      .then(res => console.log(res.data))
      .then(() => this.props.history.push('/profile')) // redirects user to login page
      .catch(err => this.setState({ errors: err.response.data.errors }))
    console.log('submitted', this.state.data)
  }


  render() {
    return (

      <div className="auth-page-setting">
        <div className="form-box-setting animated fadeInUp">

          <form onSubmit={this.handleSubmit}>
            <div className="form-title-wrapper">
              <h1>Edit Profile Settings</h1>
            </div>

            <div className="form-input-wrapper">
              <label>Email</label>
              <input
                className="form-input"
                name="email"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-input-wrapper">
              <label>Password</label>
              <input
                className="form-input"
                name="password"
                type="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input-wrapper">
              <label>Password Confirmation</label>
              <input
                className="form-input"
                name="passwordConfirmation"
                type="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input-wrapper">
              <label>Preferred language: </label>
            </div>

            
            {/* BOXES */}
            <div className="category-container-wrapper">
              <div className="category-container">
                
                {/* ROW 1 */}
                <div className="row1">

                  {/* RADIO BUTTON 1 */}
                  <label htmlFor="java"> {/* htmlFor -links to input id on radio button */}
                    <div className="category-box">
                      <div className="box" 
                        onClick={this.handleChange}
                        name="category"
                      >
                        {/* WHITE LOGO */}
                        {this.state.data.category === 'java' ?
                          <img className="box-after-image selected" src="../assets/javaT.png"></img> :
                        <>
                        <img className="box-initial-image" src="../assets/java-white-button.png"></img>
                        <div className="box-overlay"> {/* TO COLOUR LOGO */}
                          <img className="box-after-image" src="../assets/javaT.png"></img>
                        </div>
                        </>
                        }

                      </div>
                    </div>
                  </label>
                  <input // input=e.target
                    type="radio" 
                    id="java" 
                    name="category" 
                    onChange={this.handleChange}
                    checked={this.state.category === 'java'} // if category is java = true, if not false
                    value="java"
                  ></input> {/* handles radio button change */}




                  {/* RADIO BUTTON 2 */}
                  <label htmlFor="swift">
                    <div className="category-box">
                      <div className="box" onClick={this.handleChange} name="category">
                        {this.state.data.category === 'swift' ?
                          <img className="box-after-image selected" src="../assets/swift-colour-button.png"></img> :
                        <>
                          <img className="box-initial-image" src="../assets/swift-white-button.png"></img>
                          <div className="box-overlay">
                            <img className="box-after-image" src="../assets/swift-colour-button.png"></img>
                          </div>
                        </>
                        }

                      </div>
                    </div>
                  </label>
                  <input
                    type="radio"
                    id="swift"
                    name="category"
                    onChange={this.handleChange}
                    checked={this.state.category === 'swift'}
                    value="swift"
                  ></input>




                  {/* RADIO BUTTON 3 */}
                  <label htmlFor="js">
                    <div className="category-box">
                      <div className="box" onClick={this.handleChange} name="category">
                        {this.state.data.category === 'js' ?
                          <img className="box-after-image selected" src="../assets/js-colour-button.png"></img> :
                        <>
                          <img className="box-initial-image" src="../assets/js-white-button.png"></img>
                          <div className="box-overlay">
                            <img className="box-after-image" src="../assets/js-colour-button.png"></img>
                          </div>
                        </>
                        }

                      </div>
                    </div>
                  </label>
                  <input
                    type="radio"
                    id="js"
                    name="category"
                    onChange={this.handleChange}
                    checked={this.state.category === 'js'}
                    value="js"
                  ></input>
              
              
                  {/* RADIO BUTTON 4 */}
                  <label htmlFor="php">
                    <div className="category-box">
                      <div className="box" onClick={this.handleChange} name="category">
                        {this.state.data.category === 'php' ?
                          <img className="box-after-image selected" src="../assets/php-colour-button.png"></img> :
                        <>
                          <img className="box-initial-image" src="../assets/php-white-button.png"></img>
                          <div className="box-overlay">
                            <img className="box-after-image" src="../assets/php-colour-button.png"></img>
                          </div>
                        </>
                        }

                      </div>
                    </div>
                  </label>
                  <input
                    type="radio"
                    id="php"
                    name="category"
                    onChange={this.handleChange}
                    checked={this.state.category === 'php'}
                    value="php"
                  ></input>
              

                </div>

                {/* ROW 2 */}
                {/* <div className="row2">
                  <p className="category-name">Java</p>
                  <p className="category-name">Swift</p>
                  <p className="category-name">JavaScript</p>
                  <p className="category-name">PHP</p>
                </div> */}

                {/* ROW 3 */}
                <div className="row3">



                  {/* RADIO BUTTON 5 */}
                  <label htmlFor="c">
                    <div className="category-box">
                      <div className="box" onClick={this.handleChange} name="category">
                        {this.state.data.category === 'c' ?
                          <img className="box-after-image selected" src="../assets/c-colour-button.png"></img> :
                        <>
                          <img className="box-initial-image" src="../assets/c-white-button.png"></img>
                          <div className="box-overlay">
                            <img className="box-after-image" src="../assets/c-colour-button.png"></img>
                          </div>
                        </>
                        }

                      </div>
                    </div>
                  </label>
                  <input
                    type="radio"
                    id="c"
                    name="category"
                    onChange={this.handleChange}
                    checked={this.state.category === 'c'}
                    value="c"
                  ></input>



                  {/* RADIO BUTTON 6 */}
                  <label htmlFor="sql">
                    <div className="category-box">
                      <div className="box" onClick={this.handleChange} name="category">
                        {this.state.data.category === 'sql' ?
                          <img className="box-after-image selected" src="../assets/sql-colour-button.png"></img> :
                        <>
                          <img className="box-initial-image" src="../assets/sql-white-button.png"></img>
                          <div className="box-overlay">
                            <img className="box-after-image" src="../assets/sql-colour-button.png"></img>
                          </div>
                        </>
                        }

                      </div>
                    </div>
                  </label>
                  <input
                    type="radio"
                    id="sql"
                    name="category"
                    onChange={this.handleChange}
                    checked={this.state.category === 'sql'}
                    value="sql"
                  ></input>
              

                

                  {/* RADIO BUTTON 7 */}
                  <label htmlFor="python">
                    <div className="category-box">
                      <div className="box" onClick={this.handleChange} name="category">
                        {this.state.data.category === 'python' ?
                          <img className="box-after-image selected" src="../assets/python-colour-button.png"></img> :
                        <>
                          <img className="box-initial-image" src="../assets/python-white-button.png"></img>
                          <div className="box-overlay">
                            <img className="box-after-image" src="../assets/python-colour-button.png"></img>
                          </div>
                        </>
                        }

                      </div>
                    </div>
                  </label>
                  <input
                    type="radio"
                    id="python"
                    name="category"
                    onChange={this.handleChange}
                    checked={this.state.category === 'python'}
                    value="python"
                  ></input>


                  {/* RADIO BUTTON 8 */}
                  <label htmlFor="ruby">
                    <div className="category-box">
                      <div className="box" onClick={this.handleChange} name="category">
                        {this.state.data.category === 'ruby' ?
                          <img className="box-after-image selected" src="../assets/ruby-colour-button.png"></img> :
                        <>
                          <img className="box-initial-image" src="../assets/ruby-white-button.png"></img>
                          <div className="box-overlay">
                            <img className="box-after-image" src="../assets/ruby-colour-button.png"></img>
                          </div>
                        </>
                        }

                      </div>
                    </div>
                  </label>
                  <input
                    type="radio"
                    id="ruby"
                    name="category"
                    onChange={this.handleChange}
                    checked={this.state.category === 'ruby'}
                    value="ruby"
                  ></input>


                </div>

                {/* ROW 4 */}
                {/* <div className="row4">
                  <p className="category-name">C++</p>
                  <p className="category-name">SQL</p>
                  <p className="category-name">Python</p>
                  <p className="category-name">Ruby</p>
                </div> */}

              </div>

            </div>
            <div className="form-button-wrapper-setting">
              <button type="submit">Submit</button>
            </div>
          </form>

        </div>


      </div>

        

    )
  }
}

export default ProfileSettings