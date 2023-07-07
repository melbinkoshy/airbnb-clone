import React from 'react'
import heroimg from '../assets/photo-grid.png'
export default function Hero(){
  return <div className='hero'>
    <img src={heroimg} className='hero-image'/>
    <div className='hero-content'>
              <h1 className='title'>Online Experiences</h1>
              <p className='description'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
  </div>
}