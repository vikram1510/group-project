import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className="home-page animated fadeIn">
        <div className="home-image">
          <h2 className="animated fadeInRight">{'{ techTalk }'}</h2>
          <div className="home-page-line animated fadeInRight"></div>
          <p className="animated fadeInRight">Welcoming tech professionals to the hub of programming events.</p>
          <p className="animated fadeInRight">An event for any stage in your career!</p>
        </div>
      </div>
    )
  }
}

export default Home