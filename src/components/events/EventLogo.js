import React from 'react'


const EventLogo = ({ category }) => {

  category = category.toLowerCase()

  let imgSrc = null

  if (category === 'c++') imgSrc = '../assets/c-white-button.png'
  else if (category === 'javascript') imgSrc = '../assets/js-white-button.png'
  else if (category === 'python') imgSrc = '../assets/python-white-button.png'
  else if (category === 'php') imgSrc = '../assets/php-white-button.png'
  else if (category === 'java') imgSrc = '../assets/java-white-button.png'
  else if (category === 'ruby') imgSrc = '../assets/ruby-white-button.png'
  else if (category === 'sql') imgSrc = '../assets/sql-white-button.png'
  else if (category === 'swift') imgSrc = '../assets/swift-white-button.png'

  if (!imgSrc) return <p>Could not find category</p>
  return <img src={imgSrc}></img>

}

export default EventLogo