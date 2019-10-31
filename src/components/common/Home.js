import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-image">
          <h2>{'{ techTalk }'}</h2>
          <div className="home-page-line"></div>
          <p>A website about meetings on tech</p>
        </div>
      </div>
    )
  }
}

export default Home