import React from 'react'


const EventLogo = ({ category, colorCategory }) => {

  let imgSrc = null
  if (category){
    category = category.toLowerCase()
    if (category === 'c++') imgSrc = '../assets/c-white-button.png'
    else if (category === 'javascript') imgSrc = '../assets/js-white-button.png'
    else if (category === 'python') imgSrc = '../assets/python-white-button.png'
    else if (category === 'php') imgSrc = '../assets/php-white-button.png'
    else if (category === 'java') imgSrc = '../assets/java-white-button.png'
    else if (category === 'ruby') imgSrc = '../assets/ruby-white-button.png'
    else if (category === 'sql') imgSrc = '../assets/sql-white-button.png'
    else if (category === 'swift') imgSrc = '../assets/swift-white-button.png'
  } else if (colorCategory) {
    colorCategory = colorCategory.toLowerCase()
    if (colorCategory === 'c++') imgSrc = '../assets/c++.png'
    else if (colorCategory === 'javascript') imgSrc = '../assets/js-square-brands-orange.png'
    else if (colorCategory === 'python') imgSrc = '../assets/python.png'
    else if (colorCategory === 'php') imgSrc = '../assets/php-brands.png'
    else if (colorCategory === 'java') imgSrc = '../assets/java.png'
    else if (colorCategory === 'ruby') imgSrc = '../assets/ruby.png'
    else if (colorCategory === 'sql') imgSrc = '../assets/sql-color.png'
    else if (colorCategory === 'swift') imgSrc = '../assets/swift-brands.png'
  } else if (!imgSrc) return <p>Could not find category</p>
  return <img src={imgSrc}></img>
}

export default EventLogo