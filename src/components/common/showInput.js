import React from 'react'
import Auth from '../../lib/auth'
import TextAreaAutoSize from 'react-autosize-textarea'

const ShowInput = ({ name, value, className, handleInput, submitChange, hostId }) => {

  return (
    <div className="show-input">
      <TextAreaAutoSize 
        className={`text ${className} ${Auth.isCurrentUser(hostId) ? 'enabled' : ''}`}
        name={name}
        value={value}
        onChange={handleInput}
        onBlur={submitChange}
        disabled={!Auth.isCurrentUser(hostId)}
      >
        
      </TextAreaAutoSize>
    </div>

  )

}

export default ShowInput