import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/auth'

class Navbar extends React.Component {

  handleLogout(){
    Auth.logout()
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
              </Link>
              <Link to='/events'>
                <i className="fa fa-search"></i>
              </Link>
            </div>         
            <div className="nav-bottom">
              {Auth.isAuthenticated() ?
            <>
              <Link to='/profile'>Profile</Link>
              <Link to='/'>Settings</Link>
              <Link to='/' onClick={this.handleLogout}>Logout</Link>
            </> :
            <>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
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



