import React from 'react'
import Kim from '../images/pexels-pierre-blaché-3347227.jpg'
import Album from './album.css'

function album() {
  return (
    <div>
        <img src={Kim} className="img-fluid" alt="..." id='gee'/>
    </div>
  )
}

export default album