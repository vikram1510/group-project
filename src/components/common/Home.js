import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-image">
          <h2>{'{ techTalk }'}</h2>
          <div className="home-page-line"></div>
          <p>Welcoming tech professionals to the hub of programming events.</p>
          <p>An event for any stage in your career!</p>
        </div>
      </div>
    )
  }
}

export default Home