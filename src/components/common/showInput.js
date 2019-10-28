import React from 'react'
import Auth from '../../lib/auth'

// class showInput extends 


const showInput = ({ name, value }) => {

  return (
    <input 
      className={`text ${Auth.isAuthenticated() ? 'enabled' : ''}`}
      name={name}
      value={value}
      disabled={!Auth.isAuthenticated()}>
    </input>
  )

}

export default showInput