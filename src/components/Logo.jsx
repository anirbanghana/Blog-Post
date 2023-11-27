import React from 'react'
import pencile from '../assets/pencile_logo.jpg'

function Logo({width = '100px'}) {
  return (
    <img src={pencile} width={30} height={30} alt='Logo'/>
  )
}

export default Logo