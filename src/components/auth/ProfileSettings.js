import React from 'react'

class ProfileSettings extends React.Component {
  render() {
    return (

      <div className="settings-page">

        <form onSubmit={this.handleSubmit}>
          <h1>Edit Profile Settings</h1>

          <div className="field">
            <label className="label">Name:</label>
            <div className="control">
              <input
                name="email"
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