import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

import Auth from '../../lib/auth'

class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {
      profilePic: ''
    }
  }

  handleLogout(){
    Auth.logout()
  }

  componentDidUpdate(prevProps){
    if (this.props !== prevProps){
      this.getProfilePic()
    }
  }

  componentDidMount(){
    this.getProfilePic()
  }

  getProfilePic(){
    if (Auth.isAuthenticated()) {
      axios.get('/api/profile', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
        .then(res => this.setState({ profilePic: res.data.profilePic }))
    }
  }


  render() {
    return (
      <div className="nav-sidebar" style={{ userSelect: 'none' }}>
        {/* <div className="burger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div> */}
        <div className="nav-wrapper">
          <nav>
            <div className="nav-top">
              <Link to='/' className="logo">
                {/* <i className="far fa-handshake"></i> */}
                <p><span>tech</span><span>Meet</span></p>
              </Link>
              <Link to='/'>
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
              <Link to='/events'>
                <i className="fa fa-search"></i>
                <span>Events</span>
              </Link>
            </div>         
            <div className="nav-bottom">
              {Auth.isAuthenticated() ?
            <>
              <Link to='/profile'>
                <div className="profile-wrapper">
                  <div className="profile">
                    <img src={this.state.profilePic}></img>
                  </div> 
                </div>
              </Link>
              <Link to='/settings'><i className="fas fa-cogs"></i></Link>
              <Link to='/' onClick={this.handleLogout}><button className="button-warning auth-button">
                <span>Logout</span>
              </button></Link>
            </> :
            <>
            <Link to='/register'>
              <button className="button-secondary auth-button">
                <span>Register</span>
              </button></Link>
            <Link to='/login'>
              <button className="button-secondary auth-button">
                <span>Login</span>
              </button></Link>
            </>
              }
            </div>       
            {/* <Link>Settings</Link> */}
          </nav>
        </div>

      </div>

    )
  }

}

export default withRouter(Navbar)



