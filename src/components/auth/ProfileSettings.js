import React from 'react'

class ProfileSettings extends React.Component {
  render() {
    return (
      <div className="settings-page-wrapper">
        <div className="form-wrapper">
          <form>
            <h3>Edit Profile Settings</h3>
            <div className="form-element">
              <label htmlFor="exampleEmailInput">Username:</label>
              <input className="input-element" type="email" placeholder="test@mailbox.com" id="exampleEmailInput" />
            </div>
            <div className="form-element">
              <label htmlFor="exampleEmailInput">Email:</label>
              <input className="input-element" type="email" placeholder="test@mailbox.com" id="exampleEmailInput" />
            </div>
          </form>
          

        </div>

      </div>
    )
  }
}

export default ProfileSettings